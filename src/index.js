import $ from 'jquery';

import 'normalize.css';
import './index.css';

import bookmarks from './bookmarks';
//import store from './store';
//import api from './api';


const main = function () {
  //bookmarks.bindEventListeners();
  bookmarks.render();
};

$(main);
