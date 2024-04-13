export function setImageToDom(message) {
    const imageElement = document.querySelector('#image');
    const img = document.createElement('img');
    img.src = message;
    imageElement.appendChild(img);
  }