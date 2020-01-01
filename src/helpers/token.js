export function getToken() {
  return window.sessionStorage.getItem('token');
}

export function setToken(value) {
  return window.sessionStorage.setItem('token', value);
}

export function removeToken() {
  return window.sessionStorage.removeItem('token');
}
