import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Today.module.scss';
import images from '~/assets/images';
import { BsPlusLg, BsCheckCircleFill } from 'react-icons/bs';
import Card from './Card';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { todayActions } from '~/store';
import uniqid from 'uniqid';
import { generateRandomColor } from '~/utils';
const cx = classNames.bind(styles);

function Today() {
    const tasks = useSelector((state) => state.today.tasks);

    const todoTask = tasks.filter((task) => task.type === 'todo');
    const completedTask = tasks.filter((task) => task.type === 'completed');
    const [mode, setMode] = useState(todoTask);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        console.log(id);
        dispatch(todayActions.deleteTask(id));
    };
    const handleMove = (id) => {
        dispatch(todayActions.moveTask(id));
    };

    const isComplete = window.location.pathname === '/today/completed';

    const handleSwitch = () => {
        if (isComplete) {
            setMode(todoTask);
        } else {
            setMode(completedTask);
        }
    };

    useEffect(() => {
        if (isComplete) {
            setMode(completedTask);
        } else {
            setMode(todoTask);
        }
    }, [tasks]);

    const handleAddBox = () => {
        dispatch(
            todayActions.addSampleBox({
                id: uniqid(),
                type: 'todo',
                title: 'Title .... ',
                description: 'Short description .... ',
                color: generateRandomColor(),
                isSample: true,
            }),
        );
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
                        onClick={handleSwitch}
                    >
                        <strong>{todoTask.length}</strong>
                        <p>Created tasks</p>
                    </NavLink>
                    <NavLink
                        to="/today/completed"
                        className={({ isActive }) => (isActive ? cx('task-count', 'active') : cx('task-count'))}
                        onClick={handleSwitch}
                    >
                        <strong>{completedTask.length}</strong>
                        <p>Completed tasks</p>
                    </NavLink>
                </div>
            </div>

            <div className={cx('content')}>
                {mode.map((task, index) => {
                    return (
                        <Card
                            key={task.id}
                            task={task}
                            onDelete={() => handleDelete(task.id)}
                            onMove={() => handleMove(task.id)}
                        />
                    );
                })}

                {mode.length === 0 && <p>No tasks available</p>}
                {!isComplete && (
                    <div className={cx('add-tool')} onClick={handleAddBox}>
                        <BsPlusLg className={cx('plus-icon')} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Today;
