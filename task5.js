const keyCount = {};
const displKeys = new Set();
const repeatKeys = [];
const outputEl= document.getElementById('output');


function updateDisplay() {
    outputEl.textContent = repeatKeys.join(' ');
}

document.addEventListener('keydown', (event) => {
    if (event.key.length > 1) return;
    
    const key = event.key;
    keyCount[key] = (keyCount[key] || 0) + 1;
    if (keyCount[key] === 2 && !displKeys.has(key)) {
        displKeys.add(key);
        repeatKeys.push(key);
        updateDisplay();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    outputEl.textContent = '';
});
