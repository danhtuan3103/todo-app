export const times = ['9', '10', '11', '12', '13', '14', '15', '16'];
const getLocation = (time) => {
    let start = 0,
        end = 0;
    const temp = time.split('-');
    let a;
    if (temp.length === 2) {
        a = temp
            .map((t) => {
                return t.split(':');
            })
            .flat();
    }

    if (a.length === 4) {
        start = times.indexOf(a[0]) + 1;
        end = times.indexOf(a[2]) + 1;

        if (start === end) {
            end += 1;
        } else if (end === 0) {
            end = start + 1;
        }
    }

    return [start, end];
};

export default getLocation;
