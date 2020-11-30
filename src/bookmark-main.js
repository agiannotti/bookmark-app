import $ from 'jquery';
import store from './store';
import api from './api';

$.fn.extend({
  serializeJson: function () {
    const formData = new FormData(this[0]);
    const o = {};
    formData.forEach((val, name) => o[name] = val);
    return JSON.stringify(o);
  }
});

const getItemIdFromElement = function (item) {
  return $(item)
    .closest('.js-item-element')
    .data('item-id');
};

const render = function () {
  renderError();
  let items = [...store.bookmarks];
  items = items.filter(item => item.rating >= store.filter);
  const bookmarkListItemsString = generatebookmarkItemsString(items);
  if (store.adding === false) {
    let html =generateFormView();
    $('.main').html(html);
    $('.js-bookmark-list').html(bookmarkListItemsString);
  } else {
    $('.my-bookmarks-view').empty();
  }
};

const renderError = function () {
  if (store.error) {
    const el = generateError(store.error);
    $('.error-container').html(el);
  } else {
    $('.error-container').empty();
  }
};

const addNewForm = function () {
  if (store.adding) {
    const newForm = 
    ` 
      <div class="error-container"> </div>
      <form id="js-new-bookmark-form">
      <button class="create" type="submit">Add</button>
      <button class="cancel" type="reset">Cancel</button>
      <br>
      <label for="bookmark-entry">Bookmark URL</label>
      <br>
      <input type="text" name="url" class="bookmark-url-entry" value="https://"placeholder="https://www.google.com" required>
      <br>
      <label for="bookmark-title-entry">Bookmark Title</label>
      <br>
      <input type="text" name="title" class="bookmark-title-entry" placeholder="Google" >
      <br>
      <label for="bookmark-title-entry">Description</label>
      <br>
      <input type="text" name="desc" class="bookmark-description-entry" placeholder="Details">
      <br>
      <label for="bookmark-rating-entry">Rating</label>
      <br>
      <div class="txt-center">
      <div class="rating">
      <br>
      <input id="1" name="rating" type="radio" value="1" class="radio-btn hide" />
      <label for="1" >1</label>
      <input id="2" name="rating" type="radio" value="2" class="radio-btn hide" />
      <label for="2" >2</label>
      <input id="3" name="rating" type="radio" value="3" class="radio-btn hide" />
      <label for="3" >3</label>
      <input id="4" name="rating" type="radio" value="4" class="radio-btn hide" />
      <label for="4" >4</label>
      <input id="5" name="rating" type="radio" value="5" class="radio-btn hide" />
      <label for="5" >5</label>
      <div class="clear"></div>
      </div>
      </div>
      </form>
      `;

    $('.new-bookmark-form').html(newForm);
  } else {
    $('.new-bookmark-form').empty();
  }
  render();
};

const generateItemElement = function (item) {
  function ratingNumber(item) {
    let rated =[];
    if (item.rating < 1) {
      for (let i = 0; i < item.rating; i++) {
        rated.push('<label type="radio" checked="checked" class="rated"></label>');
      }
    }
    return rated.join(' ');
  }
  let itemTitle = 
  `
    <form id="js-edit-item-form"></form>
    <input class="bookmark-item" type="text" value="${item.title}" required/>
    <div class="rating-box">${ratingNumber(item)}</div>
    <br>
    <label><a href="${item.url}" target="new_blank">${item.url}</a></label>
    <div class="bookmark-desc">${item.desc}</div>
    <div class="bookmark-item-controls">
    <button class="bookmark-item-toggle js-item-toggle"><span class="button-label">Save</span></button>
    <button class="bookmark-item-delete js-item-delete"><span class="button-label">Delete</span></button>
    </div>
    `;

  if (!item.expanded) {
    itemTitle =
      `<div class="bookmark-box">
    <div class="bookmark-item bookmark-item_expanded">${item.title}</div>
    <div class="rating-box">${ratingNumber(item)}</div>
    </div> `;
  }
  return `
    <div class="js-item-element" data-item-id="${item.id}">
      ${itemTitle}
    </div>`;
};


