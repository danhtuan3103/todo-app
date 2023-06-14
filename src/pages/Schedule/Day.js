import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import getLocation from '~/utils/getLocation';
const cx = classNames.bind(styles);
function Day({ day, schedules, setContent, mode }) {
    const [array, setArray] = useState([]);

    const arr = schedules.map((s) => {
        const [a, b] = getLocation(s.time);
        return { start: a, end: b };
    });

    arr.sort((a, b) => {
        return a.start - b.start;
    });

    const makeArray = () => {
        const result = [];

        let prevEnd = 1;

        for (let i = 0; i < arr.length; i++) {
            const { start, end } = arr[i];

            if (start > prevEnd) {
                for (let j = prevEnd; j < start; j++) {
                    result.push({ start: j, end: j + 1 });
                }
            }

            if (end > prevEnd) {
                // result.push({ start, end });
                prevEnd = end;
            }
        }

        for (let i = prevEnd; i < 9; i++) {
            result.push({ start: i, end: i + 1 });
        }

        return result;
    };

    useEffect(() => {
        if (mode) {
            setArray(makeArray());
        } else {
            setArray([]);
        }
    }, [mode, schedules, day]);

    return (
        <div className={cx('day')}>
            <h4>{day}</h4>
            <div className={cx('events')}>
                {schedules.map((event, index) => {
                    const [start, end] = getLocation(event.time);
                    return (
                        <div
                            key={event.id}
                            onClick={() => setContent({ day: day, ...event })}
                            style={{ backgroundColor: event.color }}
                            className={cx('event', `start-${start}`, `end-${end}`)}
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

                {array.map((a, index) => {
                    return (
                        <div
                            key={index}
                            className={cx('add-btn', `start-${a.start}`, `end-${a.end}`)}
                            onClick={() => setContent({ day: day, start: a.start, end: a.end })}
                        >
                            <AiOutlinePlus className={cx('plus-icon')} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Day;
