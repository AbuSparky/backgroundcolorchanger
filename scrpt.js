function change(){
    const ch = document.getElementById("container");
    const colorname = document.getElementById("namecolor");
    let colorcode = '#'+ Math.floor(Math.random()*16777215).toString(16);
    ch.style.backgroundColor = colorcode;
    colorname.textContent= `Color is ${colorcode}`;
    colorname.style.color = colorcode;
    
};