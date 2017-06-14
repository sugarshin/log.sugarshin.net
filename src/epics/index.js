import { of as of$ } from 'rxjs/observable/of'
import { concat as concat$ } from 'rxjs/observable/concat'
import { fromPromise as fromPromise$ } from 'rxjs/observable/fromPromise'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { combineEpics } from 'redux-observable'
import has from 'lodash/has'
import Articles from 'apis/Articles'
import Search from 'apis/Search'
import types from 'constants/ActionTypes'
import * as actions from 'actions'

export const fetchArticleList = action$ => action$
  .ofType(types.FETCH_ARTICLE_LIST)
  .mergeMap(() => concat$(
    of$(actions.requestArticleList()),
    fromPromise$(Articles.getList())
    .map(actions.receiveArticleList)
    .catch(e =>
      of$(actions.receiveArticleList(e)),
    ),
  ))
  .catch(e => of$(actions.receiveArticleList(e)))

// TODO: I think this is a not Rx way...
export const fetchArticle = (action$, store) => action$
  .ofType(types.FETCH_ARTICLE)
  .mergeMap(({ payload: url }) => {
    if (shouldUseCachedArticle(store.getState(), url)) {
      return Promise.resolve().then(() => actions.useCachedArticle(url))
    }
    return concat$(
      of$(actions.requestArticle()),
      fromPromise$(Articles.get(url))
      .map(markdown => actions.receiveArticle({ markdown, url }, url))
      .catch(error =>
        of$(actions.receiveArticle(error, url)),
      ),
    )
  })
  .catch(error => of$(actions.receiveArticle(error)))

const shouldUseCachedArticle = (state, url) => has(state.article.cache, url)

export const searchArticle = action$ => action$
  .ofType(types.SEARCH_ARTICLE)
  .mergeMap(({ payload: query }) => Search.execute(query))
  .map(actions.receiveSearchArticle)
  .catch(e => of$(actions.receiveSearchArticleError(e)))

export default combineEpics(
  fetchArticleList,
  fetchArticle,
  searchArticle,
)
