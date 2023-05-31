import classNames from 'classnames/bind';
import { useState, useEffect, useMemo } from 'react';
import styles from './Monthly.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsPlusLg, BsCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import moment from 'moment';
import AddBox from '~/components/Addbox';
import OverLay from '~/components/OverLay';
const cx = classNames.bind(styles);

const JOBS = [
    {
        createdAt: '2023-05-19T05:15:13.210Z',
        title: 'Hello ',
        description: 'Hello ',
        color: '#e44232',
        date: '2023-05-20',
        time: '00:00:00',
        id: '1',
    },
    {
        createdAt: '2023-05-19T10:33:57.983Z',
        title: 'A',
        description: 'A',
        color: '#a22115',
        date: '2023-05-17',
        time: '00:00:00',
        id: '2',
    },
];
function Monthly() {
    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const [data, setData] = useState(JOBS);
    const [openBox, setOpenBox] = useState(false);
    const [editData, setEditData] = useState(null);

    const handleClickDay = (value, e) => {
        setEditData(null);
        setDate(moment(value).format('YYYY-MM-DD'));
        setOpenBox(true);
        console.log(moment(value).format('YYYY-MM-DD'));
        // console.log((e.target.style.backgroundColor = 'cyan'));
    };

    const dateHasEvent = useMemo(() => {
        const temp = data.map((d) => d.date);

        return temp;
    }, [data]);

    const handleDeleteEvent = (id) => {
        const newData = data.filter((s) => s.id !== id);
        setData(newData);
    };

    const handleEditEvent = (card) => {
        setEditData(card);
        setOpenBox(true);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('events')}>
                <div className={cx('header')}>
                    <h3>Events</h3>
                    <div className={cx('create-event')}>
                        <p className={cx('label')}>Create event</p>
                        <span
                            className={cx('plus-btn')}
                            onClick={() => {
                                setEditData(null);
                                setOpenBox(true);
                            }}
                        >
                            <BsPlusLg />
                        </span>
                    </div>
                </div>
                <div className={cx('list')}>
                    {data.map((card) => {
                        return (
                            <div key={card.id} className={cx('card')}>
                                <div className={cx('text')}>
                                    <h4 style={{ color: card.color }}>{card.title}</h4>
                                    <i> {card.description}</i>
                                    <p>
                                        {card.date} {card.time}
                                    </p>
                                </div>
                                <div className={cx('tools')}>
                                    <BsFillTrashFill
                                        className={cx('tool', 'trash')}
                                        onClick={() => handleDeleteEvent(card.id)}
                                    />
                                    <FaEdit className={cx('tool', 'edit')} onClick={() => handleEditEvent(card)} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={cx('calendar-block')}>
                <Calendar
                    tileContent={(day) => {
                        const event = moment(day.date).format('YYYY-MM-DD');

                        for (let e = 0; e < dateHasEvent.length; e++) {
                            if (dateHasEvent[e] === event) {
                                return <BsCheckCircleFill className={cx('check')} />;
                            }
                        }
                        return <></>;
                    }}
                    className={cx('calendar')}
                    value={value}
                    onChange={onChange}
                    onClickDay={handleClickDay}
                />
            </div>

            {openBox && (
                <OverLay className={cx('overlay')}>
                    <AddBox
                        onClose={() => setOpenBox(false)}
                        _date={date}
                        setData={setData}
                        data={data}
                        edit={editData}
                    />
                </OverLay>
            )}
        </div>
    );
}

export default Monthly;
