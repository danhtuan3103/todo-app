import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Frame.module.scss';
import classNames from 'classnames/bind';
import { IoCreateOutline } from 'react-icons/io5';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function AddBox({ handleClose }) {
    const [color, setColor] = useState('#e44232');
    const desRef = useRef();

    const handleChangeColor = (e) => {
        setColor(e.target.value);
        desRef.current.style.backgroundColor = e.target.value;
    };
    return (
        <div className={cx('create-wrapper')}>
            <div className={cx('close-block')}>
                <span className={cx('close-btn')} onClick={handleClose}>
                    &#10005;
                </span>
            </div>
            <div className={cx('content')}>
                <div className={cx('content-header')}>
                    <h3>Create an Project</h3>
                    <span>
                        <IoCreateOutline />
                    </span>
                </div>
                <div className={cx('content-input')}>
                    <input type="text" className={cx('text-input')} placeholder="Title" />
                    <div className={cx('input-block')}>
                        <input type="color" value={color} className={cx('color-input')} onChange={handleChangeColor} />
                        <input
                            type="time"
                            className={cx('date-input')}
                            placeholder="YYYY/MM/DD"
                            value="07:30:00"
                            onChange={() => {}}
                        />

                        <input
                            type="date"
                            className={cx('time-input')}
                            placeholder="00:00"
                            value="2022-01-31"
                            onChange={() => {}}
                        />
                    </div>
                    <textarea ref={desRef} className={cx('desc')} placeholder="Description" />
                </div>
                <div className={cx('btn-block')}>
                    <Button className={cx('btn', 'btn-cancel')} small onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className={cx('btn', 'btn-create')} small primary>
                        Create
                    </Button>
                </div>
            </div>
        </div>
    );
}

AddBox.propTypes = {
    handleClose: PropTypes.func,
};
export default AddBox;
