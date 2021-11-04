import Mock from 'mockjs';
import qs from 'query-string';
import setupMock from '../utils/setupMock';

const Random = Mock.Random;

const data = Mock.mock({
  'list|55': [
    {
      'userId|8': /[A-Z][a-z][-][0-9]/,
      'userName|4-8': /[A-Z]/,
      'workflow|4': /[A-Z][a-z][-][0-9]/,
      studyTime: `${Random.date('m')} Min`,
      duration: `${Random.date('m')} Min`,
      'userTel|1-11': /[1-9]/,
      accountBalance: `${Random.date('m')} $`,
      status: Random.pick(['success', 'pending', 'failed']),
      registrationTime: Random.datetime(),
      deadline: Random.datetime(),
    },
  ],
});

setupMock({
  setup() {
    Mock.mock(new RegExp('/api/user/manager/list'), (params) => {
      console.log('%c 🍬 params: ', 'font-size:20px;background-color: #465975;color:#fff;', params);
      const { page = 1, pageSize = 10 } = qs.parseUrl(params.url).query;
      const p = page as number;
      const ps = pageSize as number;

      return {
        list: data.list.slice((p - 1) * ps, p * ps),
        total: 55,
      };
    });
  },
});
