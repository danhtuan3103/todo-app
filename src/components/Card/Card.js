import { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ImAttachment } from 'react-icons/im';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import styles from './Card.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Card({ data, className, onDelete, onMove }) {
    return (
        <div className={cx('wrapper', { [className]: className })} style={{ backgroundColor: data.color }}>
            <div className={cx('header')}>
                <span className={cx('dot')}></span>

                <h3 className={cx('title')}>{data.title}</h3>
                <Tippy
                    hideOnClick={true}
                    interactive
                    offset={[0, 0]}
                    delay={[100, 200]}
                    render={(attrs) => (
                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                            <Link className={cx('tool-item')} to={`/projects/${data.id}`}>
                                See detail
                            </Link>
                            <p className={cx('tool-item')} onClick={onDelete}>
                                Delete
                            </p>
                            <p className={cx('tool-item')} onClick={onMove}>
                                Move
                            </p>
                        </div>
                    )}
                >
                    <span className={cx('gim')}>
                        <ImAttachment />
                    </span>
                </Tippy>
            </div>
            <p className={cx('description')}>{data.description}</p>
        </div>
    );
}

Card.propTypes = {
    className: PropTypes.string,
    data: PropTypes.object.isRequired,
    onDelete: PropTypes.func,
    onMove: PropTypes.func,
};
export default memo(Card);
