'use strict';

const trailer = document.querySelector('.trailer');

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
