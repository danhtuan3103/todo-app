import classNames from 'classnames/bind';
import styles from './ProjectDetail.module.scss';
import { GrTextAlignLeft, GrTextAlignRight, GrTextAlignCenter } from 'react-icons/gr';
import { useRef, useState } from 'react';
const cx = classNames.bind(styles);
function ProjectDetail() {
    const desRef = useRef();
    const [color, setColor] = useState('#e44232');
    const colorRef = useRef();
    const defaultFn = () => {
        console.log('Clik');
    };
    const BoldTool = () => {
        desRef.current.style.fontWeight = 'bold';
    };
    const ItalicTool = () => {
        desRef.current.style.fontStyle = 'italic';
    };
    const TextAlignLeft = () => {
        desRef.current.style.textAlign = 'left';
    };
    const TextAlignCenter = () => {
        desRef.current.style.textAlign = 'center';
    };
    const TextAlignRight = () => {
        desRef.current.style.textAlign = 'right';
    };
    const Uppercase = () => {
        desRef.current.style.textTransform = 'uppercase';
    };
    const Lowercase = () => {
        desRef.current.style.textTransform = 'lowercase';
    };
    const Capitalize = () => {
        desRef.current.style.textTransform = 'capitalize';
    };
    const CleatText = () => {
        desRef.current.value = '';
    };
    const TOOLS = [
        { name: 'Bold', onClick: BoldTool },
        { name: 'Italic', onClick: ItalicTool },
        { name: <GrTextAlignLeft />, onClick: TextAlignLeft },
        { name: <GrTextAlignCenter />, onClick: TextAlignCenter },
        { name: <GrTextAlignRight />, onClick: TextAlignRight },
        { name: 'Upper Case', onClick: Uppercase },
        { name: 'Lower Case', onClick: Lowercase },
        { name: 'Capitalize', onClick: Capitalize },
        { name: 'Clear Text', onClick: CleatText },
    ];

    const handleOnChangeColor = (e) => {
        setColor(e.target.value);
        desRef.current.style.backgroundColor = e.target.value;
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
                        value="Design"
                        onChange={defaultFn}
                    />
                </div>
                <div className={cx('tool')}>
                    {TOOLS.map((tool, index) => {
                        const Fn = tool.onClick;
                        return (
                            <button key={index} className={cx('tool-btn')} onClick={Fn}>
                                {tool.name}
                            </button>
                        );
                    })}
                    <input
                        ref={colorRef}
                        className={cx('color-input')}
                        type="color"
                        value={color}
                        onChange={handleOnChangeColor}
                    />
                </div>
                <div className={cx('description-wrapper')}>
                    <textarea ref={desRef} className={cx('description')} placeholder="Your Text Here" />
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
