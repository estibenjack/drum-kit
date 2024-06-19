const soundBtns = document.querySelectorAll(".sound");

for (let i = 0; i<soundBtns.length; i++) {
    soundBtns[i].addEventListener("click", function() {
        const buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
})

function makeSound(key) {
    switch (key) {
        case "p":
            const pikachu = new Audio('sounds/pikachu.mp3')
            pikachu.play();
            break;
        case "b":
            const bulbasaur = new Audio('sounds/bulbasaur.mp3')
            bulbasaur.play();
            break;
        case "c":
            const charmander = new Audio('sounds/charmander.mp3')
            charmander.play();
            break;
        case "s":
            const squirtle = new Audio('sounds/squirtle.mp3')
            squirtle.play();
            break;
        
        default: console.log(buttonInnerHTML)
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}