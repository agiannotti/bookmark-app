const BASE_URL = 'https://thinkful-list-api.herokuapp.com/anthony_giannotti/bookmarks';

const listApiFetch = function (...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status };
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};
  
const getBookmark=function () {
  return listApiFetch(`${BASE_URL}`);
};

const deleteBookmark=function (id) {
  return listApiFetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
};

function updateBookmark(id, updateDataArg){
  const updateData = JSON.stringify(updateDataArg);
  return listApiFetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: updateData,
  });
}

function createBookmark(bookmark){
  return listApiFetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bookmark,
  });
}

export default {
  getBookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
};