
//add all divs
let container = document.getElementById("etch_container");
let htmlElements = "";
let mouse = 0;
let containerWidthAndHeight = 500;
newEtchSize(16);

function newEtchSize(size)
{
    //reset colors
    reset();
    //add any needed boxes
    let subElements = document.getElementsByClassName("box");
    for(let x = subElements.length; x < Math.pow(size, 2); x++)
    {
        htmlElements += ('<div id="boxID" class="box"></div>');
    }
    container.innerHTML += htmlElements;
    htmlElements = "";
    //delete unwanted elements
    while(subElements.length > Math.pow(size, 2))
    {
        subElements[0].parentNode.removeChild(subElements[0]);
    }
    //add hover function
    let rainBowSwitch = document.getElementById("rainbowSwitch");
    for(let x = 0; x < subElements.length; x++)
    {
        if(rainBowSwitch.checked == true)
        {
            changeColor(subElements[x], `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`);
        }
        else
        {
            changeColor(subElements[x], "black");
        }
        subElements[x].style.setProperty('width', containerWidthAndHeight/size + 'px');
        subElements[x].style.setProperty('height', containerWidthAndHeight/size + 'px');
    }

    function changeColor(boxElement, color)
    {
        const colorChangeEvent = event => event.target.style.backgroundColor = color;
        boxElement.addEventListener("mousedown", colorChangeEvent);
        
        boxElement.addEventListener("mouseover", event => {
            if (event.buttons == mouse) colorChangeEvent(event);
            });
    }
}

function mouseDown()
{
    let mouseStatus = document.getElementById("buttonDown");
    mouse = mouseStatus.checked ? 1 : 0;
}
function randomNumber()
{
    return Math.floor(Math.random() * (255));
}

function changeSize(input)
{
    if(parseInt(input.length) === 0 || input > 100 || parseInt(input) === 0)
    {
        let alert = document.getElementById("alert");
        alert.innerHTML = "Invalid Entry. Must be between 1 and 100";
        $("#alert").hide();
        return;
    }
    document.getElementById("alert").innerHTML = "   ";
    document.getElementById("txtInput").value = input;
    document.getElementById("myRange").value = input;
    document.getElementById("etch_container").style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    newEtchSize(input);
}
function reset()
{    
    let subElements = document.getElementsByClassName("box");
    let red = document.getElementById("red");
    let blue = document.getElementById("blue");
    let green = document.getElementById("green");
    red.value = 255;
    blue.value = 192;
    green.value = 203;
    for(let x = 0; x < subElements.length; x++)
    {
        subElements[x].style.backgroundColor = 'pink';
    }
    RainbowOnOff()
}

function changeRadius(value)
{
    let boxes = document.getElementsByClassName("box");
    for(let x = 0; x < boxes.length; x++)
    {
        boxes[x].style.borderRadius = value + 'px';
    }
}


function changeColor(red, blue, green)
{
    let boxes = document.getElementsByClassName("box");
    for(let x = 0; x < boxes.length; x++)
    {
        boxes[x].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}
function RainbowOnOff()
{
    let rainBowSwitch = document.getElementById("rainbowSwitch");
    let subElements = document.getElementsByClassName("box");
    for(let x = 0; x < subElements.length; x++)
    {
        if(rainBowSwitch.checked == true)
        {
            changeColor(subElements[x], `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`);
        }
        else
        {
            changeColor(subElements[x], "black");
        }
    }

    function changeColor(boxElement, color)
    {
        const colorChangeEvent = event => event.target.style.backgroundColor = color;
        boxElement.addEventListener("mousedown", colorChangeEvent);

        boxElement.addEventListener("mouseover", event => {
            if (event.buttons == mouse) colorChangeEvent(event);
            });
    }
}

function changeContainerSize(size)
{
    containerWidthAndHeight = size;
    document.getElementById("etch_container").style.height = size + "px";
    document.getElementById("etch_container").style.width = size + "px";
    newEtchSize(document.getElementById("myRange").value);

}

function toggleGridLines()
{
    let gridLines = document.getElementById("gridLines");
    let subElements = document.getElementsByClassName("box");
    for(let x = 0; x < subElements.length; x++)
    {
        if(gridLines.checked == true)
        {
            subElements[x].style.outlineStyle = 'solid';
        }
        else
        {
            subElements[x].style.outlineStyle = 'none';
        }
    }
    newEtchSize(document.getElementById("myRange").value);
}