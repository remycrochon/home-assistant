const verbose = VERBOSE;
const loginAmazon = LOGIN_WITH_AMAZON;
const loginUsername = LOGIN_WITH_USERNAME;
let url = '';

function getUrlParameters() {
  let query = window.location.search.substring(1);
  let keyValues = query.split('&');
  let parameterMap = {};
  for (let i in keyValues) {
    let param = keyValues[i];
    let splitParam = param.split('=');
    parameterMap[splitParam[0]] = splitParam[1];
  }
  return parameterMap;
}

document.addEventListener("DOMContentLoaded", function (event) {
  url = window.location.href.split('?')[0];
  if (verbose) console.log("url = " + url);
  document.getElementById("login-form").action = url;

  let params = getUrlParameters();
  Object.keys(params).forEach(function (key) {
    if (verbose) {
      console.log('' + key + " = " + params[key]);
      let v =  decodeURIComponent(params[key]);
      if (v !== params[key]) console.log('' + key + " => " + v);
    }
    let elm = document.querySelector('[name="' + key + '"]');
    if (elm) {
      elm.value = decodeURIComponent(params[key]);
    }
  });

  if (loginAmazon) {
    if (verbose) console.log("Login with Amazon");
    document.getElementById('login-amazon').style.display = 'block';
  }
  if (loginUsername) {
    if (verbose) console.log("Login with Username");
    document.getElementById('login-form').style.display = 'block';
  }

  if (params['error']) {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('error-message').innerHTML = params['error'];
  }
});

if (loginAmazon) {
  window.onAmazonLoginReady = function () {
    amazon.Login.setClientId('CLIENT_ID');
  };

  (function (d) {
    var a = d.createElement('script'); a.type = 'text/javascript';
    a.async = true; a.id = 'amazon-login-sdk';
    a.src = 'https://assets.loginwithamazon.com/sdk/na/login1.js';
    d.getElementById('amazon-root').appendChild(a);
  })(document);

  document.getElementById('LoginWithAmazon').onclick = function () {
    if (verbose) console.log("GO url = " + url);
    options = { popup: false }
    options.scope = 'profile';
    options.response_type = 'code';
    options.scope_data = {
      'profile': { 'essential': false }
    };
    amazon.Login.authorize(options, url);
    return false;
  };

  document.getElementById('Logout').onclick = function () {
    amazon.Login.logout();
  };
}
