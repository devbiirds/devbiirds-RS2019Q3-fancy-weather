import Control from '.././../controls/controls.js';
class ChangeTemp {
  constructor(_temp) {
  this.temp = _temp;
  this.temp.addEventListener('click', Control.ChangeTemp);
  }
  
}
export default ChangeTemp;
