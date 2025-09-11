const img = ["1.jpg", "2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];
const alt = ["1", "2", "3","4","5","6","7","8","9"];
var count = 1;
function increment() {
    if (count < 9) {
        count += 1;
        modify_image();
    }
}
function decrement() {
    if (count > 1) {
        count -= 1;
        modify_image();
    }

}
function modify_image() {
    const image = document.getElementById("image");
    image.src = img[count - 1];
    image.alt = alt[count - 1];
}

