const cardsContainer = document.querySelector('.cards');
const indicators = document.querySelectorAll('.indicator');

function scrollToSection(index) {
  const cardWidth = document.querySelector('.card').offsetWidth;
  cardsContainer.scrollTo({
    left: cardWidth * index,
    behavior: 'smooth'
  });

  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[index].classList.add('active');
}

// إضافة ميزة تغيير المؤشر تلقائيًا عند التمرير
cardsContainer.addEventListener('scroll', () => {
  const scrollLeft = cardsContainer.scrollLeft;
  const cardWidth = document.querySelector('.card').offsetWidth;
  let activeIndex = Math.round(scrollLeft / cardWidth);

  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[activeIndex].classList.add('active');
});
