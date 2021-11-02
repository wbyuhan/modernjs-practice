import { atom } from 'recoil';

export const tableStatus = atom({
  key: 'tableStatus',
  default: {
    data: [],
    pagination: {
      sizeCanChange: true,
      showTotal: true,
      pageSize: 10,
      current: 1,
      pageSizeChangeResetCurrent: true,
      total: 0,
    },
    loading: true,
    formParams: {},
  },
});
