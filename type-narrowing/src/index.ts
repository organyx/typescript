function triple(value: number | string) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    // if (typeof value === 'number') {
    //     return value * 3;
    // }
    return value * 3;
}

const el = document.getElementById('none');
if (el) {
    el.nodeValue = 'hello';
} else {
    // el.
}