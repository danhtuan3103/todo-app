import classNames from 'classnames/bind';
import styles from './Error.module.scss';

import images from '~/assets/images';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Error() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Page Not Found</h1>
            <Button to="/" primary rounded small className={cx('btn')}>
                GO TO HOMEPAGE
            </Button>

            <img className={cx('img')} src={images.error} alt="error" />
        </div>
    );
}

export default Error;
