import classNames from 'classnames/bind';
import styles from './Project.module.scss';

import Card from '~/components/Card';
import Frame from './Frame';
import { useState, useCallback } from 'react';
const cx = classNames.bind(styles);

const description =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  ';

const PROJECT_LIST = [
    { type: 'todo', id: 1, title: 'Design', description: description, color: '#34eba8' },
    { type: 'todo', id: 2, title: 'Design', description: description, color: '#22998d' },
    { type: 'todo', id: 3, title: 'Design', description: description, color: '#992273' },
    { type: 'todo', id: 4, title: 'Design', description: description, color: '#979922' },
    { type: 'todo', id: 5, title: 'Design', description: description, color: '#979922' },
    { type: 'todo', id: 6, title: 'Design', description: description, color: '#22998d' },
    { type: 'progress', id: 7, title: 'Design', description: description, color: '#22998d' },
    // { type: 'completed', id: 7, title: 'Design', description: description, color: '#22998d' },
];
function Project() {
    const [projects, setProjects] = useState(PROJECT_LIST);
    const todo = projects.filter((project) => project.type === 'todo');
    const progress = projects.filter((project) => project.type === 'progress');
    const completed = projects.filter((project) => project.type === 'completed');

    const handleDelete = useCallback(
        (id) => {
            const newItems = projects.filter((project) => project.id !== id);
            setProjects(newItems);
        },
        [projects],
    );

    const handleMove = useCallback(
        (id) => {
            const newProjects = projects.map((p) => {
                if (p.id === id && p.type === 'todo') {
                    return { ...p, type: 'progress' };
                } else if (p.id === id && p.type === 'progress') {
                    return { ...p, type: 'completed' };
                } else return p;
            });
            console.log(newProjects);
            setProjects(newProjects);
        },
        [projects],
    );

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Projects</h2>
            <div className={cx('projects')}>
                <Frame title="To do" data={todo} onDelete={handleDelete} onMove={handleMove}>
                    {todo.map((project, index) => {
                        return (
                            <Card
                                key={index}
                                data={project}
                                onDelete={() => handleDelete(project.id)}
                                onMove={() => handleMove(project.id)}
                            />
                        );
                    })}
                </Frame>
                <Frame title="Progress" data={progress} onDelete={handleDelete} onMove={handleMove}>
                    {progress.map((project, index) => {
                        return (
                            <Card
                                key={index}
                                data={project}
                                onDelete={() => handleDelete(project.id)}
                                onMove={() => handleMove(project.id)}
                            />
                        );
                    })}
                </Frame>
                <Frame title="Completed" data={completed} onDelete={handleDelete} onMove={handleMove}>
                    {' '}
                    {completed.map((project, index) => {
                        return (
                            <Card
                                key={index}
                                data={project}
                                onDelete={() => handleDelete(project.id)}
                                onMove={() => handleMove(project.id)}
                            />
                        );
                    })}
                </Frame>
            </div>
        </div>
    );
}

export default Project;
