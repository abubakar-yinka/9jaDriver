import request from './request_service';
import UrlService from './url_service';

class AppService {

  static userRegister(params) {
    let options = Object();
    options.url = UrlService.SIGNUP;
    options.params = params;
    return request.post(options);
  }

  static userLogin(params) {
    let options = Object();
    options.url = UrlService.SIGNIN;
    options.params = params;
    return request.post(options);
  }

  static createOrder(params){
    let options = Object();
    options.url = UrlService.CREATE_ORDER;
    options.params = params;
    return request.post(options);
  }

  static fetchOrder(params){
    let options = Object();
    options.url = UrlService.FETCH_ORDER;
    options.params = params;
    return request.post(options);
  }

  static fetchOrderByOrderId(orderId){
    let options = Object();
    options.url = UrlService.FETCH_ORDER_BY_ORDERID+orderId;
    //options.params = params;
    return request.get(options);
  }


  static fetchMyCar(id) {
    let options = Object();
    options.url = UrlService.MY_CAR+id;
    return request.get(options);
  }

  static fetchNewOrders() {
    let options = Object();
    options.url = UrlService.FETCH_NEW_ORDERS;
    //options.params = params;
    return request.post(options);
  }

  static updateOrder(params) {
    let options = Object();
    options.url = UrlService.UPDATE_ORDER;
    options.params = params;
    return request.post(options);
  }

  static updateCarData(params) {
    let options = Object();
    options.url = UrlService.UPDATE_CAR_DATA;
    options.params = params;
    return request.post(options);
  }
}

export default AppService;
