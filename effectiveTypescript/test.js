var num = 10;
function add(a, b) {
    return a + b;
}
function logMessage(message) {
    if (message) {
        message;
    }
}
var foo = {
    x: [1, 2, 3],
    bar: {
        name: 'Fred'
    }
};
function restOfPath(path) {
    return path.split('/').slice(1).join('/');
}
function getElement(elOrId) {
    if (typeof elOrId === 'object') {
        return elOrId;
    }
    else if (elOrId === null) {
        return document.body;
    }
    else {
        var el = document.getElementById(elOrId);
        return el;
    }
}
