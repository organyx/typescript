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

const printLetters = (word?: string) => {
    if (word) {
        for (const letter of word) {
            console.log(letter);
        }
    } else {
        console.log('no word');
    }
};

function someDemo(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toLocaleLowerCase()
    }
}

// someDemo('a', 'b');
// someDemo(1, true);
// someDemo(3, '3');

interface Movie {
    title: string;
    duration: number;
}

interface TvShow {
    title: string;
    numberOfEpisodes: number;
    episodeDuration: number;
}

function getRunTime(piece: Movie | TvShow) {
    if('duration' in piece) {
        return piece.duration;
    }
    return piece.numberOfEpisodes * piece.episodeDuration;
}

getRunTime({title: 'The Office', numberOfEpisodes: 12, episodeDuration: 30});
getRunTime({title: 'The Office Movie', duration: 30});