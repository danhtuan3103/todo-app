import PropTypes from 'prop-types';
import { useState, memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Dayly.module.scss';
const cx = classNames.bind(styles);

const defaultFn = () => {};
function Item({ id, _time, _content, onSave = defaultFn }) {
    const [time, setTime] = useState(_time);
    const [content, setContent] = useState(_content);
    const [color, setColor] = useState('#2ab7d8');
    const [save, setSave] = useState(false);

    const handleChangeTime = (e) => {
        setTime(e.target.value);
        setSave(true);
    };
    const handleChangeContent = (e) => {
        setContent(e.target.value);
        setSave(true);
    };

    const handleClickTime = (e) => {
        setColor('#e44232');
        setSave(true);
    };
    const handleClickContent = (e) => {
        setSave(true);
        setColor('#e44232');
    };

    const handleSave = (e, id, time, content) => {
        const currentElem = e.target;

        setSave(false);
        setColor('#2ab7d8');
        currentElem.blur();
        fetch(`https://634bc6c5317dc96a308a8173.mockapi.io/api/dayly/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                time,
                content,
                id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                onSave(id, time, content);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleSave(e, id, time, content);
        }
    };
    return (
        <div className={cx('job')} key={id} onKeyDown={handleKeyDown}>
            <input
                style={{ color: color }}
                className={cx('time')}
                placeholder="00:00"
                onClick={handleClickTime}
                onChange={handleChangeTime}
                value={time}
            />
            <input
                className={cx('content')}
                // style={{ borderColor: color }}
                placeholder="Text In Here"
                onChange={handleChangeContent}
                onClick={handleClickContent}
                value={content}
            />

            <div
                className={cx('tail')}
                // style={{ backgroundColor: `${color}88` }}
                onClick={(e) => handleSave(e, id, time, content)}
            >
                {save ? 'Save' : ''}
            </div>
        </div>
    );
}

Item.propsTypes = {
    id: PropTypes.string.isRequired,
    _time: PropTypes.string.isRequired,
    _content: PropTypes.string.isRequired,
    onSave: PropTypes.func,
};

export default memo(Item);
