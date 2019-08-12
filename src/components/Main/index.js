/* eslint-disable react/prop-types */

import React, { Component } from 'react'
import { Alert, Button } from 'react-bootstrap'
import Sidebar from 'react-sidebar'
import { Link, withRouter } from 'react-router-dom'
import Icon from 'react-fa'
import SidebarMenu from 'components/SidebarMenu'
import LoadingSpinner from 'components/utils/LoadingSpinner'
import Octicon from 'components/utils/Octicon'
import connectStore from 'modules/connectStore'
import settings from '../../../config/settings'
import styles from './index.styl'

@withRouter
@connectStore()
export default class Main extends Component {
  get mainContentId() {
    return 'main-content'
  }

  handleChangeMediaQuery = e => this.props.actions.toggleSidebarDocked(e.matches)

  constructor(props) {
    super(props)

    // TODO: move to this.props______________________________
    //                                                       \
    this._matchMedia = window.matchMedia ? window.matchMedia('screen and (min-width: 769px)') : null
  }
  componentDidMount() {
    this.props.actions.fetchArticleList()
    if (this._matchMedia) {
      this._matchMedia.addListener(this.handleChangeMediaQuery)
      this.props.actions.toggleSidebarDocked(this._matchMedia.matches)
    }
    this.restoreScroll()
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.restoreScroll()
    }
  }
  componentWillUnmount() {
    if (this._matchMedia) {
      this._matchMedia.removeListener(this.handleChangeMediaQuery)
    }
  }
  render() {
    const { articles } = this.props
    if (articles.items.length > 0) {
      return this.renderContent()
    } else if (articles.error) {
      return <Alert bsStyle='danger'>{articles.error.message || 'Unknown error'}</Alert>
    }
    return <LoadingSpinner />
  }
  restoreScroll() {
    const main = document.getElementById(this.mainContentId)
    if (main) {
      main.scrollTop = 0
    }
  }
  renderContent() {
    const { children, sidebar, actions } = this.props
    return (
      <Sidebar
        sidebarClassName={styles.sidebar}
        contentClassName={styles.content}
        sidebar={<SidebarMenu {...this.props} />}
        shadow={false}
        pullRight
        open={sidebar.open}
        docked={sidebar.docked}
        onSetOpen={actions.toggleSidebar}
        contentId={this.mainContentId}
      >
        <header className={styles.header}>
          <Link to='/'>{settings.siteName}</Link>
          {!sidebar.docked ? (
            <div className={styles.toggleButton}>
              <Button onClick={actions.toggleSidebar} variant='secondary'>
                <Octicon name='three-bars' />
              </Button>
            </div>
          ) : null}
        </header>
        <main className={styles.main} id='main'>
          {children}
        </main>
        <footer className={styles.footer}>
          <p>
            <small>
              <Icon name='copyright' />
              {' '}
              {`${new Date().getFullYear()} ${settings.copyright}`}
            </small>
          </p>
        </footer>
      </Sidebar>
    )
  }
}