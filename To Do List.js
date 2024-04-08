let in1=document.getElementById("input1").value
let in2=document.getElementById("input2").value
let container=document.querySelector(".container-fluid")
function show(){

    const div=document.createElement("div")
    div.setAttribute("class","row mt-5")

    const innerdiv=document.createElement("div")
    innerdiv.setAttribute("class","box")

    div.append(innerdiv)

    const h1=document.createElement("h1")
    h1.innerHTML=in1

    innerdiv.append(h1)

    const p=document.createElement("p")
    p.innerHTML=in2

    innerdiv.append(p)

    
    // let in1=document.getElementById("input1").value
    // let in2=document.getElementById("input2").value

    // let h2=document.createElement("h1");
    // h2.innerHTML=in1;

    // let p=document.createElement("p")
    // p.innerHTML=in2

    // let box=document.getElementsByClassName("box")
    // document.body.append(h2);
    // document.body.append(p);
}

function del(){
    document.getElementsByClassName("btn").value=" " ;
}