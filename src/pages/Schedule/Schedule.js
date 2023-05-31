import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';
import { SCHEDULE } from '~/assets/data/socials';
import Day from './Day';
const cx = classNames.bind(styles);

function Schedule() {
    const [content, setContent] = useState(null);
    const [isEditMode, setisEditMode] = useState(true);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>SCHOOL TIMETABLE</h2>

            <div className={cx('timetable')}>
                <div className={cx('time')}>
                    <h4>Time</h4>
                    <div className={cx('events')}>
                        <p>09:00~</p>
                        <p>10:00~</p>
                        <p>11:00~</p>
                        <p>12:00~</p>
                        <p>13:00~</p>
                        <p>14:00~</p>
                        <p>15:00~</p>
                        <p>16:00~</p>
                        <p>17:00~</p>
                    </div>
                </div>
                {SCHEDULE.map((sch) => {
                    return <Day day={sch.day} schedules={sch.schedules} setContent={setContent} mode={isEditMode} />;
                })}
            </div>

            {content && (
                <div className={cx('preview')}>
                    <div className={cx('close')}>
                        <h4 className={cx('preview-title')}>Subject Infomation</h4>
                        <span className={cx('close-btn')} onClick={() => setContent('')}>
                            &#10005;
                        </span>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('side')}>
                            <p>Name : </p>
                            <p>Professor : </p>
                            <p>Time : </p>
                            <p>Address : </p>
                        </div>
                        <div className={cx('text')}>
                            <p>{content.name}</p>
                            <p>{content.professor}</p>
                            <p>{content.time}</p>
                            <p>{content.address}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Schedule;
