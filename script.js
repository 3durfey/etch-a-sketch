//add all divs
let htmlElements = "";
let container = document.getElementById("etch_container");
newEtchSize(16);
function newEtchSize(size)
{
    let subElements = document.getElementsByClassName("box");
    for(let x = subElements.length; x < Math.pow(size, 2); x++)
    {
        htmlElements += ('<div id="boxID" class="box"></div>');
    }
    container.innerHTML = htmlElements;
    while(subElements.length > Math.pow(size, 2))
    {
        subElements[0].parentNode.removeChild(subElements[0]);
    }
    //add hover function
    console.log(subElements.length);
    for(let x = 0; x < subElements.length; x++)
    {
        subElements[x].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
        })
        subElements[x].style.setProperty('width', 500/size + 'px');
        subElements[x].style.setProperty('height', 500/size + 'px');

    }
    const style = getComputedStyle(subElements[0]);
    console.log("test value " + 500/size);
    console.log("width " + style.width);
    console.log("size " + size);
    console.log("height " + style.height);
}




//add new size to etch-a-sketch
let slider = document.getElementById("myRange");
let sliderValue = document.getElementById("sliderValue");
sliderValue.innerHTML = slider.value;

slider.oninput = function () 
{
    sliderValue.innerHTML = this.value;
    newEtchSize(this.value);
    document.getElementById("etch_container").style.gridTemplateColumns = `repeat(${this.value}, 1fr)`;
}

