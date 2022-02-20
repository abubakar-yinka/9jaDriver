import UrlService from './url_service';
const request = {};


request.make = ops => {
  let url = UrlService.BASE_PATH+ops.url;
  let headers = new Headers();
  if (ops.formData) {
    headers.delete('Content-Type');
  } else {
    headers.append('Content-Type', 'application/json');
  }

  if (ops.headers) {
    for (var key in ops.headers) {
      headers.append(key, ops.headers[key]);
    }
  }

  let body = null;
  if (ops.formData) {
    body = ops.params;
  } else {
    if (ops.params) {
      body = JSON.stringify(ops.params);
    }
  }

  var request = new Request(url, {
    method: ops.method,
    body: body,
    headers: headers,
  });

  return fetch(request)
    .then(response => {
      if (response.status === 401) {
        return response.json();
      }
      return response.json();
    })
    .catch(error => {
      return error;
    })
    .then(response => {
      return response;
    });
};

request.get = options => {
  options.method = 'GET';
  return request.make(options);
};

request.post = options => {
  options.method = 'POST';
  return request.make(options);
};

request.put = options => {
  options.method = 'PUT';
  return request.make(options);
};

request.delete = options => {
  options.method = 'DELETE';
  return request.make(options);
};

export default request;
