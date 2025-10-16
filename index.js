const row = document.getElementById('card-row');
  const leftBtn = document.getElementById('btn-left');
  const rightBtn = document.getElementById('btn-right');

 function slide(direction) {
    if (row.classList.contains('animating')) return;
    row.classList.add('animating');

    const width = row.children[0].offsetWidth + 16; // 16px = Bootstrap gutter approx
    const moveDistance = direction === 'left' ? width : -width;

    row.style.transform = `translateX(${moveDistance}px)`;

    setTimeout(() => {
      row.style.transition = 'none';
      row.style.transform = 'translateX(0)';

      if (direction === 'left') {
        const last = row.lastElementChild;
        row.insertBefore(last, row.firstElementChild);
      } else {
        const first = row.firstElementChild;
        row.appendChild(first);
      }

      // Reset transition after reordering
      setTimeout(() => {
        row.style.transition = 'transform 0.5s ease';
        row.classList.remove('animating');
      }, 20);
    }, 500);
  }

  leftBtn.addEventListener('click', () => slide('left'));
  rightBtn.addEventListener('click', () => slide('right'));



  // button toggle when clicked

  const buttons = document.querySelectorAll('.btn-toggle');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });