let cardFaces = ["image03.jpg", "image04.jpg", "image05.jpg", "image07.jpg", "image09.jpg", "image012.jpg", "image013.jpg", "image014.jpg", "image015.jpg", "image020.jpg", "image024.jpg", "image028.jpg"];

let cardBack = "0.jpg";
                 
function shuffle(cards) {
    let duplicate = cardFaces.concat(cardFaces);
    let shuffled = [];
    while (duplicate.length) {
        let randomIndex = Math.floor(Math.random() * duplicate.length);
        shuffled.push(duplicate[randomIndex]);
        duplicate.splice(randomIndex, 1);
    }
    return shuffled
}

function start() {
    let images = shuffle(cardFaces).map(face => {
        let flipped = false
        let img = document.createElement('img')
        img.src = cardBack;
        img.classList.add('object-cover','w-full','h-24','rounded-md','shadow-md','md:h-32','lg:h-44')
        img.addEventListener('click', () => {
            if (flipped) return
            if (selected.length === 2) return
            img.src = face
            flipped = true
            img.src = face
            flipped = true
            setTimeout(() => {
                flipped = false
            }, 1000)
            validate(img)
        })
        return img
    })
    document.querySelector('.grid').append(...images)
}

let selected = []

function validate(img) {
    if (selected[0] === img) return;
    selected.push(img);
    if (selected.length !== 2) return;
    if (selected[0].src === selected[1].src) {
        setTimeout(() => {
            selected.forEach(img => img.classList.add('opacity-50','pointer-events-none'));
            selected = [];
        }, 1000)
    } else {
        setTimeout(() => {
            selected.forEach(img => img.src = cardBack);
            selected = [];
        }, 1000);
    };
};

start()