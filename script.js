//add all divs
let container = document.getElementById("etch_container");
let htmlElements = "";
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
    for(let x = 0; x < subElements.length; x++)
    {
        subElements[x].addEventListener("mouseover", (event) => {event.target.style.backgroundColor = "black";})
        subElements[x].style.setProperty('width', 500/size + 'px');
        subElements[x].style.setProperty('height', 500/size + 'px');
    }
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
    console.log("fail " + input.length);
    document.getElementById("alert").innerHTML = "   ";
    document.getElementById("txtInput").value = input;
    document.getElementById("myRange").value = input;
    document.getElementById("etch_container").style.gridTemplateColumns = `repeat(${input}, 1fr)`;
    newEtchSize(input);
}
function reset()
{    
    let subElements = document.getElementsByClassName("box");
    for(let x = 0; x < subElements.length; x++)
    {
        subElements[x].style.backgroundColor = 'pink';
    }
}

function changeRadius(value)
{
    let boxes = document.getElementsByClassName("box");
    console.log(boxes.length);
    console.log(value);
    for(let x = 0; x < boxes.length; x++)
    {
        boxes[x].style.setProperty('border-radius', value + 'px');
    }
}
