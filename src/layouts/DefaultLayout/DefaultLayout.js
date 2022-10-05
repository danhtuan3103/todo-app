import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useState, useRef } from 'react';
import { IoCreateOutline, IoTodayOutline } from 'react-icons/io5';
import { AiOutlineSchedule } from 'react-icons/ai';
import { MdSchedule } from 'react-icons/md';
import { BsCalendar2Month } from 'react-icons/bs';
import { GiOnTarget } from 'react-icons/gi';

import Navbar from '~/layouts/components/Navbar';
import Menu from '~/layouts/components/Menu';
import MenuItem from '~/layouts/components/Menu/MenuIem';

const MENU_LIST = [
    { title: 'Schedule', to: '/', icon: AiOutlineSchedule, color: '#23d98d' },
    { title: 'Project', to: '/project', icon: IoCreateOutline, color: '#3d8de3' },
    { title: 'Today', to: '/today', icon: MdSchedule, color: '#6c23d9' },
    { title: 'Dayly', to: '/dayly', icon: IoTodayOutline, color: '#d96223' },
    { title: 'Monthly', to: '/monthly', icon: BsCalendar2Month, color: '#81d923' },
    { title: 'Goals', to: '/goals', icon: GiOnTarget, color: '#d923d3' },
];
const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const menuRef = useRef();
    const isSmallMedia = document.documentElement.clientWidth < 739;

    const handleClickLink = (e) => {
        if (isSmallMedia) {
            setShowOverlay(false);
            menuRef.current.style.width = '0px';
            return;
        } else {
            return;
        }
    };

    //
    const ToggleMenu = () => {
        if (menuRef.current.style.width === '0px') {
            menuRef.current.style.width = '250px';
            setShowOverlay(true);

            return;
        }
        setShowOverlay(false);
        menuRef.current.style.width = '0px';
    };
    return (
        <div className={cx('wrapper')}>
            <Navbar onClickMenuIcon={ToggleMenu} />

            <div className={cx('body')}>
                <Menu ref={menuRef}>
                    {MENU_LIST.map((item, index) => {
                        let Icon = item.icon;
                        return (
                            <MenuItem
                                key={index}
                                title={item.title}
                                to={item.to}
                                icon={<Icon />}
                                color={item.color}
                                onClick={handleClickLink}
                            />
                        );
                    })}
                </Menu>

                <div className={cx('content')}>{children}</div>
            </div>
            {isSmallMedia && showOverlay ? <div className={cx('overlay')} onClick={ToggleMenu}></div> : <></>}
        </div>
    );
}

export default DefaultLayout;
