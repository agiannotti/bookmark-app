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

const generateItemElement = function (item) {
  let itemTitle = `<span class="">${item.name}</span>`;
  return `
    <li class="" data-item-id="${item.id}">
      ${itemTitle}
      <div class="">
        <button class="">Edit</button>
        <button class="">
        <span>delete</span>
        </button>
      </div>
    </li>`;
};

const generateBookmarkString = function (bookmarks) {
  const items = bookmarks.map((item) => generateItemElement(item));
  return items.join('');
};

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
  <input type="number" name="rating" maxlength="5" id="js-rating" class="" required>
  <button class="add-bookmark" type='submit'>Add Bookmark</button>
  </form>
  </div>
  `;
}

const generateError = function (message) {
  return `
      <section class="error-content">
        <button id="cancel-error">X</button>
        <p>${message}</p>
      </section>
    `;
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
    console.log($(event.target).serializeJson());
    let bookmark =$(event.target).serializeJson();
    
    api.createBookmark(bookmark)
      .then((newItem) => {
        store.addBookmark(newItem);
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderError();
      });
      
  });
}

const render = function () {
  renderError();
  let html = generateBookmarkData();
  $('main').html(html);

  let items = [...store.items];

  // render the shopping list in the DOM
  const bookmarksString = generateBookmarkString(items);

  // insert that HTML into the DOM
  $('main').html(bookmarksString);
};


const bindEventListeners = function () {
  handleNewItemSubmit();
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