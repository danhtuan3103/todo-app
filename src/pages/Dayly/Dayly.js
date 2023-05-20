import { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames/bind';
import { BsPlus } from 'react-icons/bs';
import uniqid from 'uniqid';
import styles from './Dayly.module.scss';

import List from './List';
import Item from './Item';
const cx = classNames.bind(styles);

const JOBS = [
    {
        id: uniqid(),
        time: '9:00',
        content: 'Wake up',
    },
    {
        id: uniqid(),
        time: '10:00',
        content: 'Breakfash',
    },
];
function Dayly() {
    const [jobs, setJobs] = useState(JOBS);
    const [getApi, setGetApi] = useState(false);

    // useEffect(() => {

    // }, [getApi]);
    const handleClickAdd = (e) => {
        let newJob = {
            id: uniqid(),
            time: '00:00',
            content: 'Text here ... ',
        };

        setJobs(() => [...jobs, newJob]);
    };

    const handleSave = useCallback(
        (id, time, content) => {
            const newJob = jobs.map((job) => {
                if (job.id === id) {
                    job.time = time;
                    job.content = content;
                }

                return job;
            });

            setJobs(newJob);
        },
        [jobs],
    );

    return (
        <div className={cx('wrapper')}>
            <div className={cx('contains')}>
                <h2 className={cx('title')}>Dayly Routines</h2>
                <List>
                    {jobs.map((job) => (
                        <Item key={job.id} id={job.id} _time={job.time} _content={job.content} onSave={handleSave} />
                    ))}
                </List>
            </div>
            <div className={cx('add-btn')} onClick={(e) => handleClickAdd(e)}>
                <BsPlus className={cx('btn')} />
            </div>
        </div>
    );
}

export default Dayly;
