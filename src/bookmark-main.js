/* eslint-disable quotes */
import $ from 'jquery';
import api from './api';
import store from './store';
import html from './bookmark-html';

$.fn.extend({
  serializeJson: function() {
    const formData = new FormData(this[0]);
    const output = {};
    formData.forEach((val, name) => output[name] = val);
    return JSON.stringify(output);
  }
});


const render = function () {
  const renderBookmark = [...store.STORE.bookmarks];
  if (store.STORE.adding === false) {
    $("main").html(html.generateMain(renderBookmark));
    renderError();
    handleAddBookmark();
    handleExpand();
    handleFilter();
    handleBookmarkDelete();
  } else {
    $("main").html(html.addBookmark());
    handleSubmitAdd();
    handleSubmitCancel();
    renderError();
  }
};

const renderError = function () {
  if (store.STORE.error) {
    const e = generateError(store.STORE.error);
    $('.error-message').html(e);
  } else {
    $('.error-message').empty();
  }
  handleError();
};

const generateError = function (message) {
  return `
        <section class="error-content">
        <p>${message}</p>
          <button id="cancel-error">Close</button>
        </section>
      `;
};

const getIdFromElement = function (item) {
  return $(item)
    .closest('.collapsible')
    .data('bookmark-id');
};

const getDelete = function (item) {
  return $(item)
    .closest('.delete-button')
    .data('bookmark-id');
};

const handleExpand = function () {
  $('.collapsible').click((event => {
    const panelID = getIdFromElement(event.currentTarget);
    store.expandThis(panelID);
    render();
  }));
};

const handleSubmitAdd = function() {
  $('.form-add').on('click', '.submit-form',(event) => {
    event.preventDefault();
    const newBookmark = $('.form-add').serializeJson();
    api.createBookmark(newBookmark)
      .then((newData) => {
        store.addBookmark(newData);
        store.STORE.adding = false;
        render();
      })
      .catch ((error) => {
        store.setError(error.message);
        renderError();
      }); 
  });
};

const handleSubmitCancel = function () {
  $('.cancel-button').click(() => {
    store.STORE.adding = false;
    render();
  });
};


const handleFilter = function () {
  $('.filter').change,(() => {
    let filter = $('#filter').val();
    store.STORE.filter = filter;
    render();
  });
};


const handleBookmarkDelete = function () {
  $('.delete-button').click(event => {
    const id = getDelete(event.currentTarget);
    api.deleteBookmark(id)
      .then(()=>{
        store.findAndDelete(id);
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderError();
      });
  });
};

const handleError = function () {
  $('.error-message').on('click', '#cancel-error', () => {
    store.setError();
    renderError();
  });
};


const handleAddBookmark= function () {
  $('.new-button').click(()=> {
    store.STORE.adding = true;
    render();
  });
};


export default {
  render
};