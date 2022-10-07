import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Today.module.scss';
import { BsPlusLg } from 'react-icons/bs';
import { CgShapeCircle } from 'react-icons/cg';
const cx = classNames.bind(styles);

const tasks = [
    {
        title: 'Shoping',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'green',
    },
    {
        title: 'Shoping',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'red',
    },
    {
        title: 'Shoping',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'yellow',
    },
    {
        title: 'Shoping',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'cyan',
    },
];
function Today() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('img')} src={images.avatar} alt="avatar" />
                <div className={cx('text')}>
                    <h3>Hello, Danh Tuan</h3>
                    <p>Looks likes you are in a small . Here is a list of things you need to do</p>
                </div>
                <div className={cx('count-block')}>
                    <div className={cx('task-count', 'active')}>
                        <strong>73</strong>
                        <p>Created tasks</p>
                    </div>
                    <div className={cx('task-count')}>
                        <strong>56</strong>
                        <p>Completed tasks</p>
                    </div>
                </div>
            </div>

            <div className={cx('content')}>
                {tasks.map((task, index) => {
                    return (
                        <div key={index} className={cx('card')}>
                            <span className={cx('right-icon')}>
                                <CgShapeCircle className={cx('circle-icon')} style={{ color: task.color }} />
                            </span>
                            <h4 className={cx('title')}>{task.title}</h4>
                            <p className={cx('des')}>{task.description}</p>
                        </div>
                    );
                })}
                <div className={cx('add-tool')}>
                    <BsPlusLg className={cx('plus-icon')} />
                </div>
            </div>
        </div>
    );
}

export default Today;
