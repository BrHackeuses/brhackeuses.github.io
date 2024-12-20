var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);



/*Hyperlinks*/
const URL_DISCORD = "https://discord.gg/s6Y3DgZkH2";


var dicoUrl = {
  discord: URL_DISCORD, 
};

const openNewTabWith = (site) => {
  console.log("Opening " + site);
  window.open(dicoUrl[site], "_blank");
};




//Cursor Background Tracking
const tokenBgCursor = document.querySelector('.blob-cursor__bg');
document.addEventListener('mousemove', e => {
    tokenBgCursor.setAttribute("style", "top: " + (e.pageY - 100) + "px; left: " + (e.pageX - 100) + "px;")
});
const triggerCursor = document.querySelector('.show-cursor--bg');
const cursorBg = document.querySelector('.blob-cursor__bg');
triggerCursor.addEventListener('mouseenter', () => {
    cursorBg.classList.remove('hide');
});
triggerCursor.addEventListener('mouseleave', () => {
    cursorBg.classList.add('hide');
});