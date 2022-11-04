import PropTypes from 'prop-types';
import { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Today.module.scss';
import { CgShapeCircle } from 'react-icons/cg';

const cx = classNames.bind(styles);

function Card({ task, icon = CgShapeCircle }) {
    const Icon = icon;
    return (
        <div className={cx('card')}>
            <span className={cx('right-icon')}>
                <Icon className={cx('circle-icon')} style={{ color: task.color }} />
            </span>
            <h4 className={cx('title')}>{task.title}</h4>
            <p className={cx('des')}>{task.description}</p>

            <div className={cx('menu')}>
                <ul>
                    <p>Delete</p>
                    <p>Completed</p>
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
