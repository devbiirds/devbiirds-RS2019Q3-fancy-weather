import Control from '../controls/controls.js';
export default class HTTP{
    constructor(){

    }
    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
  
     static Get(url) {
         
          return fetch(url).then(this.checkStatus).then((response) => response.json());
        }
      
    
}