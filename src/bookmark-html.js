/* eslint-disable quotes */
import store from './store';


const generateMain = function(htmlList) {
  let listHtml = htmlList.map(array => generateView(array));  
  return `
  <div id="buttons" class="buttons">
  <h1>Bookmark App!</h1>
  <div class="new-button">
  <button id="new-button" class="new-button">Add Bookmark</button>
  </div>
  <select name="filter" id="filter" class="filter">
  <option value="0">Filter by</option> 
  <option value="2">2 hearts</option>
  <option value="3">3 hearts</option>
  <option value="4">4 hearts</option>
  <option value="5">5 hearts</option>
  <option value="0">Show All</option>
  </select>
  </div>
  <br>
  <div class="main-display" id="main-display">
  ${listHtml.join('')}
  </div>`;
};

const generateView = function (array) {
  if (array.rating >= store.STORE.filter) {
    if(array.expanded === true){
      return panelView(array);
    } else {
      return defaultView(array);
    }
  }
};



const defaultView = function (array) {
  return `
  <div class="content">
  <button type="button" class="collapsible" id="bookmark" data-bookmark-id="${array.id}">
  <div class="button-text" id="button-text">${array.title}</div>
  <div class="display-rating">
  ${array.rating}
  </div></button></div>
  `;
};

const panelView = function (array) {
  return `
  <div class="content">
  <button type="button" class="collapsible" id="bookmark" data-bookmark-id="${array.id}">
  <div class="button-text" id="button-text">${array.title}</div>
  <div class="etoiles">
  ${array.rating}
  </div>
  </button> </div>
  <div class="panel">
  <div class="drop-down-button">
  <a href="https://www.google.com" target="new_blank">https://www.google.com</a>
  <br>
  </div>
  <p id='drop-down-text'>
  ${array.desc}           
  </p>
  </div>
  <button class="delete-button" id="delete-button" data-bookmark-id=${array.id}> Delete</button>
  `; 
};

function addBookmark() {
  return `
  <div class="add-bookmark">
  <h1>Add Bookmark</div>
  <form class="form-add">
  <label for="url">URL</label>
  <br>
  <input type="text" name="url" id="enter-link" placeholder="URL"required />
  <br>
  <label for="title">Title</label>
  <br>
  <input type="text" name="title" id="enter-title" placeholder="Title" required />
  <br>
  <label for="desc">Description</label>
  <br>
  <input type="text" name="desc" id="input-description" placeholder="Description" />
  <div class="stars">
  <p>Rating</p>
  <input type="radio" name="rating" value="1" required/>

  <label for="1" >1</label>
  <input id="2" name="rating" type="radio" value="2" class="radio-btn hide" />
  <label for="2" >2</label>
  <input id="3" name="rating" type="radio" value="3" class="radio-btn hide" />
  <label for="3" >3</label>
  <input id="4" name="rating" type="radio" value="4" class="radio-btn hide" />
  <label for="4" >4</label>
  <input id="5" name="rating" type="radio" value="5" class="radio-btn hide" />
  <label for="5" >5</label>

  </div>
  <div class="error-message"></div>
  </div>
  <div>
  <button type="submit" class="submit-form">Save</button>
  <button class="cancel-button" default>Cancel</button>
  </div>
  </form>
  </div>`;
}



export default {
  generateMain,
  addBookmark
};