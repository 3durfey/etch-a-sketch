
//container and each box in container
let container = document.getElementById("etch_container");
let boxes = document.getElementsByClassName("box");
let rainBowSwitch = document.getElementById("rainbowSwitch");

function newEtchASketch()
{
    //set NumberOfBoxes of container
    let containerWidthAndHeight = document.getElementById("containerNumberOfBoxes").value;
    container.style.height = containerWidthAndHeight + "px";
    container.style.width = containerWidthAndHeight + "px";
    //set number of boxes
    let NumberOfBoxes = document.getElementById("numberOfBoxes").value;
    document.getElementById("txtInput").value = NumberOfBoxes;
    document.getElementById("numberOfBoxes").value = NumberOfBoxes;
    document.getElementById("etch_container").style.gridTemplateColumns = `repeat(${NumberOfBoxes}, 1fr)`;
    //reset colors
    reset();
    //add any needed boxes
    let htmlElements = "";
    for(let x = boxes.length; x < Math.pow(NumberOfBoxes, 2); x++)
    {
        htmlElements += ('<div id="boxID" class="box"></div>');
    }
    container.innerHTML += htmlElements;
    //delete unwanted boxes
    while(boxes.length > Math.pow(NumberOfBoxes, 2))
    {
        boxes[0].parentNode.removeChild(boxes[0]);
    }
    //add properties to each element
    for(let x = 0; x < boxes.length; x++)
    {
        rainBowSwitch.checked ? changeColor(boxes[x], `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`) : changeColor(boxes[x], "black");
        boxes[x].style.outlineStyle = (document.getElementById("gridLines").checked ? 'solid' : 'none');
        boxes[x].style.setProperty('width', containerWidthAndHeight/NumberOfBoxes + 'px');
        boxes[x].style.setProperty('height', containerWidthAndHeight/NumberOfBoxes + 'px');
        boxes[x].style.borderRadius = document.getElementById("radiusBorder").value + 'px';
    }
    //determine which mouse mode to apply to each box
    let mouse = document.getElementById("buttonDown").checked ? 1 : 0;
    function changeColor(box, color)
    {
        const colorChangeEvent = mouseEvent => mouseEvent.target.style.backgroundColor = color;
        box.addEventListener("mousedown", colorChangeEvent);
        box.addEventListener("mouseover", mouseEvent => {
            if (mouseEvent.buttons == mouse) colorChangeEvent(mouseEvent);
            });
    }
}
//random number for colors
const randomNumber = () => Math.floor(Math.random() * (255));
//change color from inputs
const changeColor = (red, blue, green) => {
    [].forEach.call(boxes, function(box) {box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`})};
//reset etch-a-sketch
function reset()
{    
    //reset color bars
    let red = document.getElementById("red").value = 255;
    let blue = document.getElementById("blue").value = 192;
    let green = document.getElementById("green").value = 203;
    //reset each box
    [].forEach.call(boxes, function(box) {box.style.backgroundColor = 'pink',
    box.style.borderRadius = document.getElementById("radiusBorder").value + 'px';});
}



