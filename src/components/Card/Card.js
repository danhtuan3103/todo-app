import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { ImAttachment } from 'react-icons/im';
import styles from './Card.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Card({ data, className, onDelete, onMove }) {
    const [visible, setVisibile] = useState(false);

    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('header')}>
                <span className={cx('dot')}></span>

                <h3 className={cx('title')}>{data.title}</h3>
                <Tippy
                    visible={visible}
                    interactive
                    offset={[0, 0]}
                    onClickOutside={() => setVisibile(false)}
                    render={(attrs) => (
                        <div className={cx('box')} tabIndex="-1" {...attrs} onMouseLeave={() => setVisibile(false)}>
                            <Link className={cx('tool-item')} to={`/project/${data.id}`}>
                                See detail
                            </Link>
                            <p className={cx('tool-item')} onClick={onDelete}>
                                Delete
                            </p>
                            {data.type !== 'completed' && (
                                <p className={cx('tool-item')} onClick={onMove}>
                                    Move
                                </p>
                            )}
                        </div>
                    )}
                >
                    <span className={cx('gim')} onMouseEnter={() => setVisibile(true)}>
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
