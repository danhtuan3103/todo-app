import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';
import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
const cx = classNames.bind(styles);
function Day({ day, schedules, setContent, mode }) {
    const [array, setArray] = useState([]);

    const arr = schedules.map((s) => {
        return { start: s.start, end: s.end };
    });
    console.log(arr);

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

        for (let i = prevEnd; i < 10; i++) {
            result.push({ start: i, end: i + 1 });
        }

        return result;
    };

    useEffect(() => {
        if (mode) {
            setArray(makeArray());
        }
    }, []);

    console.log(day, array);

    return (
        <div className={cx('day')}>
            <h4>{day}</h4>
            <div className={cx('events')}>
                {schedules.map((event, index) => {
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

                {array.map((a, index) => {
                    return (
                        <div key={index} className={cx('add-btn', `start-${a.start}`, `end-${a.end}`)}>
                            <AiOutlinePlus className={cx('plus-icon')} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Day;
