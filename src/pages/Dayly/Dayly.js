import { useState } from 'react';
import classNames from 'classnames/bind';
import { BsPlus } from 'react-icons/bs';
import styles from './Dayly.module.scss';
const cx = classNames.bind(styles);

const FAKE_DATA = [
    { id: 1, time: '8:00', content: 'Lau nha', color: '#e42522' },
    { id: 2, time: '8:00', content: 'Lau nha', color: '#e42522' },
    { id: 3, time: '8:00', content: 'Lau nha', color: '#e42522' },
    { id: 4, time: '8:00', content: 'Lau nha', color: '#e42522' },
    { id: 5, time: '8:00', content: 'Lau nha', color: '#e42522' },
];
function Dayly() {
    const [jobs, setJobs] = useState(FAKE_DATA);
    console.log('re-render');
    console.log(jobs);

    const handleClickAdd = (e, id) => {
        setJobs((pre) => [...pre, { id: new Date(), color: '#008000' }]);
    };

    const handleClickTime = (e, id) => {
        const selectedjob = jobs.find((job) => job.id === id);
        const div = e.target;
        console.log(div);
        const input = document.createElement('input');
        input.classList.add(cx('time'));
        input.value = div.textContent;
        div.replaceWith(input);

        input.focus();

        input.onkeydown = (e) => {
            if (e.keyCode === 13) {
                const changedDiv = document.createElement('p');
                changedDiv.classList.add(cx('time'));
                changedDiv.style.backgroundColor = selectedjob.color;
                changedDiv.addEventListener('click', () => handleClickTime(e, id));
                changedDiv.innerHTML = input.value;
                input.replaceWith(changedDiv);

                const newJob = jobs.map((job) => {
                    if (job.id === id) {
                        job.time = input.value;
                    }

                    return job;
                });

                setJobs(newJob);
            }
        };
    };

    const handleClickContent = (e, id) => {
        const selectedjob = jobs.find((job) => job.id === id);
        console.log(selectedjob);
        const div = e.target;
        const input = document.createElement('input');
        input.classList.add(cx('content'));
        input.value = div.textContent;
        div.replaceWith(input);

        input.focus();

        input.onkeydown = (e) => {
            if (e.keyCode === 13) {
                console.log('click');
                const changedDiv = document.createElement('div');
                changedDiv.classList.add(cx('content'));
                changedDiv.style.borderColor = selectedjob.color;
                changedDiv.addEventListener('click', () => handleClickContent(e, id));
                changedDiv.innerHTML = input.value;
                input.replaceWith(changedDiv);

                const newJob = jobs.map((job) => {
                    if (job.id === id) {
                        job.content = input.value;
                    }

                    return job;
                });

                setJobs(newJob);
            }
        };
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contains')}>
                <h2 className={cx('title')}>Dayly Routines</h2>

                <div className={cx('list')}>
                    {jobs.map((job, index) => {
                        return (
                            <div className={cx('job')} key={job.id}>
                                <p
                                    style={{ backgroundColor: job.color }}
                                    className={cx('time')}
                                    onClick={(e) => handleClickTime(e, job.id)}
                                >
                                    {job.time}
                                </p>
                                <div
                                    className={cx('content')}
                                    style={{ borderColor: job.color }}
                                    onClick={(e) => handleClickContent(e, job.id)}
                                >
                                    {job.content}
                                </div>
                                <div className={cx('tail')} style={{ backgroundColor: `${job.color}88` }}></div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('add-btn')} onClick={handleClickAdd}>
                <BsPlus className={cx('btn')} />
            </div>
        </div>
    );
}

export default Dayly;
