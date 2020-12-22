const showHiddenAboutContents = () => {
  document.addEventListener('DOMContentLoaded', () => {


    let myProjects=document.querySelector('.about-project');
    let myTechstack=document.querySelector('.about-techstack')
    let myCv=document.querySelector('.about-cv')
    let myBtns=document.querySelectorAll('.about-button');

    function hidePosts() {
      myProjects.classList.add('hidden');
      myTechstack.classList.add('hidden');
      myCv.classList.add('hidden');
    }
  
    function revealPosts(btn) {
      if (btn.id === "projects") {
        console.log("myProjects")
        myProjects.classList.remove('hidden');
      }
      else if (btn.id === "cv") {
        myCv.classList.remove('hidden');
      }
      else {
        myTechstack.classList.remove('hidden');
      }
    }


    myBtns.forEach(function(btn) {
    
        btn.addEventListener('click', () => {
          console.log(btn.id)
          console.log(myProjects)
          console.log(myTechstack)
          console.log(myCv)
          hidePosts();
          revealPosts(btn);     
          myBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
 
    });

});
}




showHiddenAboutContents();