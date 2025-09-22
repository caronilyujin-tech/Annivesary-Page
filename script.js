window.onload=function(){
document.addEventListener("mousemove", function(e) {

    let heart = document.createElement('span');
    let x = e.pageX;
    let y = e.pageY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    let size = Math.random() * 80;
    heart.style.width = 20 + size + 'px';
    heart.style.height = 20 + size + 'px';
    let transformValue = Math.random() * 360;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';
    heart.style.position = 'absolute';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = 9999; // Ensure hearts are on top
    heart.style.opacity = 1;
    heart.style.animation = 'fadeInout 1s linear infinite';
    heart.style.filter = 'drop-shadow(0 0 15px rgba(0, 0, 0, 0.5))';
    heart.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/previews/030/809/047/original/heart-illustration-no-background-png.png')";
    heart.style.backgroundSize = 'cover';
    heart.style.borderRadius = '50%';
    heart.classList.add('heart-fade');
    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 500);
});
};
