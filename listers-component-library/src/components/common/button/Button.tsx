import React from "react";
import "../../../scss/style.scss";
import PropTypes from "prop-types";
import cx from "classnames";

interface IProps {
  text?: string;
  type: string;
  varient?: string;
  textSize?: string;
  buttonSize?: string;
  className?: string;
  hasOutline?: boolean;
  hasBigOutline?: boolean;
  onClick: any;
  disabled: boolean;
  hasIcon: boolean;
}

const Button = ({
  text,
  type,
  varient,
  textSize,
  onClick,
  className,
  buttonSize,
  hasOutline,
  hasBigOutline,
  disabled,
  hasIcon
}: IProps) => {
  const baseClass = "c-btn";

  const rootClass = cx(baseClass, className, {
    [`${baseClass}--${varient}`]: varient,
    [`${baseClass}--${buttonSize}`]: buttonSize,
    [`${baseClass}--${type}`]: type,
    [`${baseClass}--${textSize}`]: textSize,
    [`${baseClass}--outline`]: hasOutline,
    [`${baseClass}--outline-large`]: hasBigOutline,
    [`${baseClass}--disabled`]: disabled,
    [`hasIcon`]: hasIcon
  });

  if (hasIcon === true) {
    return (
        <button className={rootClass} onClick={onClick}>
          {text}
          <i
            className="c-icon icon icon--arrow-right --hasIcon"
            aria-hidden="true"
          ></i>
        </button>
    );
  } else {
    return (
      <button className={rootClass} onClick={onClick}>
        {text}
      </button>
    );
  }
};

Button.defaultProps = {
  text: "Button",
  type: "large",
  varient: "primary",
  textSize: "alpha",
  size: "large",
  hasOutline: false,
  hasBigOutline: false,
  onClick: null,
  disabled: false,
  hasIcon: false
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  textSize: PropTypes.string,
  varient: PropTypes.string,
  size: PropTypes.string,
  hasOutline: PropTypes.bool,
  hasBigOutline: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  hasIcon: PropTypes.bool
};

export default Button;
