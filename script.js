document.addEventListener('DOMContentLoaded', () => {
  const draggables = document.querySelectorAll('.image');
  const container = document.getElementById('parent');

  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('dragenter', dragEnter);
    draggable.addEventListener('dragleave', dragLeave);
    draggable.addEventListener('drop', drop);
    draggable.addEventListener('dragend', dragEnd);
  });

  let draggedElement = null;

  function dragStart(e) {
    draggedElement = this;
    setTimeout(() => this.classList.add('dragging'), 0);
  }

  function dragOver(e) {
    e.preventDefault(); // Required to allow dropping
  }

  function dragEnter(e) {
    e.preventDefault(); // Required for dragover and dragenter events to work
    this.classList.add('drag-over');
  }

  function dragLeave() {
    this.classList.remove('drag-over');
  }

  function drop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    if (this !== draggedElement) {
      swapElements(draggedElement, this);
    }
  }

  function dragEnd() {
    this.classList.remove('dragging');
  }

  function swapElements(dragged, target) {
    const draggedBackground = window.getComputedStyle(dragged).backgroundImage;
    const targetBackground = window.getComputedStyle(target).backgroundImage;
    dragged.style.backgroundImage = targetBackground;
    target.style.backgroundImage = draggedBackground;

    // Swap the text inside the divs
    const draggedText = dragged.textContent;
    const targetText = target.textContent;
    dragged.textContent = targetText;
    target.textContent = draggedText;

    // Swap the ids (if needed)
    const draggedId = dragged.id;
    const targetId = target.id;
    dragged.id = targetId;
    target.id = draggedId;
  }
});
