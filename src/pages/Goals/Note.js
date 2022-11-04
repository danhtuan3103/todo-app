import PropTypes from 'prop-types';
import { useRef, useState, memo } from 'react';
import styles from './Goals.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CustomMenu = () => {
    const handleDelete = (e) => {
        e.preventDefault();
        console.log('handleClick');
    };
    const handleEdit = (e) => {
        e.preventDefault();
        console.log('handleEdit');
    };
    return (
        <div className={cx('custom-menu')}>
            <ul>
                <li onClick={handleDelete}>Delete</li>
                <li onClick={handleEdit}>Edit</li>
            </ul>
        </div>
    );
};
function Note({ card }) {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const handleMove = (e) => {
        ref.current.style.transform = 'scale(1.6)';
    };

    const handleLeave = (e, deg) => {
        ref.current.style.transform = `rotate(${deg})`;
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log('click');
        setShow(!show);
    };
    return (
        <div
            ref={ref}
            className={cx('card')}
            style={{ transform: `rotate(${card.rolate})`, backgroundColor: card.color }}
            onMouseEnter={handleMove}
            onMouseLeave={(e) => handleLeave(e, card.rolate)}
            onContextMenu={handleClick}
            onClick={(e) => setShow(false)}
        >
            <span className={cx('header')} onMouseEnter={(e) => e.preventDefault()}>
                <span className={cx('hole')}> </span>
                <h2 className={cx('title')}>{card.title}</h2>
            </span>
            <p className={cx('text')}>{card.content}</p>
            {show ? <CustomMenu /> : <></>}
        </div>
    );
}

Note.propsTypes = {
    card: PropTypes.object.isRequired,
};
export default memo(Note);
