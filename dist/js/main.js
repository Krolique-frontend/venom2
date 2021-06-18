'use strict';

const menu__button = document.querySelector('.menu__button');
const close__button = document.querySelector('.close__button');
const menu = document.querySelector('.nav__list');
const trailer = document.querySelector('.trailer')
    ? document.querySelector('.trailer')
    : document.querySelector('#trailer__button');

menu__button.onclick = close__button.onclick = event => {
    menu.classList.toggle('show');
};

trailer.onclick = function () {
    const iFrame = document.createElement('iframe');
    const iFrameUrl = `https://www.youtube.com/embed/Othd8W8o3t0`;

    iFrame.setAttribute('src', iFrameUrl);
    iFrame.setAttribute('title', 'YouTube video player');
    iFrame.setAttribute('frameborder', '0');
    iFrame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    const allowFS = document.createAttribute('allowfullscreen');
    iFrame.setAttributeNode(allowFS);

    this.replaceChild(iFrame, this.firstChild);
};
