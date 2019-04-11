function addBorder(picture: string[]): string[] {

    var length = picture[0].length;
    var border = "**";

    for (let i = 0; i < length; i++) {
        border += "*";
    }

    for (let i = 0; i < picture.length; i++) {
        picture[i] = "*" + picture[i] + "*";
    }

    picture.unshift(border);
    picture.push(border);

    return picture;
}

console.log(addBorder(["abc", "ded"]));