const myButton = document.querySelector("button");
const image = document.querySelector("img");
const img = ["img/pic1.jpeg", "img/pic2.jpeg", "img/pic3.jpeg", "img/pic4.jpeg"];

myButton.addEventListener("click", changeImage)

function changeImage() {
    console.log(image);

    let randomIndex = Math.floor(Math.random() * img.length )

    image.src = img[randomIndex]
}