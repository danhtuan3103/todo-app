import { useState } from 'react';
import styles from './Goals.module.scss';
import classNames from 'classnames/bind';
import { BsPlus } from 'react-icons/bs';
import Note from './Note';
import uniqid from 'uniqid';
const randomDeg = () => {
    return Math.floor(Math.random() * 360) + 'deg';
};
const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
const cx = classNames.bind(styles);
const DATA = [
    {
        id: 1,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        id: 2,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        id: 3,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        id: 4,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        id: 5,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        id: 6,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        id: 7,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: randomDeg(),
        color: randomColor(),
    },
    {
        id: 8,
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
                id: uniqid(),
                content: '.....',
                rolate: 0,
                color: randomColor(),
                isAdd: true,
            },
        ]);
    };

    const handleEdit = (id, content) => {
        const newData = data.map((d) => {
            if (d.id === id) {
                d.content = content;
                d.rolate = randomDeg();
            }

            return d;
        });

        console.log('Updated');
        setData(newData);
    };
    const handleDelete = (id) => {
        const newData = data.filter((d) => d.id !== id);
        setData(newData);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                {data.map((card, indx) => {
                    return (
                        <Note
                            key={indx}
                            card={card}
                            isAdd={card?.isAdd}
                            number={indx}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    );
                })}
            </div>
            <div className={cx('add-btn')} onClick={handleAdd}>
                <BsPlus className={cx('btn')} />
            </div>
        </div>
    );
}

export default Goals;
