import styles from './Goals.module.scss';
import classNames from 'classnames/bind';
import { BsPlus } from 'react-icons/bs';
import Note from './Note';

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
];
function Goals() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')}>
                {DATA.map((card, indx) => {
                    return <Note key={indx} card={card} />;
                })}
            </div>
            <div className={cx('add-btn')}>
                <BsPlus className={cx('btn')} />
            </div>
        </div>
    );
}

export default Goals;
