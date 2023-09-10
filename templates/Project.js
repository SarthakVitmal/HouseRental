
// const textElement = document.getElementById("text");
// const textList = ["Here You Can.....","1.Buy","2.Sell","3.Rent"];
// let textIndex = 0;
// let charIndex = 0;

// function typeText() {
//     if (charIndex < textList[textIndex].length) {
//         textElement.innerHTML += textList[textIndex].charAt(charIndex);
//         charIndex++;
//         setTimeout(typeText, 50); // Adjust typing speed (milliseconds)
//     } else {
//         setTimeout(eraseText, 2000); // Display text for 2 seconds before erasing
//     }
// }

// function eraseText() {
//     if (charIndex > 0) {
//         textElement.innerHTML = textElement.innerHTML.slice(0, -1);
//         charIndex--;
//         setTimeout(eraseText, 30); // Adjust erasing speed (milliseconds)
//     } else {
//         textIndex = (textIndex + 1) % textList.length;
//         setTimeout(typeText, 500); // Pause before typing the next line
//     }
// }

// // Start the animation
// typeText();

document.querySelector('.contactusbutton').addEventListener('click', function (e) {
    e.preventDefault();

    const getInTouch = document.querySelector('#get-in-touch');
    const offsetTop = getInTouch.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});






