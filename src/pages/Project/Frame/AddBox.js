import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddBox.module.scss';
import classNames from 'classnames/bind';
import { IoCreateOutline } from 'react-icons/io5';
import Button from '~/components/Button';
import moment from 'moment';
const cx = classNames.bind(styles);
function AddBox({ onClose, _date }) {
    const [color, setColor] = useState('#e44232');
    const [time, setTime] = useState('00:00:00');
    const [date, setDate] = useState(_date || moment(new Date()).format('YYYY-MM-DD'));
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const titRef = useRef();

    const handleClick = () => {
        console.log('handleClick');
        const data = {
            title,
            description,
            time,
            date,
            color,
        };
        fetch('https://634bc6c5317dc96a308a8173.mockapi.io/api/month', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                onClose();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleChangeColor = (e) => {
        setColor(e.target.value);
        titRef.current.style.color = e.target.value;
    };
    return (
        <div className={cx('create-wrapper')}>
            <div className={cx('content')}>
                <div className={cx('content-header')}>
                    <h3>Create an Project</h3>
                    <span>
                        <IoCreateOutline />
                    </span>
                    <div className={cx('close-block')}>
                        <span className={cx('close-btn')} onClick={onClose}>
                            &#10005;
                        </span>
                    </div>
                </div>
                <div className={cx('content-input')}>
                    <input
                        ref={titRef}
                        type="text"
                        className={cx('text-input')}
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <div className={cx('input-block')}>
                        <input type="color" value={color} className={cx('color-input')} onChange={handleChangeColor} />
                        <input
                            type="time"
                            className={cx('date-input')}
                            placeholder="YYYY/MM/DD"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        />

                        <input
                            type="date"
                            className={cx('time-input')}
                            placeholder="00:00"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <textarea
                        className={cx('desc')}
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className={cx('btn-block')}>
                    <Button className={cx('btn', 'btn-cancel')} small onClick={onClose}>
                        Cancel
                    </Button>
                    <Button className={cx('btn', 'btn-create')} small primary onClick={handleClick}>
                        Create
                    </Button>
                </div>
            </div>
        </div>
    );
}

AddBox.propTypes = {
    handleClose: PropTypes.func,
    date: PropTypes.string,
};
export default AddBox;
