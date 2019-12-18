import Generation from './components/generation.js';
import Search from './components/Search/search.js';
import { input, submit } from './components//Search/items_search.js';
import './scss/main.scss';

Generation();
console.log(input);
const search = new Search(input, submit);
