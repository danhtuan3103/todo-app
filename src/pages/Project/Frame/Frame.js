import { Link } from 'react-router-dom';
import { useRef, useState, memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import { BsPlusLg } from 'react-icons/bs';
import 'tippy.js/dist/tippy.css';

import styles from './Frame.module.scss';
import OverLay from '~/components/OverLay';
import Card from '~/components/Card';
// import AddBox from './AddBox';
const cx = classNames.bind(styles);
function Frame({ children, title, data = [], onDelete, onMove, isCreateable }) {
    const ref = useRef();
    const overlayRef = useRef();
    const [showAll, setShowAll] = useState(false);
    // const [showAdd, setShowAdd] = useState(false);

    const handleResize = () => {
        if (ref.current.style.height === '300px') {
            if (!data.length) {
                return;
            }
            ref.current.style.height = '600px';
            return;
        }
        ref.current.style.height = '300px';
    };

    const HandleSeeAll = (e) => {
        if (data.length) {
            setShowAll(true);
        }
    };

    // const handleClickPlus = (e) => {
    //     setShowAdd(true);
    // };

    const handleClose = (e) => {
        e.preventDefault();
        setShowAll(false);
        // setShowAdd(false);
    };

    return (
        <div className={cx('frame')} ref={ref}>
            <div className={cx('header')}>
                <div className={cx('title')} onClick={handleResize}>
                    {title}
                </div>
                <Tippy content="See all">
                    <span className={cx('number')} onClick={HandleSeeAll}>
                        {data.length}
                    </span>
                </Tippy>
            </div>
            {isCreateable && (
                <Link
                    className={cx('plus')}
                    to={{
                        pathname: '/project/create',
                    }}
                >
                    <BsPlusLg />
                </Link>
            )}
            <div className={cx('project-wrapper')}>{children}</div>

            {/*-------- See all ------------- */}
            {showAll && (
                <OverLay className={cx('seeall-overlay')} ref={overlayRef}>
                    <div className={cx('close-block')}>
                        <span className={cx('close-btn')} onClick={handleClose}>
                            &#10005;
                        </span>
                    </div>
                    <div className={cx('container-overlay')}>
                        {data.map((item, index) => (
                            <Card
                                className={cx('card')}
                                key={index}
                                data={item}
                                onDelete={() => onDelete(item.id)}
                                onMove={() => onMove(item.id)}
                            />
                        ))}
                    </div>
                </OverLay>
            )}
        </div>
    );
}

Frame.propsTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    onMove: PropTypes.func,
    onDelete: PropTypes.func,
};

export default memo(Frame);
