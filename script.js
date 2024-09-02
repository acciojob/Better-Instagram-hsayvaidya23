document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image');
  let draggedElement = null;

  images.forEach((image) => {
    image.addEventListener('mousedown', (event) => {
      draggedElement = event.target;
      draggedElement.classList.add('selected');
    });

    image.addEventListener('mousemove', (event) => {
      event.preventDefault();
    });

    image.addEventListener('mouseup', (event) => {
      if (draggedElement && event.target !== draggedElement) {
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
        const draggedId = draggedElement.id;
        const targetId = event.target.id;
        draggedElement.id = targetId;
        event.target.id = draggedId;
      }
      
      if (draggedElement) {
        draggedElement.classList.remove('selected');
      }
      draggedElement = null;
    });
  });
});