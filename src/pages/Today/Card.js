import classNames from 'classnames/bind';
import styles from './Today.module.scss';
import { CgShapeCircle } from 'react-icons/cg';

const cx = classNames.bind(styles);

function Card({ task }) {
    return (
        <div className={cx('card')}>
            <span className={cx('right-icon')}>
                <CgShapeCircle className={cx('circle-icon')} style={{ color: task.color }} />
            </span>
            <h4 className={cx('title')}>{task.title}</h4>
            <p className={cx('des')}>{task.description}</p>

            <div className={cx('menu')}>
                <p>Delete</p>
            </div>
        </div>
    );
}

export default Card;
