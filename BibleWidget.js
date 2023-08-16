const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');
const bibleText = document.querySelector('.bible-text');

searchButton.addEventListener('click', function() {
  const searchValue = searchInput.value.toLowerCase();
  const verses = bibleText.querySelectorAll('p');
  
  verses.forEach(function(verse) {
    if (verse.textContent.toLowerCase().includes(searchValue)) {
      verse.classList.add('highlight');
    } else {
      verse.classList.remove('highlight');
    }
  });
});