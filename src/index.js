import 'bootswatch/cosmo/bootstrap.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'
import 'octicons/build/build.css'
import 'stylus/index.styl'
import React from 'react'
import ReactDOM from 'react-dom'
import Raven from 'raven-js'
import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
import Root from 'containers/Root'
import configureStore from 'store/configureStore'
import APIBase from 'apis/Base'
import history from 'modules/history'

const main = () => {
  if (process.env.SENTRY_DSN) {
    Raven.config(
      process.env.SENTRY_DSN,
      { release: process.env.BUILD_NUMBER, debug: process.env.NODE_ENV !== 'production' }
    ).install()
  }

  if (process.env.LOGROCKET_APP_ID) {
    LogRocket.init(process.env.LOGROCKET_APP_ID)
    setupLogRocketReact(LogRocket)
  }

  if (process.env.SENTRY_DSN && process.env.LOGROCKET_APP_ID) {
    Raven.setDataCallback(data => {
      data.extra.sessionURL = LogRocket.sessionURL
      return data
    })
  }

  APIBase.baseURI = process.env.API_BASE
  APIBase.ref = process.env.NODE_ENV === 'production' ? 'master' : null

  const store = configureStore()
  const root = document.querySelector('#app-root')
  ReactDOM.render(<Root store={store} history={history} />, root)
}

main()
