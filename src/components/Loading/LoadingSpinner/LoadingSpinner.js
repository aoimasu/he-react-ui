import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import style from './LoadingSpinner.scss'

const colors = ['teal', 'blue', 'green', 'grey', 'red', 'white']

class LoadingSpinner extends Component {
  static propTypes = {
    className: PropTypes.string,
    height: PropTypes.number,
    color: PropTypes.oneOf(colors),
    ringColor: PropTypes.oneOf(colors),
    width: PropTypes.number
  }

  static defaultProps = {
    color: 'teal',
    height: 64,
    ringColor: 'grey',
    width: 64
  }

  render () {
    const { className, height, color, ringColor, width, ...restProps } = this.props
    const classes = classnames(style.outer, {
      [style[color]]: color,
      [className]: className
    })
    const ringClasses = classnames(style.ring, {
      [style[ringColor]]: ringColor
    })

    return (
      <div className={classes}>
        <svg className={style.spinner} width={width && `${width}px`} height={height && `${height}px`} {...restProps} viewBox="0 0 24 24" version="1.1">
          <path className={ringClasses} d="M23.39 15.79L22.93 16.95L22.36 18.05L21.68 19.09L20.91 20.04L20.04 20.91L19.09 21.68L18.05 22.36L16.95 22.93L15.79 23.39L14.57 23.72L13.31 23.93L12 24L10.69 23.93L9.43 23.72L8.21 23.39L7.05 22.93L5.95 22.36L4.91 21.68L3.96 20.91L3.09 20.04L2.32 19.09L1.64 18.05L1.07 16.95L0.61 15.79L0.28 14.57L0.07 13.31L0 12L0.07 10.69L0.28 9.43L0.61 8.21L1.07 7.05L1.64 5.95L2.32 4.91L3.09 3.96L3.96 3.09L4.91 2.32L5.95 1.64L7.05 1.07L8.21 0.61L9.43 0.28L10.69 0.07L12 0L12 2.04L10.65 2.13L9.35 2.39L8.12 2.82L6.97 3.4L5.91 4.12L4.96 4.96L4.12 5.91L3.4 6.97L2.82 8.12L2.39 9.35L2.13 10.65L2.04 12L2.13 13.35L2.39 14.65L2.82 15.88L3.4 17.03L4.12 18.09L4.96 19.04L5.91 19.88L6.97 20.6L8.12 21.18L9.35 21.61L10.65 21.87L12 21.96L13.35 21.87L14.65 21.61L15.88 21.18L17.03 20.6L18.09 19.88L19.04 19.04L19.88 18.09L20.6 17.03L21.18 15.88L21.61 14.65L21.87 13.35L21.96 12L24 12L23.93 13.31L23.72 14.57L23.39 15.79Z" />
          <path className={style.highlight} d="M15.79 0.61L16.95 1.07L18.05 1.64L19.09 2.32L20.04 3.09L20.91 3.96L21.68 4.91L22.36 5.95L22.93 7.05L23.39 8.21L23.72 9.43L23.93 10.69L24 12L21.96 12L21.87 10.65L21.61 9.35L21.18 8.12L20.6 6.97L19.88 5.91L19.04 4.96L18.09 4.12L17.03 3.4L15.88 2.82L14.65 2.39L13.35 2.13L12 2.04L12 0L13.31 0.07L14.57 0.28L14.57 0.28L15.79 0.61Z" />
        </svg>
      </div>)
  }
}

export default LoadingSpinner
