export function add(x, y) {
    return x+y;
}

function mandatory() {
    console.log("You should enter an argument here.  Using 1 as default.");
    return 1;
}

export function substract(x, y = mandatory()) {
    return x-y;
}