const generatebookmarkItemsString = function (bookmarksList) {
  const items = bookmarksList.map((item) => generateItemElement(item));
  return items.join('');
};

const generateError = function () {
  return `
    <section class = "error-content">
    <button id="cancel-error">URL and Title are required!</button>
    </section>
    `;
};

const generateFormView = function () {
  return`
  <div class="new-bookmark-form"> </div>
  <div class = "my-bookmarks-view">
  <header>
  <form id="initial-view">
  <button class="initial-view-new"><span class="button-label">Add Bookmark</span></button>
  <br>
  <select id="ratings" name="ratings">
  <option> <span class="button-label"></span>Filter By</span></option>
  <option value="1">1 star</option>
  <option value="2">2 stars</option>
  <option value="3">3 stars</option>
  <option value="4">4 stars</option>
  <option value="5">5 stars</option>
  </select>
  </form>
  </header>
  <p class="bookmark-list js-bookmark-list"></p>
  </div>`;
};

const handleCloseError = function () {
  $('.main').on('click', '#cancel-error', () => {
    store.setError(null);
    renderError();
  });
};

const handleNewItemSubmit = function () {
  $('.main').on('submit', '#js-new-bookmark-form', event => {
    event.preventDefault();
    const bookmark = $(event.target).serializeJson();
    api.createBookmark(bookmark)
      .then((bookmark) => {
        store.addBookmark(bookmark);
        store.adding = false;
        store.filter = 0;
        addNewForm();
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderError();
      });
  });
};

const handleDeleteItemClicked = function () {
  $('.main').on('click', '.js-item-delete', event => {
    const id = getItemIdFromElement(event.currentTarget);
    api.deleteBookmark(id)
      .then(() => {
        store.findAndDelete(id);
        render();
      })
      .catch((error) => {
        store.setError(error.message);
        renderError();
      });
  });
};

const handleEditbookmarkItemSubmit = function () {
  $('.main').on('submit', '#js-edit-item-form', event => {
    event.preventDefault();
    const id = getItemIdFromElement(event.currentTarget);
    const itemName = $(event.currentTarget).find('.bookmark-item').val();
    api.updateBookmark(id, {
      title: itemName
    })
      .then(() => {
        store.findAndUpdate(id, {
          title: itemName
        });
        store.filter = 0;
        render();
      })
      .catch((error) => {
        console.log(error);
        store.setError(error.message);
        renderError();
      });
  });
};

const handleItemExpandClicked = function () {
  $('.main').on('click', '.bookmark-item_expanded', event => {
    const id = getItemIdFromElement(event.currentTarget);
    const item = store.findById(id);
    item.expanded = !item.expanded;
    render();
  });
};

const handleOkClicked = function () {
  $('.main').on('click', '.js-item-toggle', event => {
    const id = getItemIdFromElement(event.currentTarget);
    const item = store.findById(id);
    item.expanded = !item.expanded;
    render();
  });
};

const handleFilterClick = function () {
  let filterValue = $('#ratings option:selected').val();
  store.filter = filterValue;
  render();
};

const handleNewCancel = function () {
  $('.main').on('click', '.cancel', function (event) {
    event.preventDefault();
    store.adding = false;
    addNewForm();
    render();
  });
};

const handleNewSubmit = function () {
  $('.main').on('click', '.initial-view-new', function () {
    event.preventDefault();
 
    store.adding = true;
    addNewForm();
  });
};

const bindEventListeners = function () {
  handleNewItemSubmit();
  handleItemExpandClicked();
  handleDeleteItemClicked();
  handleEditbookmarkItemSubmit();
  handleCloseError();
  handleNewSubmit();
  handleNewCancel();
  handleOkClicked();
  $('.main').on('change', '#ratings', handleFilterClick);
};

export default {
  render,
  bindEventListeners
};