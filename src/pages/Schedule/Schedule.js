import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Schedule.module.scss';
import Day from './Day';
import OverLay from '~/components/OverLay/OverLay';
import { AiFillSetting, AiFillSave } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { times } from '~/utils/getLocation';
import uniqid from 'uniqid';
import { scheduleActions } from '~/store';
import generateColor from '~/utils/generateRandomColor';

const cx = classNames.bind(styles);

const EditableP = ({ children, isEditable, setContent }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        };

        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('keydown', handleKeyPress);
        }

        return () => {
            if (contentElement) {
                contentElement.removeEventListener('keydown', handleKeyPress);
            }
        };
    }, []);

    return (
        <p
            className={isEditable && cx('content-edit')}
            contentEditable={isEditable}
            suppressContentEditableWarning
            spellCheck={false}
            onInput={(e) => setContent(e.target.innerHTML)}
            ref={contentRef}
        >
            {children}
        </p>
    );
};

function Schedule() {
    const [content, setContent] = useState(null);
    const [isEditMode, setIsEditMode] = useState(true);
    const [name, setName] = useState('');
    const [professor, setProfessor] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');
    const schedule = useSelector((state) => state.schedule.schedule);

    const dispatch = useDispatch();
    const isEditContent = content?.name || content?.time || content?.address || content?.professor;
    const handleEdit = () => {
        const data = {
            day: content.day,
            id: content.id,
            name: name || content.name,
            time: time || content.time,
            professor: professor || content.professor,
            address: address || content.address,
        };

        const isValidContent = data.name && data.time && data.address && data.professor;

        if (isValidContent) {
            dispatch(scheduleActions.editDay({ data }));
        } else {
            alert('Vui long nhap day du thong tin !');
            return;
        }

        setName('');
        setProfessor('');
        setTime('');
        setAddress('');
        setContent(null);
    };

    const handleAdd = () => {
        const data = {
            day: content.day,
            id: uniqid(),
            name: name,
            time: time || `${times[content.start - 1]}:00-${times[content.start]}:00`,
            professor: professor,
            address: address,
            color: generateColor(),
        };
        const isValidContent = data.name && data.time && data.address && data.professor;

        if (isValidContent) {
            dispatch(scheduleActions.addDay({ data }));
        } else {
            alert('Vui long nhap day du thong tin !');
            return;
        }
        console.log(data);
        setName('');
        setProfessor('');
        setTime('');
        setAddress('');
        setContent(null);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>SCHOOL TIMETABLE</h2>

                {isEditMode ? (
                    <span className={cx('save-btn')} onClick={() => setIsEditMode(false)}>
                        <AiFillSave className={cx('save-icon')} />
                    </span>
                ) : (
                    <span className={cx('setting-btn')} onClick={() => setIsEditMode(true)}>
                        <AiFillSetting className={cx('setting-icon')} />
                    </span>
                )}
            </div>

            <div className={cx('timetable')}>
                <div className={cx('time')}>
                    <h4>Time</h4>
                    <div className={cx('events')}>
                        {times.map((time, index) => {
                            return <p key={index}>{`${time}:00~`}</p>;
                        })}
                    </div>
                </div>
                {schedule.map((sch, index) => {
                    return (
                        <Day
                            key={index}
                            day={sch.day}
                            schedules={sch.schedules}
                            setContent={setContent}
                            mode={isEditMode}
                        />
                    );
                })}
            </div>

            {content && (
                <OverLay>
                    <div className={cx('preview')}>
                        <div className={cx('close')}>
                            <h4 className={cx('preview-title')}>Subject Information</h4>
                            <span className={cx('close-btn')} onClick={() => setContent('')}>
                                &#10005;
                            </span>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('side')}>
                                <p>Name:</p>
                                <p>Professor:</p>
                                <p>Time:</p>
                                <p>Address:</p>
                            </div>
                            <div className={cx('text')}>
                                <EditableP setContent={setName} isEditable={isEditMode}>
                                    {content.name}
                                </EditableP>
                                <EditableP setContent={setProfessor} isEditable={isEditMode}>
                                    {content.professor}
                                </EditableP>
                                <EditableP setContent={setTime} isEditable={isEditMode}>
                                    {content?.start
                                        ? `${times[content.start - 1]}:00-${times[content.start]}:00`
                                        : content.time}
                                </EditableP>
                                <EditableP setContent={setAddress} isEditable={isEditMode}>
                                    {content.address}
                                </EditableP>
                            </div>
                        </div>
                        {isEditMode && (
                            <div>
                                <button
                                    className={cx('edit-save-btn')}
                                    onClick={isEditContent ? handleEdit : handleAdd}
                                >
                                    Save
                                </button>
                            </div>
                        )}
                    </div>
                </OverLay>
            )}
        </div>
    );
}

export default Schedule;
