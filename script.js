const colors = ["Lightcoral", "Salmon", "Lightsalmon", "Pink", "Lightpink", "Hotpink", "Deeppink", "Violet","Mediumvioletred", "Red", "Firebrick", "Darkred", "Orange", "Darkorange", "Yellow", "Lightyellow", "Lemonchiffon", "Greenyellow", "Lawngreen", "Lime", "Limegren", ""]

const pallete = document.getElementById("pallete");
const selected = document.getElementById("selected");
const grill = document.getElementById("grill");
const deleteButton = document.getElementById("delete-everything");
const paintBackground = document.getElementById("paint-background");
const pixels = [];

// Creating the grill
const createGrill = (rows, columns) => {
    for(let i = 0; i < rows; i++){
        const row = document.createElement("row")
        row.classList.add("row")

        for(let i = 0; i < columns; i++){
            const pixel = document.createElement("div")
            pixel.classList.add("pixel");
            pixel.style.backgroundColor = 'White';
            row.appendChild(pixel);
            pixels.push(pixel)
        }
        grill.appendChild(row)
    }
}

// Creating the color Pallete
const createPallete = () => {
    for (let color of colors){
        const colorPallete = document.createElement("div");
        colorPallete.classList.add("color");
        colorPallete.style.backgroundColor = color;

        colorPallete.onclick = () => {
            selectColor(color)
        }

        pallete.appendChild(colorPallete);
    }
}

// Color selected
const selectColor = (color) => {
    actualColor = color;
    selected.style.backgroundColor = actualColor;
}

// Grill

grill.onclick = () => {
    if (event.target.classList.contains("pixel")){
        event.target.style.backgroundColor = actualColor;
    }
}

grill.onmousemove = () => {
    if (!mouseDown)
        return;

    if (event.target.classList.contains("pixel")) {
        event.target.style.backgroundColor = actualColor;
    }
}

document.onmousedown = () => {
    mouseDown = true;
}
  
  document.onmouseup = () => {
    mouseDown = false;
}

// Buttons

deleteButton.onclick = () => {
    for(let pixel of pixels){
        pixel.style.backgroundColor = "White";
    }
}

paintBackground.onclick = () => {
    for(let pixel of pixels){
        if (pixel.style.backgroundColor === "white"){
            pixel.style.backgroundColor = actualColor;
        }
    }
}

createGrill(100,100);
createPallete();

