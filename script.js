const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const modal = document.getElementById('modal');
const menuBar = document.getElementById('menu-bar')
const mockups = document.getElementById('mockups')

menuIcon.addEventListener('touchend',() => {
  modal.classList.toggle('hidden');
  mockups.classList.toggle('hidden');
  menuBar.classList.toggle('invisible');
  closeIcon.classList.toggle('hidden');
  menuIcon.classList.toggle('invisible')
})

closeIcon.addEventListener('touchend', () => {
  modal.classList.toggle('hidden');
  mockups.classList.toggle('hidden');
  menuBar.classList.toggle('invisible');
  closeIcon.classList.toggle('hidden');
  menuIcon.classList.toggle('invisible')
})
