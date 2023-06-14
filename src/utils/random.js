const randomDeg = () => {
    return Math.floor(Math.random() * 360) + 'deg';
};
const randomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export { randomDeg, randomColor };
