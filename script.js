
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'Hello, This is Anik kanti sikder';

let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    textEl.innerText = text.slice(0, idx);
    idx++;

    if(idx > text.length) {
        idx = 1;
    }

    setTimeout(writeText, speed);
}

// Controlling the input in real time
speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});

// speedEl.addEventListener('input', (e) => speed = 
// 300 / e.target.value);