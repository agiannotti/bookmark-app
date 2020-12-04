const bookmarks = [];
const adding = false;
const error = null;
const filter = 0;

const findById = function (id) {
  return this.bookmarks.find(currentItem => currentItem.id === id);
};

function findAndUpdate(id, newData){
  const updateItem = this.bookmarks.find(item => item.id===id);
  Object.assign(updateItem, newData);
}

const addBookmark = function (item) {
  this.bookmarks.push(item);
};

const setError = function (error) {
  this.error = error;
};

const findAndDelete = function (id) {
  this.bookmarks = this.bookmarks.filter(bookmarks => bookmarks.id !== id);
};

export default {
  findById,
  addBookmark,
  findAndUpdate,
  findAndDelete,
  setError,
  error,
  bookmarks,
  adding,
  filter 
};