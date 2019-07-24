import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Octicon from 'components/utils/Octicon'
import styles from './index.styl'

export default function Tag({ value }) {
  return (
    <Link to={`/tags/${value.replace(/\s/g, '_')}/`}>
      <Badge variant='primary' className={styles.label}>
        <Octicon name='tag' className={styles.icon} />
        <span className={styles.a}>{value}</span>
      </Badge>
    </Link>
  )
}

Tag.propTypes = {
  value: PropTypes.string.isRequired,
}
