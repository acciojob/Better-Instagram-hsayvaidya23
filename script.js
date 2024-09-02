document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');

  let draggedElement = null;

  images.forEach((image) => {
    image.addEventListener('dragstart', (event) => {
      draggedElement = event.target;
      event.target.classList.add('selected');
    });

    image.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    image.addEventListener('dragend', () => {
      if (draggedElement) {
        draggedElement.classList.remove('selected');
      }
      draggedElement = null;
    });

    image.addEventListener('drop', (event) => {
      event.preventDefault();
      if (event.target !== draggedElement) {

        const draggedHTML = draggedElement.innerHTML;
        draggedElement.innerHTML = event.target.innerHTML;
        event.target.innerHTML = draggedHTML;

        const draggedBg = draggedElement.style.backgroundImage;
        draggedElement.style.backgroundImage = event.target.style.backgroundImage;
        event.target.style.backgroundImage = draggedBg;

        const draggedId = draggedElement.id;
        draggedElement.id = event.target.id;
        event.target.id = draggedId;
      }
    });
  });
});
