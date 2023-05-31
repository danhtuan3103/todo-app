import classNames from 'classnames/bind';
import styles from './Project.module.scss';

import Card from '~/components/Card';
import Frame from './Frame';
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '~/store';
const cx = classNames.bind(styles);
function Project() {
    const projects = useSelector((state) => state.projects.projects);
    const todo = projects.filter((project) => project.type === 'todo');
    const progress = projects.filter((project) => project.type === 'progress');
    const completed = projects.filter((project) => project.type === 'completed');

    console.log(projects);
    const dispatch = useDispatch();
    const handleDelete = useCallback(
        (id) => {
            dispatch(actions.deleteProject(id));
        },
        [projects],
    );

    const handleMove = useCallback(
        (id) => {
            dispatch(actions.moveProject(id));
        },
        [projects],
    );

    return (
        <div className={cx('wrapper')}>
            {/* <h2 className={cx('title')}>Projects</h2> */}
            <div className={cx('projects')}>
                <Frame title="To do" data={todo} onDelete={handleDelete} onMove={handleMove} isCreateable={true}>
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
