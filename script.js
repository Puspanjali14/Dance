const danceButton = document.getElementById('danceButton');
const persons = document.querySelectorAll('.person');
let isDancing = false;
let danceIntervals = [];

function startDance() {
    if (isDancing) return;

    isDancing = true;

    persons.forEach(person => {
        const leftArm = person.querySelector('.left-arm');
        const rightArm = person.querySelector('.right-arm');
        const leftLeg = person.querySelector('.left-leg');
        const rightLeg = person.querySelector('.right-leg');

        const interval = setInterval(() => {
            leftArm.style.transform = 'rotate(-45deg)';
            rightArm.style.transform = 'rotate(45deg)';
            leftLeg.style.transform = 'rotate(-20deg)';
            rightLeg.style.transform = 'rotate(20deg)';

            setTimeout(() => {
                leftArm.style.transform = 'rotate(15deg)';
                rightArm.style.transform = 'rotate(-15deg)';
                leftLeg.style.transform = 'rotate(10deg)';
                rightLeg.style.transform = 'rotate(-10deg)';
            }, 500);
        }, 1000);

        danceIntervals.push(interval);
    });
}

function stopDance() {
    isDancing = false;
    danceIntervals.forEach(interval => clearInterval(interval));
    danceIntervals = [];
}

danceButton.addEventListener('click', () => {
    if (isDancing) {
        stopDance();
        danceButton.textContent = 'Dance!';
    } else {
        startDance();
        danceButton.textContent = 'Stop Dancing';
    }
});
