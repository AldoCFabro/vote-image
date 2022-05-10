import request from '../utils/request';

export const getSellers = async () => {
  const response: any = await request({
    url: 'sellers/',
    method: 'get',
  });
  return response.data;
};
