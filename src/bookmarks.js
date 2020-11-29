import $ from 'jquery';
import store from './store';
import api from './api';


$.fn.extend({
  serializeJson: function() {
    const formData = new FormData(this[0]);
    const o = {};
    formData.forEach((val, name) => o[name] = val);
    return JSON.stringify(o);
  }
});

function generateMainPage() {
  return `
  <div class="js-container">
  <h2>Bookmark App</h2>
  <form id="bookmark-entry-form">
  <label for="add-bookmark">Bookmark Title</label>
  <input type="text" name="title" class="js-bookmark-title">
  <br>
  <label for="add-bookmark">Bookmark Description</label>
  <input type="text" name="desc" class="js-bookmark-desc">
  <button class="add-bookmark" type='submit'>Add Bookmark</button>
  </form>
  </div>
  `;
}

/*
function generateBookmarkList() {

}
*/

const generateError = function (message) {
  return `
      <section class="error-content">
        <button id="cancel-error">X</button>
        <p>${message}</p>
      </section>
    `;
};

const render = function () {
  let html = generateMainPage();
  $('main').html(html);
};

const renderError = function () {
  if (store.error) {
    const el = generateError(store.error);
    $('.error-container').html(el);
  } else {
    $('.error-container').empty();
  }
};

function handleNewItemSubmit() {
  $('#bookmark-entry-form').on('submit', event => {
    event.preventDefault();
    console.log(event.target);
    console.log($(event.target).serializeJson());
    //let bookmark =$(event.target).serializeJson();
    /*
    api.createItem(bookmark)
      .then((newItem) => {
        store.addItem(newItem);
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderError();
      });
      */
  });
}

const bindEventListeners = function () {
  handleNewItemSubmit();
  //handleItemCheckClicked();
  //handleDeleteItemClicked();
  //handleEditShoppingItemSubmit();
  //handleToggleFilterClick();
  //handleCloseError();
};


// This object contains the only exposed methods from this module:

export default {
  render,
  bindEventListeners
};