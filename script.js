document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  let draggedElement = null;

  images.forEach((image) => {
    image.addEventListener('dragstart', (event) => {
      draggedElement = event.target;
      event.dataTransfer.setData('text/plain', event.target.id);
      event.target.classList.add('selected');
    });

    image.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    image.addEventListener('dragenter', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('image')) {
        event.target.classList.add('drag-over');
      }
    });

    image.addEventListener('dragleave', (event) => {
      if (event.target.classList.contains('image')) {
        event.target.classList.remove('drag-over');
      }
    });

    image.addEventListener('drop', (event) => {
      event.preventDefault();
      event.target.classList.remove('drag-over');
      
      if (event.target !== draggedElement) {
        const draggedId = draggedElement.id;
        const targetId = event.target.id;
        
        // Swap background images
        const draggedBg = window.getComputedStyle(draggedElement).backgroundImage;
        const targetBg = window.getComputedStyle(event.target).backgroundImage;
        draggedElement.style.backgroundImage = targetBg;
        event.target.style.backgroundImage = draggedBg;
        
        // Swap text content
        const draggedText = draggedElement.textContent;
        const targetText = event.target.textContent;
        draggedElement.textContent = targetText;
        event.target.textContent = draggedText;
        
        // Swap IDs
        draggedElement.id = targetId;
        event.target.id = draggedId;
      }
    });

    image.addEventListener('dragend', () => {
      if (draggedElement) {
        draggedElement.classList.remove('selected');
      }
      draggedElement = null;
    });
  });
});