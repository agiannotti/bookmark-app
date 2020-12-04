import bookmarks from './bookmark-main';
import api from './api';
import store from './store';
import $ from 'jquery';
import './index.css';

function main () {
  api.getBookmark()
    .then((STORE) => {
      STORE.forEach((item) => store.addBookmark(item));
      bookmarks.render();
    });
  bookmarks.render();
}

$(main);