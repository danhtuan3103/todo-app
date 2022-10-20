import style from './Dayly.module.scss';
function List({ children }) {
    return <div className={style.list}>{children}</div>;
}

export default List;
