import template from './language.html';

class ChangeLang {
  constructor() {
    this.btnChangeLang.appendChild(template);
    this.btnChangeLang.addEventListener('click');
  }
}
export default ChangeLang;
