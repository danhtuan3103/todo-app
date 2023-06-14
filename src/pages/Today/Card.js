import PropTypes from 'prop-types';
import { memo, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Today.module.scss';

import { BsFillSave2Fill, BsCheckCircleFill } from 'react-icons/bs';
import { CgShapeCircle } from 'react-icons/cg';
import { MdDelete, MdCheckBox } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { todayActions } from '~/store';
const cx = classNames.bind(styles);

function Card({ task, onDelete, onMove }) {
    const [titleInput, setTitleInput] = useState((task.isSample && task.title) || '');
    const [desInput, setDesInput] = useState((task.isSample && task.description) || '');

    const Icon = task.type === 'todo' ? CgShapeCircle : BsCheckCircleFill;
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (titleInput && desInput) {
            dispatch(
                todayActions.addTask({
                    id: task.id,
                    title: titleInput,
                    description: desInput,
                    color: task.color,
                    type: task.type,
                }),
            );
        }
    };

    if (task.isSample) {
        return (
            <div className={cx('card-input')}>
                <span className={cx('right-icon')}>
                    <BsFillSave2Fill className={cx('circle-icon')} onClick={handleSubmit} />
                </span>
                <input
                    className={cx('title-input')}
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                />
                <textarea className={cx('des-input')} value={desInput} onChange={(e) => setDesInput(e.target.value)} />
            </div>
        );
    } else {
        return (
            <div className={cx('card')}>
                <div className={cx('info')}>
                    <span className={cx('right-icon')}>
                        <Icon className={cx('circle-icon')} style={{ color: task.color }} />
                    </span>
                    <h4 className={cx('title')}>{task.title}</h4>
                    <p className={cx('des')}>{task.description}</p>
                </div>

                <div className={cx('menu')}>
                    <ul>
                        {/* <p onClick={onDelete}>Delete</p>
                        {task.type === 'todo' && <p onClick={onMove}>Completed</p>} */}
                        <span className={cx('icon')} onClick={onDelete}>
                            <MdDelete />
                        </span>
                        {task.type === 'todo' && (
                            <span className={cx('icon')} onClick={onMove}>
                                <MdCheckBox />
                            </span>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    task: PropTypes.object.isRequired,
    icon: PropTypes.node,
};
export default memo(Card);
