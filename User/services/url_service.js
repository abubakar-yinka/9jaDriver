const UrlService = {
  // BASE_URL: 'http://localhost:8087/api/v1',
  // BASE_PATH: 'http://localhost:8087/api/v1',
  BASE_URL: 'https://njarideapi.herokuapp.com/api/v1',
  BASE_PATH: 'https://njarideapi.herokuapp.com/api/v1',
  //=====================================
  //=====================================
  SIGNUP: '/user/create',
  SIGNIN: '/users/login',
  CREATE_ORDER: '/orders/create',
  FETCH_ORDER: '/orders/fetch',
  FETCH_ORDER_BY_ORDERID: '/orders/fetchByOrderId/',
  ADD_CARS: '/cars/add',
  GET_CARS: '/cars',
  MY_CAR: '/cars/mine/',
  FETCH_NEW_ORDERS: '/orders/new',
  UPDATE_ORDER: '/orders/update',
  UPDATE_CAR_DATA: '/'


};
export default UrlService;
