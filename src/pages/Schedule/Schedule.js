import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';

const cx = classNames.bind(styles);
const schelude = {
    mon: ['', '', '', '', '', '알고리즘 최지웅 15:00-16:15 정보과학관_21304', '', ''],
    tues: [
        '',
        '',
        '학문목적한국어4 장지영 10:30-11:45 진리관_11114',
        '',
        '',
        '데이터통신과네트워크 조효진 15:00-16:15 정보과학관_21304',
        '',
        '',
    ],
    wed: ['', '', '', '', '', '윈도우프로그래밍및실습 이근정 16:00-16:50 정보과학관_21101', '', ''],
    thur: [
        '',
        '생명정보과학 공현승 09:00-10:15 정보과학관_21204 ',
        '',
        '',
        '',
        '채플 정대경 15:00-15:50 한경직기념관_08110',
        '고급컴퓨터수 최형광 16:30-17:45 정보과학관_21305',
        '',
    ],
    fri: ['', '', '학문목적한국어4 장지영 10:30-11:45 진리관_11114', '', '', '', '', ''],
};

function Schedule() {
    const [content, setContent] = useState('');

    const handleClick = (e) => {
        setContent(e.target.textContent);
    };

    const text = content.split(' ');
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
                    <p>08:00~08:50</p>
                    <p>09:00~10:15</p>
                    <p>10:30~11:45</p>
                    <p>12:00~13:15</p>
                    <p>13:30~14:45</p>
                    <p>15:00~16:15</p>
                    <p>16:30~17:45</p>
                    <p>18:00~19:15</p>
                </div>
                <div className={cx('day')}>
                    <h4>Monday</h4>
                    {schelude.mon.map((time, index) => {
                        return (
                            <p key={index} onClick={handleClick}>
                                {time}
                            </p>
                        );
                    })}
                </div>
                <div className={cx('day')}>
                    <h4>Tuesday</h4>

                    {schelude.tues.map((time, index) => {
                        return (
                            <p key={index} onClick={handleClick}>
                                {time}
                            </p>
                        );
                    })}
                </div>
                <div className={cx('day')}>
                    <h4>Wednesday</h4>
                    {schelude.wed.map((time, index) => {
                        return (
                            <p key={index} onClick={handleClick}>
                                {time}
                            </p>
                        );
                    })}
                </div>
                <div className={cx('day')}>
                    <h4>Thursday</h4>
                    {schelude.thur.map((time, index) => {
                        return (
                            <p key={index} onClick={handleClick}>
                                {time}
                            </p>
                        );
                    })}
                </div>
                <div className={cx('day')}>
                    <h4>Friday</h4>
                    {schelude.fri.map((time, index) => {
                        return (
                            <p key={index} onClick={handleClick}>
                                {time}
                            </p>
                        );
                    })}
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
                            <p>Name</p>
                            <p>Professor</p>
                            <p>Time</p>
                            <p>Address</p>
                        </div>

                        <div className={cx('text')}>
                            {text.map((text, index) => {
                                return <p key={index}>{text}</p>;
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Schedule;
