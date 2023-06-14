import classNames from 'classnames/bind';
import styles from './ProjectDetail.module.scss';
import { GrTextAlignLeft, GrTextAlignRight, GrTextAlignCenter } from 'react-icons/gr';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import uniqid from 'uniqid';
import Button from '~/components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '~/store';
const cx = classNames.bind(styles);
function ProjectDetail() {
    const desRef = useRef();
    const projects = useSelector((state) => state.projects.projects);
    const [card, setCard] = useState({});
    const [title, setTitle] = useState('Design');
    const [des, setDes] = useState('');
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        // console.log('id', id);
        if (id) {
            const card = projects.find((p) => {
                return p.id === +id;
            });
            setCard(card);
            setTitle(card.title);
            setDes(card.description);
        }
    }, []);

    const createProject = () => {
        const data = {
            id: uniqid(),
            type: 'todo',
            title: title,
            description: des,
        };
        console.log(data);
        dispatch(actions.addProject(data));
        navigate('/project');
    };

    const handleEdit = () => {
        const data = {
            id: +id,
            title: title,
            description: des,
        };
        console.log(data);
        dispatch(actions.editProject(data));
        navigate('/project');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('title-wrapper')}>
                    <input
                        autoFocus
                        type="text"
                        className={cx('title')}
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={cx('description-wrapper')}>
                    <textarea
                        ref={desRef}
                        className={cx('description')}
                        placeholder="Your Text Here"
                        value={des}
                        onChange={(e) => setDes(e.target.value)}
                    />
                </div>
            </div>
            <div className={cx('btn-wrap')}>
                <button className={cx('btn')} onClick={id ? handleEdit : createProject}>
                    {id ? 'Save' : 'Submit'}
                </button>
            </div>
        </div>
    );
}

export default ProjectDetail;
