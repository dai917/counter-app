let count = 0;

const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// カウントアップ
incrementButton.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// カウントダウン
decrementButton.addEventListener('click', () => {
    count--;
    updateDisplay();
});

// リセット
resetButton.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// カウント表示の更新
function updateDisplay() {
    counterDisplay.textContent = count;
}
