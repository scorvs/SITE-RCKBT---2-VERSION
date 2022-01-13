/*SCROLL----------------------- */
const links = document.querySelectorAll(".scroll ");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

window.addEventListener('scroll', ()=>{
  let position = window.pageYOffset;
   if(position > 0){
     document.querySelector('nav').style.background = 'black';
   }else{
    document.querySelector('nav').style.background = 'rgba(8, 8, 8, 0.37)';
   }
});
/*---------------------------------- */

/*ANIMACAO NAVBAR-------------------- */
class MobileNavbar{
  constructor(mobileMenu, navList, navLinks){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList =  document.querySelector(navList);
    this.navLinks =  document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }
  animateLinks(){
    this.navLinks.forEach((link, index) =>{
        link.style.animation
        ?(link.style.animation = "")
        :(link.style.animation = `navLinkFade 0.5s ease forwards ${ index / 7 + 0.3}s`);

    });
  }

  handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent(){
    this.mobileMenu.addEventListener("click", this.handleClick);
  }
  
  init(){
    if(this.mobileMenu){
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();

/*---------------------------------------- */