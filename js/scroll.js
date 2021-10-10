window.onload = function(){

    var scrolled;
    var timer;
  
    let btnUpTo = document.querySelector('.up_img')
    btnUpTo.onclick = function(){
      scrolled = window.pageYOffset;
      scrollToTop();
    }
  
    function scrollToTop(){
      console.log(scrolled)
      if(scrolled > 0){
        window.scrollTo(0, scrolled)
        scrolled = scrolled - 5;
        timer = setTimeout(scrollToTop, 5)
      }else{
        clearTimeout(timer)
        window.scrollTo(0,0)
      }
    }
  }