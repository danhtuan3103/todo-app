import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Today.module.scss';
import images from '~/assets/images';
import { BsPlusLg, BsCheckCircleFill } from 'react-icons/bs';
import Card from './Card';
import { NavLink } from 'react-router-dom';
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

const _comple_tasks = [
    {
        title: 'Completed',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'green',
        icon: BsCheckCircleFill,
    },
    {
        title: 'Completed',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'red',
        icon: BsCheckCircleFill,
    },
    {
        title: 'Completed',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'yellow',
        icon: BsCheckCircleFill,
    },
];
function Today() {
    const [tasks, setTask] = useState(_tasks);
    const handleClick = (e) => {
        setTask((pre) => [...pre, { title: 'Shopping', description: 'Nothing', color: 'cyan' }]);
    };

    const handleClickTasks = (e) => {
        setTask(_tasks);
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
                    <NavLink
                        to="/today"
                        end
                        className={({ isActive }) => (isActive ? cx('task-count', 'active') : cx('task-count'))}
                        onClick={handleClickTasks}
                    >
                        <strong>73</strong>
                        <p>Created tasks</p>
                    </NavLink>
                    <NavLink
                        to="/today/completed"
                        className={({ isActive }) => (isActive ? cx('task-count', 'active') : cx('task-count'))}
                        onClick={() => setTask(_comple_tasks)}
                    >
                        <strong>56</strong>
                        <p>Completed tasks</p>
                    </NavLink>
                </div>
            </div>

            <div className={cx('content')}>
                {tasks.map((task, index) => {
                    const Icon = task.icon;
                    return <Card key={index} task={task} icon={task.icon} />;
                })}
                <div className={cx('add-tool')} onClick={handleClick}>
                    <BsPlusLg className={cx('plus-icon')} />
                </div>
            </div>
        </div>
    );
}

export default Today;
