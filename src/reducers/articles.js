import uniq from 'lodash/uniq';
import types from '../constants/ActionTypes';
import { articles as initialState } from '../constants/initialState';

export default function articles(state = initialState, action) {
  switch (action.type) {

  case types.REQUEST_ARTICLES: return {
    ...state,
    isFetching: true,
    isFetched: false,
    didInvalidate: false
  };

  case types.RECEIVE_ARTICLES: return {
    ...state,
    items: action.items,
    archives: _createArchives(action.items),
    tags: _createTags(action.items),
    isFetching: false,
    isFetched: true,
    didInvalidate: false
  };

  case types.REQUEST_ERROR_ARTICLES: return {
    ...state,
    isFetching: false,
    isFetched: false,
    didInvalidate: true,
    error: action.error
  };

  default: return state;

  }
}

function _createArchives(items) {
  return items.reduce((archives, item) => {
    const date = item.date.split(' ')[0].replace(/\-\d\d$/, ''); // TODO
    archives[date] = Array.isArray(archives[date]) ?
      [...archives[date], item] : [item];
    return archives;
  }, {});
}

function _createTags(items) {
  return items.reduce((tags, item) => uniq([...tags, ...item.tags.map(t => t.replace(/\s/, '_'))]), []);
}
