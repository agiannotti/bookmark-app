import $ from 'jquery';
//import store from './store';
//import api from './api';


function generateMainPage() {
  return `
  <div id="js-container">
  <h2>Bookmark App</h2>
  <form id="bookmark-entry-form">
  <label for="bookmark-title-entry">Bookmark Title</label>
  <input type="text" name="bookmark-title-entry" class="js-bookmark-title">
  <br>
  <label for="bookmark-desc-entry">Bookmark Description</label>
  <input type="text" name="bookmark-desc-entry" class="js-bookmark-desc">
  <button id="add-bookmark" type="submit">Add Bookmark</button>
  </form>
  </div>
  `;
}

const render = function () {
  let html = generateMainPage();
  $('main').html(html);
};


function handleNewItemSubmit() {
  $('main').on('click','#add-bookmark', event => {
    event.preventDefault();
    console.log('clicked');
  });
}

const bindEventListeners = function () {
  handleNewItemSubmit();
};




// This object contains the only exposed methods from this module:

export default {
  render,
  bindEventListeners
};