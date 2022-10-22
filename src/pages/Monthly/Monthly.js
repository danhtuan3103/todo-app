import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import styles from './Monthly.module.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BsPlusLg, BsCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import moment from 'moment';
import AddBox from '../Project/Frame/AddBox';
import OverLay from '~/components/OverLay';
const cx = classNames.bind(styles);

const events = ['2022-10-01', '2022-10-02', '2022-10-03'];
function Monthly() {
    const [value, onChange] = useState(new Date());
    const [date, setDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
    const [data, setData] = useState([]);
    const [openBox, setOpenBox] = useState(false);

    useEffect(() => {
        fetch('https://634bc6c5317dc96a308a8173.mockapi.io/api/month')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const handleClickDay = (value, e) => {
        setDate(moment(value).format('YYYY-MM-DD'));
        setOpenBox(true);
        console.log(moment(value).format('YYYY-MM-DD'));
        // console.log((e.target.style.backgroundColor = 'cyan'));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('events')}>
                <div className={cx('header')}>
                    <h3>Events</h3>
                    <div className={cx('create-event')}>
                        <p className={cx('label')}>Create event</p>
                        <span className={cx('plus-btn')} onClick={() => setOpenBox(true)}>
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
                                    <BsFillTrashFill className={cx('tool', 'trash')} />
                                    <FaEdit className={cx('tool', 'edit')} />
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

                        for (let e = 0; e < events.length; e++) {
                            if (events[e] === event) {
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
                    <AddBox onClose={() => setOpenBox(false)} _date={date} />
                </OverLay>
            )}
        </div>
    );
}

export default Monthly;
