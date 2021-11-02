import Mock from 'mockjs';
import setupMock from '../utils/setupMock';

const friendList = Mock.mock({
  'list|1-20': [
    {
      'friendID|+1': 1,
      'id|+1': 1,
      'name|4-8': /[A-Z]/,
    },
  ],
});

setupMock({
  setup() {
    Mock.XHR.prototype.withCredentials = true;
    Mock.mock(new RegExp('/api/data/flow'), (params) => {
      const { userID } = JSON.parse(params.body);
      if (userID) {
        return friendList.list.filter((item: { friendID: number }) => item.friendID === userID);
      }
      return friendList.list;
    });
  },
});
