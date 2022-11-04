import { memo } from 'react';
import style from './Dayly.module.scss';
function List({ children }) {
    return <div className={style.list}>{children}</div>;
}

export default memo(List);
