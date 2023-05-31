import PropTypes from 'prop-types';
import { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Today.module.scss';
import { BsCheckCircleFill } from 'react-icons/bs';
import { CgShapeCircle } from 'react-icons/cg';
const cx = classNames.bind(styles);

function Card({ task, onDelete, onMove }) {
    const Icon = task.type === 'todo' ? CgShapeCircle : BsCheckCircleFill;
    return (
        <div className={cx('card')}>
            <span className={cx('right-icon')}>
                <Icon className={cx('circle-icon')} style={{ color: task.color }} />
            </span>
            <h4 className={cx('title')}>{task.title}</h4>
            <p className={cx('des')}>{task.description}</p>

            <div className={cx('menu')}>
                <ul>
                    <p onClick={onDelete}>Delete</p>
                    {task.type === 'todo' && <p onClick={onMove}>Completed</p>}
                </ul>
            </div>
        </div>
    );
}

Card.propTypes = {
    task: PropTypes.object.isRequired,
    icon: PropTypes.node,
};
export default memo(Card);
