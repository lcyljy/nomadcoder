const images = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(document.body.style.backgroundImage)
const randomImage = images[Math.floor(Math.random() * images.length)]

// document.body.style.backgroundImage = `url(./src/img/${randomImage}.jpg)`
const bgImage = document.createElement("img");
bgImage.src = `./src/img/${randomImage}.jpg`

document.body.appendChild(bgImage)

// 이미지 구현은 했음. 해당 이미지의 투명도 조절 필요.