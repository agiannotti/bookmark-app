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

/*
function generateAddBookmark() {
  return `<h2>Bookmark App</h2>
  <button class="add-bookmark" type='submit'>Add Bookmark</button>
  </form>
  `;
}
*/

function generateBookmarkData() {
  return `
  <div class="js-container">
  <h2>Bookmark App</h2>
  <form id="bookmark-entry-form">
  <label for="js-title">Title</label>
  <input type="text" name="title" id="js-title" class="" required>
  <br>
  <label for="js-url">URL</label>
  <input type="text" name="url" id="js-url" class="" required>
  <label for="js-desc">Description</label>
  <input type="text" name="desc" id="js-desc" class="" required>
  <label for="js-rating">Rating</label>
  <input type="text" name="rating" id="js-rating" class="" required>
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
  let html = generateBookmarkData();
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
  $('main').on('submit', '#bookmark-entry-form', event => {
    event.preventDefault();
    //console.log(event.target);
    console.log($(event.target).serializeJson());
    let bookmark =$(event.target).serializeJson();
    
    api.createItem(bookmark)
      .then((newItem) => {
        store.addItem(newItem);
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderError();
      });
      
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