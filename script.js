//add all divs
let container = document.getElementById("etch_container");
let htmlElements = "";
newEtchSize(16);
function newEtchSize(size)
{
    //add elements
    reset();
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
    console.log("html " + htmlElements.length);
    console.log("element length " +subElements.length);
    //add hover function
    for(let x = 0; x < subElements.length; x++)
    {
        subElements[x].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        })
        subElements[x].style.setProperty('width', 500/size + 'px');
        subElements[x].style.setProperty('height', 500/size + 'px');
    }
}


function changeSize(input)
{
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
