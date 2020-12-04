import $ from 'jquery';

import 'normalize.css';
import './index.css';

import bookmarksList from './bookmark-main';
import api from './api';
import store from './store';

const main = function () {
  api.getBookmark()
  
    .then((items) => {
      items.forEach((item) => store.addBookmark(item));
      items.forEach((item) => item.expanded = false);
      bookmarksList.render();

    });
  

  bookmarksList.bindEventListeners();
  bookmarksList.render();
};

$(main);

