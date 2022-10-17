import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './OverLay.module.scss';

const cx = classNames.bind(styles);
const defaultFn = () => {};
const OverLay = forwardRef(({ handleClose = defaultFn, children, className }, ref) => {
    const classes = cx('overlay', {
        [className]: className,
    });
    return (
        <div className={classes} onClick={handleClose} ref={ref}>
            {children}
        </div>
    );
});

OverLay.propTypes = {
    handleClose: PropTypes.func,
    children: PropTypes.node.isRequired,
    classes: PropTypes.string,
};
export default OverLay;
