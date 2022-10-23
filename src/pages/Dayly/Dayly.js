import { useEffect } from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import { BsPlus } from 'react-icons/bs';
import uniqid from 'uniqid';
import styles from './Dayly.module.scss';

import List from './List';
import Item from './Item';
const cx = classNames.bind(styles);
function Dayly() {
    const [jobs, setJobs] = useState([]);
    const [getApi, setGetApi] = useState(false);
    console.log('re-render');

    useEffect(() => {
        console.log('fech');
        fetch('https://634bc6c5317dc96a308a8173.mockapi.io/api/dayly')
            .then((response) => response.json())
            .then((data) => setJobs(data));
    }, [getApi]);
    const handleClickAdd = (e) => {
        const id = uniqid();
        setJobs((pre) => [...pre, { id: id, time: '', content: '' }]);
        fetch('https://634bc6c5317dc96a308a8173.mockapi.io/api/dayly', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id, time: '', content: '' }),
        })
            .then((response) => {
                setGetApi(true);
                return response.json();
            })
            .then((data) => {
                console.log('fetch');
                console.log(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleSave = (id, time, content) => {
        const newJob = jobs.map((job) => {
            if (job.id === id) {
                job.time = time;
                job.content = content;
            }

            return job;
        });

        setJobs(newJob);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('contains')}>
                <h2 className={cx('title')}>Dayly Routines</h2>
                <List>
                    {jobs.map((job) => (
                        <Item
                            key={job.id}
                            id={job.id}
                            _time={job.time}
                            _content={job.content}
                            onSave={() => handleSave()}
                        />
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
