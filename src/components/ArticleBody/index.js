import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import markdownRenderer from '../../../universal/markdownRenderer'
import 'github-markdown-css/github-markdown.css'
import styles from './index.styl'

export default function ArticleBody({ markdown }) {
  return (
    <div className={classnames('markdown-body', styles.body)}>
      {markdownRenderer.toReact(markdown)}
    </div>
  )
}

ArticleBody.propTypes = {
  markdown: PropTypes.string.isRequired,
}
