/**
*
* SingleDatePicker
*
*/

import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import momentPropTypes from 'react-moment-proptypes'
import styles from './SingleDatePicker.scss'
import Label from '../Label'
import Icon from '../../Icon'
import { SingleDatePicker as Picker } from 'react-dates'
import Media from 'react-media'

class SingleDatePicker extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    anchorDirection: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
    displayFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    error: PropTypes.string,
    horizontalMargin: PropTypes.number,
    isOutsideRange: PropTypes.func,
    inline: PropTypes.bool,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    date: momentPropTypes.momentObj,
    style: PropTypes.object
  }

  static defaultProps = {
    anchorDirection: 'right',
    disabled: false,
    displayFormat: 'DD/MM/YYYY',
    inline: false,
    placeholder: 'Select date',
    readOnly: true,
    onBlur: () => null,
    onChange: () => null,
    onFocus: () => null
  }

  constructor (props) {
    super(props)

    this.state = {
      focused: false,
      date: props.date
    }
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleFocusChange = this.handleFocusChange.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.date !== this.state.date) {
      this.setState({
        date: nextProps.date
      })
    }
  }

  handleDateChange = (date) => {
    const oldDate = this.state.date
    this.setState({ date })
    if ((oldDate && oldDate.toJSON()) !== (date && date.toJSON())) {
      const event = {
        value: date,
        props: this.props
      }
      this.props.onChange(event)
    }
  }

  handleFocusChange = ({focused}) => {
    this.setState({ focused })
    const event = {
      focused,
      props: this.props
    }
    if (focused) {
      this.props.onFocus(event)
    } else {
      this.props.onBlur(event)
    }
  }

  render () {
    const { id, className, date, disabled, error, inline, label, horizontalMargin, onChange, style, ...restProps } = this.props
    const classes = classnames(styles.outer, {
      [styles.error]: error,
      [styles.disabled]: disabled,
      [styles.focused]: this.state.focused,
      [styles.inline]: inline,
      [className]: className
    })

    return (
      <div className={classes} style={style}>
        {label && <Label className={styles.label}>{label}</Label>}
        <div className={styles.inner}>
          <Media query={{ maxWidth: 767 }}>
            { matches => (
              <Picker
                className={styles.picker}
                date={this.state.date}
                daySize={28}
                disabled={disabled}
                horizontalMargin={matches ? 0 : horizontalMargin}
                id={id}
                numberOfMonths={matches ? 1 : 2}
                onDateChange={this.handleDateChange}
                focused={this.state.focused}
                onFocusChange={this.handleFocusChange}
                navNext={<Icon width={22} height={22} name="ChevronRight" />}
                navPrev={<Icon width={22} height={22} name="ChevronLeft" />}
                {...restProps}
              />) }
          </Media>
          <Icon className={styles.icon} name="Calendar" />
        </div>
        {error && <Label className={styles.errorMessage} htmlFor={id} error>{error}</Label>}
      </div>
    )
  }
}

export default SingleDatePicker
