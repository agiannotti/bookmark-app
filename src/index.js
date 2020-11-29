import $ from 'jquery';

import 'normalize.css';
import './index.css';

import bookmarks from './bookmarks';
import store from './store';
import api from './api';


const main = function () {
  api.getBookmark()
    .then((items) => {
      items.forEach((item) => store.addBookmark(item));
      bookmarks.render();
    });
  bookmarks.bindEventListeners();
  bookmarks.render();
};

$(main);
