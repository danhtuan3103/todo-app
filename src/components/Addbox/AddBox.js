import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddBox.module.scss';
import classNames from 'classnames/bind';
import { IoCreateOutline } from 'react-icons/io5';
import Button from '~/components/Button';
import moment from 'moment';
import uniqid from 'uniqid';
const cx = classNames.bind(styles);
function AddBox({ onClose, _date, setData, data, edit }) {
    const [color, setColor] = useState(edit?.color || '#e44232');
    const [time, setTime] = useState(edit?.time || '00:00:00');
    const [date, setDate] = useState(edit?.date || _date || moment(new Date()).format('YYYY-MM-DD'));
    const [title, setTitle] = useState(edit?.title || '');
    const [description, setDescription] = useState(edit?.description || '');
    const titRef = useRef();

    const handleAddEvent = () => {
        const card = {
            title,
            description,
            time,
            date,
            color,
            id: uniqid(),
        };
        if (edit) {
            console.log('handleEdit');
            const newData = data.filter((d) => d.id !== edit.id);
            setData([...newData, card]);
            onClose();
        } else {
            console.log('handleClick');
            setData((prev) => [...prev, card]);
            onClose();
        }
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
                    <Button className={cx('btn', 'btn-create')} small primary onClick={handleAddEvent}>
                        {edit ? 'Edit' : 'Create'}
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
