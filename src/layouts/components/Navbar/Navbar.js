import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { AiOutlineHome, AiOutlineBell, AiOutlineMenu } from 'react-icons/ai';
import { IoSearchOutline } from 'react-icons/io5';
import images from '~/assets/images';
const cx = classNames.bind(styles);

function Navbar({ onClickMenuIcon }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('right-block')}>
                <span className={cx('icon')} onClick={onClickMenuIcon}>
                    <AiOutlineMenu />
                </span>
                <span className={cx('icon')}>
                    <AiOutlineHome />
                </span>
                <div className={cx('search')}>
                    <span className={cx('icon')}>
                        <IoSearchOutline />
                    </span>
                    <input className={cx('input')} placeholder="Search" />
                </div>
            </div>

            <div className={cx('left-block')}>
                <span className={cx('icon')}>
                    <AiOutlineBell />
                </span>

                <img className={cx('avatar')} src={images.avatar} alt="avatar" />
            </div>
        </div>
    );
}

export default Navbar;
