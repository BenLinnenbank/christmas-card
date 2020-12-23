const snowList = document.querySelector('.g-snows');

for (let i = 0; i < 100; i++) {
    const snowFlake = document.createElement('li');
    snowList.appendChild(snowFlake);
}

const cardOne = document.querySelector('.card-one');
const cardTwo = document.querySelector('.card-two');
const cardThree = document.querySelector('.card-three');
const playButton = document.querySelector('#play');
const hiddenButton = document.querySelector('.hidden');
const loveNote = document.querySelector('.love-note');

playButton.addEventListener('click', () => {
    document.querySelector('#player').play();
    playButton.style.opacity = 0;
    playButton.style.visibility = 'hidden';
    setTimeout(() => {
        cardOne.style.opacity = 1;
        cardOne.style.visibility = 'visible';
    }, 1000);
    setTimeout(() => {
        cardTwo.style.opacity = 1;
        cardTwo.style.visibility = 'visible';
        cardOne.style.opacity = 0;
        cardOne.style.visibility = 'hidden';
    }, 8000);
    setTimeout(() => {
        cardThree.style.opacity = 1;
        cardThree.style.visibility = 'visible';
        cardTwo.style.opacity = 0;
        cardTwo.style.visibility = 'hidden';
    }, 14000);
    setTimeout(() => {
        loveNote.style.opacity = 1;
        loveNote.style.visibility = 'visible';
        cardThree.style.opacity = 0;
        cardThree.style.visibility = 'hidden';
    }, 20000);
    setTimeout(() => {
        loveNote.style.opacity = 0;
        loveNote.style.visibility = 'hidden';
    }, 25000);
    setTimeout(() => {
        hiddenButton.style.opacity = 1;
        hiddenButton.style.visibility = 'visible';
    }, 25500);
})

