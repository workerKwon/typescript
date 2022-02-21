let num = 10;

function greet(who: string) {
    console.log('Hello', who)
}

function add(a: string, b: string) {
    return a+b;
}

const x: number = null;
const y: number | null = null;

function logMessage(message: string | null) {
    if(message) {
        message
    }
}

const foo = {
    x: [1,2,3],
    bar: {
        name:'Fred'
    }
}

function restOfPath(path: string) {
    return path.split('/').slice(1).join('/');
}

function getElement(elOrId: string|HTMLElement|null) : HTMLElement {
    if(typeof elOrId === 'object') {
        return elOrId;
    } else if (elOrId === null) {
        return document.body;
    } else {
        const el = document.getElementById(elOrId);
        return el;
    }
}

