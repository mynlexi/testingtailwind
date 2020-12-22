const showHiddenAboutContents = () => {
  document.addEventListener('DOMContentLoaded', () => {
    let myBtns=document.querySelectorAll('.about-button');
    myBtns.forEach(function(btn) {

        btn.addEventListener('click', () => {
          myBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
 
    });

});
}

export { showHiddenAboutContents };