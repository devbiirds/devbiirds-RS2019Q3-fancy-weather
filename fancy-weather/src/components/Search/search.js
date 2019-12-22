import Control from '../../controls/controls.js';
export default class Search {
constructor(_input,_submit){
    this.input = _input;
    this.submit = _submit;
    this.submit.addEventListener('click',()=>{
        this.ReadData();
   })
}

ReadData() {
     Control.Search(this.input.value);
}
}
