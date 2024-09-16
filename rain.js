const rainContainer = document.querySelector('.rain');

function createRain() {
    const drop = document.createElement('div');
    drop.classList.add('raindrop');
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    drop.style.animationDelay = `${Math.random() * 5}s`;

    rainContainer.appendChild(drop);
    setTimeout(() => {
        drop.remove();
    }, 5000);
}

setInterval(createRain, 10);