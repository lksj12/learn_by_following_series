const audio = {
    title: "a",
    play () {
        console.log(this);
    }
}

audio.play();

audio.stop = function () {
    console.log("stop this", this);
}

audio.stop();

function playAudio() {
    console.log(this);
}

playAudio();

function Audio (title) {
    this.title = title;
    console.log(this);
}

const audio2 = new Audio("a");

// const audio3 = {
//     title: "audio",
//     categories: ["rock", "pop", "hiphp"],
//     displayCategories() {
//         this.categories.forEach( function(category) {
//         console.log(`title: ${this.title}, categroy: ${category}`)
//         }, {title: "audio"})
//     }
// };

// const audio3 = {
//     title: "audio",
//     categories: ["rock", "pop", "hiphp"],
//     displayCategories() {
//         this.categories.forEach( function(category) {
//         console.log(`title: ${this.title}, categroy: ${category}`)
//         }, this)
//     }
// };

// Lexical this
const audio3 = {
    title: "audio",
    categories: ["rock", "pop", "hiphp"],
    displayCategories() {
        this.categories.forEach( category => {
        console.log(`title: ${this.title}, categroy: ${category}`)
        })
    }
};


audio3.displayCategories();