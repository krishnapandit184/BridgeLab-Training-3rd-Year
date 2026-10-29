function generateHexColor(){
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let color="#";
    for(let i=0;i<6;i++){
        let num=Math.floor(Math.random()*16);
        color+=hex[num];
    }
    console.log(color);
    document.body.style.background=color;
}

generateHexColor();