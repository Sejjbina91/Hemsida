$(document).on('click', '.read-more-main-article', function(){
  // Show or hide the extra text
  $('.main-article-extra-text').toggleClass('d-none');
  // Change the text of the button
  $(this).find('span').toggleClass('d-none');
});