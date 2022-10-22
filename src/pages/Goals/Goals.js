import styles from './Goals.module.scss';
import classNames from 'classnames/bind';
import { BsPlus } from 'react-icons/bs';

const cx = classNames.bind(styles);
const DATA = [
    {
        title: 'Goal #1',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '12deg',
        color: '#ff7eb9',
    },
    {
        title: 'Goal #2',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '-8deg',
        color: '#ff65a3',
    },
    {
        title: 'Goal #3',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '-12deg',
        color: '#7afcff',
    },
    {
        title: 'Goal #4',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '4deg',
        color: '#ff7eb9',
    },
    {
        title: 'Goal #5',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '20deg',
        color: '#fff740',
    },
    {
        title: 'Goal #1',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '12deg',
        color: '#ff65a3',
    },
    {
        title: 'Goal #2',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '-8deg',
        color: '#7afcff',
    },
    {
        title: 'Goal #3',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '-12deg',
        color: '#ff7eb9',
    },
    {
        title: 'Goal #4',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '4deg',
        color: '#ff65a3',
    },
    {
        title: 'Goal #5',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        rolate: '20deg',
        color: '#fff740',
    },
];
function Goals() {
    const handleMove = (e) => {
        e.target.style.transform = 'scale(1.2)';
    };

    const handleLeave = (e, deg) => {
        e.target.style.transform = `rotate(${deg})`;
    };

    const handleClick = (e) => {
        e.preventDefault();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                {DATA.map((card, indx) => {
                    return (
                        <div
                            key={indx}
                            className={cx('card')}
                            style={{ transform: `rotate(${card.rolate})`, backgroundColor: card.color }}
                            onMouseEnter={handleMove}
                            onMouseLeave={(e) => handleLeave(e, card.rolate)}
                            onContextMenu={handleClick}
                        >
                            <span className={cx('header')} onMouseEnter={(e) => e.preventDefault()}>
                                <span className={cx('hole')}> </span>
                                <h2 className={cx('title')}>{card.title}</h2>
                            </span>
                            <p className={cx('text')}>{card.content}</p>
                        </div>
                    );
                })}
            </div>
            <div className={cx('add-btn')}>
                <BsPlus className={cx('btn')} />
            </div>
        </div>
    );
}

export default Goals;
