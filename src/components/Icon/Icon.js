import PropTypes from 'prop-types'
import React from 'react'

// eslint-disable-next-line no-unused-vars
import { ReactComponent as calendar } from './icons/calendar.svg'
import { ReactComponent as clock } from './icons/clock.svg'
import { ReactComponent as heart } from './icons/heart.svg'
import { ReactComponent as left } from './icons/left.svg'
import { ReactComponent as menu } from './icons/menu.svg'
import { ReactComponent as words } from './icons/words.svg'

const types = {
  calendar,
  clock,
  heart,
  left,
  menu,
  words,
}

function Icon({ className, icon }) {
  const Component = types[icon]
  return <Component className={className} />
}

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(types)),
}

Icon.defaultProps = {
  className: '',
  icon: '',
}

export default Icon
