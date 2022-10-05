import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    to,
    href,
    primary,
    rounded,
    whitetext,
    small,
    onClick,
    link,
    className,
    leftIcon,
    rightIcon,
    ...passprops
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passprops,
    };

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', {
        [className]: className,
        whitetext,
        primary,
        rounded,
        small,
        link,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={cx('icon')}>{leftIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    whitetext: PropTypes.bool,
    small: PropTypes.bool,
    onClick: PropTypes.func,
    link: PropTypes.bool,
    className: PropTypes.string,
    leffIcon: PropTypes.node,
    rightIcon: PropTypes.node,
};
export default Button;
