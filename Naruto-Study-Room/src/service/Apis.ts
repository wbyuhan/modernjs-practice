import { request } from '../utils/request';

const demoRequest = async (params?: {} | undefined) =>
  request({ url: '/api/user/login', data: params });

const userInfoRequest = async () => request({ url: '/api/user/userInfo', method: 'GET' });

const tableDataRequest = async (params) =>
  request({ url: '/api/policy', method: 'GET', data: params });

const frinendDataRequest = async (params?: {} | undefined) =>
  request({ url: '/api/data/flow', method: 'GET', data: params });

const managermentsListRequest = async (params?: {} | undefined) =>
  request({ url: '/api/user/manager/list', method: 'post', data: params });

export interface Response {
  data: any;
  status: number;
  statusText: string;
}

export {
  demoRequest,
  userInfoRequest,
  tableDataRequest,
  frinendDataRequest,
  managermentsListRequest,
};
