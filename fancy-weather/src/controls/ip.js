export default class IP {
  static GetIP() {
    const url = "http://ipinfo.io?token=a993f39951afab";
    // eslint-disable-next-line no-undef
    return fetch(url).then(this.checkStatus).then((response) => response.json());
  }
}
