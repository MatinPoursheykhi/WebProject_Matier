// cursor mouse
document
  .getElementsByTagName("main")[0]
  .addEventListener("mousemove", function (e) {
    let mousePosX = e.clientX;
    let mousePosY = e.clientY;

    let cursor1 = document.getElementById("outerCircleCursor");
    cursor1.style.top = mousePosY + "px";
    cursor1.style.left = mousePosX + "px";

    let cursor2 = document.getElementById("innerDotCursor");
    cursor2.style.top = mousePosY + "px";
    cursor2.style.left = mousePosX + "px";
  });

//  mouseCursorHover
let links = document.querySelectorAll("a");

links.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    document.getElementById("outerCircleCursor").classList.add("mouseHover");
  });
  element.addEventListener("mouseleave", () => {
    document.getElementById("outerCircleCursor").classList.remove("mouseHover");
  });
});

// open and close menu
document.getElementById("openMenu").addEventListener("click", function () {
  document.getElementsByClassName("menu")[0].classList.add('menuActive');
});
document.getElementById("closeMenu").addEventListener("click", function () {
  document.getElementsByClassName("menu")[0].classList.remove('menuActive');
});

// skill Box
let skillBoxOffsetTop;
let mainScrollTop;
let _clear1
let _clear2
let _clear3

document.getElementsByTagName("main")[0].addEventListener("scroll", function () {
    skillBoxOffsetTop = document.getElementsByClassName("skillsBox")[0].offsetTop;
    mainScrollTop = this.scrollTop;

    if (mainScrollTop + 420 > skillBoxOffsetTop) {
      let progresses = document.querySelectorAll(".skillsBox .prog");

      for (i = 0; i < progresses.length; i++) {
        progresses[0].style.width = 80 + "%";
        progresses[1].style.width = 70 + "%";
        progresses[2].style.width = 75 + "%";
      }
      _clear1 = setInterval(counter1 ,600)
      _clear2 = setInterval(counter2 ,600)
      _clear3 = setInterval(counter3 ,600)
     
    }else{
      clearInterval(_clear1)
      clearInterval(_clear2)
      clearInterval(_clear3)
    }
  }); 
  let num1 = 0
  function counter1(){
    if(num1 <= 80){
      document.getElementById('developmentCount').innerText = num1 + '%'
      num1++
    }else{
      return false
    }
  }
  let num2 = 0
  function counter2(){
    if(num2 <= 70){
      document.getElementById('designingCount').innerText = num2 + '%'
      num2++
    }else{
      return false
    }
  }
  let num3 = 0
  function counter3(){
    if(num3 <= 75){
      document.getElementById('marketingCount').innerText = num3 + '%'
      num3++
    }else{
      return false
    }
  }

  // portfolioPage switch Between LIS and Showing PICs
  let portfoliosLIS = document.querySelectorAll('.portfolioListWrraper ul:nth-of-type(1) li')
  let portfoliosPics = document.querySelectorAll('.portfolioListWrraper ul:nth-of-type(2) li')
   for (i = 0; i < portfoliosLIS.length; i++) {
    portfoliosLIS[i].addEventListener('click',function(){
      for(j = 0 ; j <  portfoliosLIS.length ; j++){
        portfoliosLIS[j].classList.remove('active')
      }
      this.classList.add('active')
      let temp =  this.getAttribute('data-Filter')
      for(z = 0; z < portfoliosPics.length; z++){
        portfoliosPics[z].style.display = 'none'

        if(portfoliosPics[z].getAttribute('data-Pics') == temp || temp == 'All'){
          portfoliosPics[z].style.display = 'flex'
        }
      }
    })}

// scroll to top

document.getElementsByTagName("main")[0].addEventListener("scroll", function () {
    mainScrollTop = this.scrollTop;
    if (mainScrollTop > 20) {
      document.getElementById("scrollToTopHome").style.transform = 'translateY(-20px)';
      
    } else {
      document.getElementById("scrollToTopHome").style.transform = 'translateY(100px)';
    }
  });
