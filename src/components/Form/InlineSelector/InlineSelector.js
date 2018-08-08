// @flow
/**
 *
 * InlineSelector
 *
 */

import classnames from 'classnames';
import React from 'react';
import Label from '../Label';
import style from './InlineSelector.scss';

type Option = {
  value?: any,
  label?: string,
};

type Props = {
  id: string,
  name: string,
  disabled?: boolean,
  className?: string,
  label?: string,
  vertical?: boolean,
  options: Option[],
  onChange: Function,
  value?: string,
};

class InlineSelector extends React.Component<Props> {
  static defaultProps = {
    vertical: false,
    options: [],
    disabled: false,
    onChange: () => null,
  };

  handleClick = (option: Option) => {
    if (!this.props.disabled) {
      const oldValue = this.props.value;

      if (oldValue !== option.value) {
        this.props.onChange({
          value: option.value,
          props: this.props,
        });
      }
    }
  };

  render() {
    const {
      className,
      id,
      label,
      onChange,
      options,
      value,
      vertical,
      disabled,
      ...restProps
    } = this.props;
    const classes = classnames(
      style.outer,
      {
        [style.vertical]: vertical,
      },
      disabled && style.disabled,
      className,
    );

    return (
      <div className={classes} id={id} {...restProps}>
        {label && (
          <Label className={style.label} htmlFor={id}>
            {label}
          </Label>
        )}
        <div className={style.options}>
          {options.map(option => (
            <div
              key={option.label}
              className={classnames(style.option, {
                [style.selected]: option.value === value,
              })}
              onClick={() => this.handleClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default InlineSelector;
