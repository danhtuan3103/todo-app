import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';

const cx = classNames.bind(styles);
const schelude = {
    mon: [
        {
            name: '알고리즘',
            professor: '최지웅',
            time: '15:00-16:15',
            address: ' 정보과학관_21304',
            start: 6,
            end: 7,
            color: '#fafaa3',
        },
    ],
    tues: [
        {
            name: '학문목적한국어4',
            professor: '장지영',
            time: '10:30-11:45',
            address: '진리관_11114',
            start: 3,
            end: 4,
            color: '#fff1f8',
        },

        {
            name: '데이터통신과네트워크',
            professor: '조효진',
            time: '15:00-16:15',
            address: '정보과학관_21304',
            start: 6,
            end: 7,
            color: '#fafaa3',
        },
    ],
    wed: [
        {
            name: '윈도우프로그래밍및실습',
            professor: '이근정',
            time: '16:00-17:50',
            address: '정보과학관_21101',
            start: 6,
            end: 8,
            color: '#d1ffe6',
        },
    ],
    thur: [
        {
            name: '생명정보과학',
            professor: '공현승',
            time: '09:00-10:15',
            address: '정보과학관_21204',
            start: 2,
            end: 3,
            color: '#fff1f8',
        },
        {
            name: '채플',
            professor: '정대경',
            time: '15:00-15:50',
            address: '한경직기념관_08110',
            start: 6,
            end: 7,
            color: '#e2f8ff',
        },
        {
            name: '고급컴퓨터수',
            professor: '최형광',
            time: '16:30-17:45',
            address: '정보과학관_21305',
            start: 7,
            end: 9,
            color: '#fff1f8',
        },
    ],
    fri: [
        {
            name: '학문목적한국어4',
            professor: '장지영',
            time: '10:30-11:45',
            address: '진리관_11114',
            start: 3,
            end: 4,
            color: '#e2f8ff',
        },
    ],
};

function Schedule() {
    const [content, setContent] = useState(null);

    console.log(content);

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>SCHOOL TIMETABLE</h2>
            <div className={cx('des')}>
                <p>Soongsil university</p>
                <select name="cars" id="cars">
                    <option value="2021-2">2021-2</option>
                </select>
                <button>Save</button>
            </div>

            <div className={cx('timetable')}>
                <div className={cx('time')}>
                    <h4>Time</h4>
                    <div className={cx('events')}>
                        <p>08:00~08:50</p>
                        <p>09:00~10:15</p>
                        <p>10:30~11:45</p>
                        <p>12:00~13:15</p>
                        <p>13:30~14:45</p>
                        <p>15:00~16:15</p>
                        <p>16:30~17:45</p>
                        <p>18:00~19:15</p>
                    </div>
                </div>
                <div className={cx('day')}>
                    <h4>Monday</h4>
                    <div className={cx('events')}>
                        {schelude.mon.map((event, index) => {
                            return (
                                <div
                                    key={index}
                                    className={cx('event', `start-${event.start}`, `end-${event.end}`)}
                                    onClick={() => setContent(event)}
                                    style={{ backgroundColor: event.color }}
                                >
                                    <h5>
                                        {event.name} - <span>{event.professor}</span>
                                    </h5>

                                    <p>
                                        {event.time} {event.address}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('day')}>
                    <h4>Tuesday</h4>
                    <div className={cx('events')}>
                        {schelude.tues.map((event, index) => {
                            return (
                                <div
                                    key={index}
                                    style={{ backgroundColor: event.color }}
                                    onClick={() => setContent(event)}
                                    className={cx('event', `start-${event.start}`, `end-${event.end}`)}
                                >
                                    <h5>
                                        {event.name} - <span>{event.professor}</span>
                                    </h5>

                                    <p>
                                        {event.time} {event.address}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('day')}>
                    <h4>Wednesday</h4>
                    <div className={cx('events')}>
                        {schelude.wed.map((event, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => setContent(event)}
                                    style={{ backgroundColor: event.color }}
                                    className={cx('event', `start-${event.start}`, `end-${event.end}`)}
                                >
                                    <h5>
                                        {event.name} - <span>{event.professor}</span>
                                    </h5>

                                    <p>
                                        {event.time} {event.address}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('day')}>
                    <h4>Thursday</h4>
                    <div className={cx('events')}>
                        {schelude.thur.map((event, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => setContent(event)}
                                    style={{ backgroundColor: event.color }}
                                    className={cx('event', `start-${event.start}`, `end-${event.end}`)}
                                >
                                    <h5>
                                        {event.name} - <span>{event.professor}</span>
                                    </h5>

                                    <p>
                                        {event.time} {event.address}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('day')}>
                    <h4>Friday</h4>
                    <div className={cx('events')}>
                        {schelude.fri.map((event, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => setContent(event)}
                                    style={{ backgroundColor: event.color }}
                                    className={cx('event', `start-${event.start}`, `end-${event.end}`)}
                                >
                                    <h5>
                                        {event.name} - <span>{event.professor}</span>
                                    </h5>

                                    <p>
                                        {event.time} {event.address}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
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
