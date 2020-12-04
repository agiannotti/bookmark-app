const STORE = {
  bookmarks: [],
  adding: false,
  error: null,
  filter: 0
};

const findById = function (id) {
  return STORE.bookmarks.find(currentItem => currentItem.id === id);
};

const expandThis = function (id) {
  let selectedItem = findById(id);
  selectedItem.expanded = (!selectedItem.expanded);
};

const addBookmark = function (item) {
  this.STORE.bookmarks.push(item);
};

const findAndDelete = function (id) {
  STORE.bookmarks = STORE.bookmarks.filter(currentItem => currentItem.id !== id);
};

const setError = function (error) {
  this.STORE.error = error;
};

export default {
  STORE,
  findById,
  findAndDelete,
  setError,
  expandThis,
  addBookmark
};