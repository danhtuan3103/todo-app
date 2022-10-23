import { useState } from 'react';
import styles from './Goals.module.scss';
import classNames from 'classnames/bind';
import { BsPlus } from 'react-icons/bs';
import Note from './Note';

const randomDeg = () => {
    return Math.floor(Math.random() * 360) + 'deg';
};
const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
const cx = classNames.bind(styles);
const DATA = [
    {
        title: 'Goal #1',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        title: 'Goal #2',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        title: 'Goal #3',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        title: 'Goal #4',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        title: 'Goal #5',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        title: 'Goal #1',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        title: 'Goal #2',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        title: 'Goal #3',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
];
function Goals() {
    const [data, setData] = useState(DATA);

    const handleAdd = (e) => {
        setData((pre) => [
            ...pre,
            {
                title: 'Goal #3',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
                rolate: randomDeg(),
                color: randomColor(),
            },
        ]);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                {data.map((card, indx) => {
                    return <Note key={indx} card={card} />;
                })}
            </div>
            <div className={cx('add-btn')} onClick={handleAdd}>
                <BsPlus className={cx('btn')} />
            </div>
        </div>
    );
}

export default Goals;
