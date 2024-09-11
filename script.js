document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners for drag and drop functionality
  const divs = document.querySelectorAll('.image');

  divs.forEach(div => {
    div.addEventListener('dragstart', handleDragStart);
    div.addEventListener('dragover', handleDragOver);
    div.addEventListener('drop', handleDrop);
  });

  let draggedElement = null;

  function handleDragStart(event) {
    draggedElement = event.target;
  }

  function handleDragOver(event) {
    // Prevent the default to allow drop
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    
    // Ensure we are swapping between different divs
    if (draggedElement !== event.target) {
      const draggedHTML = draggedElement.innerHTML;
      const droppedHTML = event.target.innerHTML;

      // Swap the innerHTML of the divs
      draggedElement.innerHTML = droppedHTML;
      event.target.innerHTML = draggedHTML;
    }
  }
});
