import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
const Menu = forwardRef(({ children }, ref) => {
    return (
        <div ref={ref} className={cx('wrapper')}>
            {children}
        </div>
    );
});

export default Menu;
