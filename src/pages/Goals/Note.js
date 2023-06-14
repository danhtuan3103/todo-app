import PropTypes from 'prop-types';
import { useRef, useState, memo } from 'react';
import styles from './Goals.module.scss';
import classNames from 'classnames/bind';
import Goals from './Goals';

const cx = classNames.bind(styles);

const CustomMenu = ({ onDelete, onEdit }) => {
    return (
        <div className={cx('custom-menu')}>
            <ul>
                <li onClick={onDelete}>Delete</li>
                <li onClick={onEdit}>Edit</li>
            </ul>
        </div>
    );
};
function Note({ card, isAdd, number, handleDelete, handleEdit }) {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const [isEditable, setIsEditable] = useState(isAdd || false);
    const [content, setContent] = useState('');
    const handleMove = (e) => {
        ref.current.style.transform = 'scale(1.6)';
    };

    const handleLeave = (e, deg) => {
        ref.current.style.transform = `rotate(${deg})`;
        setShow(false);
    };

    const handleClick = (e) => {
        e.preventDefault();
        console.log('click');
        setShow(!show);
    };

    const handleChangeEditMode = (e) => {
        setIsEditable(true);
    };

    return (
        <div
            ref={ref}
            className={cx('card', isAdd && 'sample-note')}
            style={{ transform: `rotate(${card.rolate})`, backgroundColor: card.color }}
            onMouseEnter={handleMove}
            onMouseLeave={(e) => handleLeave(e, card.rolate)}
            onClick={handleClick}
        >
            <span className={cx('header')} onMouseEnter={(e) => e.preventDefault()}>
                <span className={cx('hole')}> </span>
                <h2 className={cx('title')}>{`Goal #${number + 1}`}</h2>
            </span>
            <p
                className={cx('text', isEditable && 'isEditable')}
                contentEditable={isEditable}
                suppressContentEditableWarning
                onBlur={() => {
                    setIsEditable(false);
                    handleEdit(card.id, card.content);
                }}
                spellCheck={false}
            >
                {card.content}
            </p>
            {show && !isEditable ? (
                <CustomMenu onDelete={() => handleDelete(card.id)} onEdit={handleChangeEditMode} />
            ) : (
                <></>
            )}
        </div>
    );
}

Note.propsTypes = {
    card: PropTypes.object.isRequired,
};
export default memo(Note);
