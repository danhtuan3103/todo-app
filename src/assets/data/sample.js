import { randomColor, randomDeg } from '~/utils/random';

export const socials = [
    {
        name: 'facebook',
        path: 'https://www.facebook.com/profile.php?id=100015195702096',
        src: 'https://img.icons8.com/clouds/90/26e07f/facebook-new.png',
    },
    {
        name: 'gmail',
        path: 'mailto:danhtuan3103@gmail.com',
        src: 'https://img.icons8.com/clouds/90/26e07f/gmail-new.png',
    },
    {
        name: 'phone number',
        path: 'tel:01048976769',
        src: 'https://img.icons8.com/clouds/90/26e07f/apple-phone.png',
    },
    {
        name: 'instagram',
        path: 'https://www.instagram.com/danhtuan313/',
        src: 'https://img.icons8.com/clouds/90/26e07f/instagram-new--v3.png',
    },
];

const description =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the \
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  ';

export const PROJECT_LIST = [
    { type: 'todo', id: 1, title: 'Design', description: description, color: '#34eba8' },
    { type: 'todo', id: 2, title: 'Design', description: description, color: '#22998d' },
    { type: 'todo', id: 3, title: 'Design', description: description, color: '#992273' },
    { type: 'todo', id: 4, title: 'Design', description: description, color: '#979922' },
    { type: 'todo', id: 5, title: 'Design', description: description, color: '#979922' },
    { type: 'todo', id: 6, title: 'Design', description: description, color: '#22998d' },
    { type: 'progress', id: 7, title: 'Design', description: description, color: '#22998d' },
    // { type: 'completed', id: 7, title: 'Design', description: description, color: '#22998d' },
];

export const TASKS = [
    {
        id: 1,
        type: 'todo',
        title: 'Shoping',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'green',
    },
    {
        id: 2,

        type: 'todo',
        title: 'Shoping',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'red',
    },
    {
        id: 3,
        type: 'todo',
        title: 'Shoping',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'yellow',
    },
    {
        id: 4,
        type: 'todo',
        title: 'Shoping',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'cyan',
    },
    {
        id: 5,
        type: 'completed',
        title: 'Completed',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'green',
    },
    {
        id: 6,
        type: 'completed',
        title: 'Completed',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'red',
    },
    {
        id: 7,
        type: 'completed',
        title: 'Completed',
        description: 'Hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn hình ảnh yên ấm hạnh phúc trước mỗi bữa ăn ',
        color: 'yellow',
    },
];

export const SCHEDULE = [
    {
        day: 'Monday',
        schedules: [
            {
                id: 'b43h42b',
                name: '알고리즘',
                professor: '최지웅',
                time: '15:00-16:15',
                address: ' 정보과학관_21304',
                color: '#fafaa3',
            },
        ],
    },
    {
        day: 'Tuesday',
        schedules: [
            {
                id: '2h3ffdf',
                name: '학문목적한국어4',
                professor: '장지영',
                time: '10:30-12:45',
                address: '진리관_11114',
                color: '#fff1f8',
            },

            {
                id: '2h3ffsf',

                name: '데이터통신과네트워크',
                professor: '조효진',
                time: '12:00-16:15',
                address: '정보과학관_21304',
                color: '#fafaa3',
            },
        ],
    },
    {
        day: 'Wednesday',
        schedules: [
            {
                id: 'dsa9da7s',
                name: '윈도우프로그래밍및실습',
                professor: '이근정',
                time: '16:00-16:50',
                address: '정보과학관_21101',
                color: '#d1ffe6',
            },
        ],
    },
    {
        day: 'Thursday',
        schedules: [
            {
                id: 'dsa9da72',
                name: '생명정보과학',
                professor: '공현승',
                time: '09:00-10:15',
                address: '정보과학관_21204',
                color: '#fff1f8',
            },
            {
                id: 'h234hj4',
                name: '채플',
                professor: '정대경',
                time: '15:00-15:50',
                address: '한경직기념관_08110',
                color: '#e2f8ff',
            },
            {
                id: 'dsa9dafas',
                name: '고급컴퓨터수',
                professor: '최형광',
                time: '16:30-17:45',
                address: '정보과학관_21305',
                color: '#fff1f8',
            },
        ],
    },
    {
        day: 'Friday',
        schedules: [
            {
                id: 'das7das8',
                name: '학문목적한국어4',
                professor: '장지영',
                time: '10:30-11:45',
                address: '진리관_11114',
                color: '#e2f8ff',
            },
        ],
    },
];

export const GOALS = [
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
