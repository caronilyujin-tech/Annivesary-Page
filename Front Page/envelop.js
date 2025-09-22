$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

})


let FallingHeartsContainer = document.querySelector(".falling-hearts-container");

function hearts() {
    let create = document.createElement("div");
    create.classList.add("falling-heart");
    create.innerHTML = "❤️";
    create.style.left = Math.random() * 100 + "vw";
    create.style.animationDuration = Math.random() * 2 + 2 + "s";
    FallingHeartsContainer.appendChild(create);
    setTimeout(() => {
        create.remove();
    }, 3000);
}
setInterval(hearts, 300);
hearts();