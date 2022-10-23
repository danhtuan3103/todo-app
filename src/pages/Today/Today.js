import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Today.module.scss';
import images from '~/assets/images';
import { BsPlusLg } from 'react-icons/bs';
import Card from './Card';
const cx = classNames.bind(styles);

const _tasks = [
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
    const [tasks, setTask] = useState(_tasks);
    const handleClick = (e) => {
        setTask((pre) => [...pre, { title: 'Shopping', description: 'Nothing', color: 'cyan' }]);
    };
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
                    return <Card key={index} task={task} />;
                })}
                <div className={cx('add-tool')} onClick={handleClick}>
                    <BsPlusLg className={cx('plus-icon')} />
                </div>
            </div>
        </div>
    );
}

export default Today;
