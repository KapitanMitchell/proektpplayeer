const button = document.querySelector('.button');

button.addEventListener('click', () => {
  button.classList.toggle('active');
  button.style.color = button.classList.contains('active') ? 'white' : '';
  button.textContent = button.classList.contains('active') ? 'Ви Підписані' : 'Підписатись';
});



const likeButtons = document.querySelectorAll('.like-button');
  const likeCounts = document.querySelectorAll('.like-count');

  likeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const songName = button.getAttribute('data-song');
      const currentCount = parseInt(likeCounts[index].textContent);
      likeCounts[index].textContent = currentCount + 1;
    });
  });