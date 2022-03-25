// given a rectangular matrix of characters, add a border of asterisks(*) to it

function addBorder(picture) {
    let newPicture = [];
    let length = picture[0].length + 2;
    let asterisk = "*".repeat(length);

    newPicture.push(asterisk);
    for (let i = 0; i < picture.length; i++) {
        newPicture.push("*" + picture[i] + "*");
    }
    newPicture.push(asterisk);
    return newPicture;
}