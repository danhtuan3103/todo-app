import { useState } from 'react';
import styles from './Goals.module.scss';
import classNames from 'classnames/bind';
import { BsPlus } from 'react-icons/bs';
import Note from './Note';
import uniqid from 'uniqid';
import { GOALS } from '~/assets/data/sample';
import { randomColor, randomDeg } from '~/utils/random';
const cx = classNames.bind(styles);

function Goals() {
    const [data, setData] = useState(GOALS);

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
