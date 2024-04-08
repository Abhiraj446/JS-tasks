let title=document.getElementById("title")
let description=document.getElementById("description")
// let btn=document.getElementById("btn")
let container=document.querySelector(".container")
let form=document.querySelector("form")

// btn.addEventListener("mouseover",()=>{
//     btn.style.transform="scale(1.05)"
// })
// btn.addEventListener("mouseout",()=>{
//     btn.style.transform=""
// })

// addEventListener("contextmenu",(e)=>{
//     e.preventDefault()
// })

const taskadd=[];

function showAllTask(){

    taskadd.forEach((value,index)=>{ 
    let div=document.createElement("div") 
    div.setAttribute("class","task") 

    let innerdiv=document.createElement("div") 
    div.append(innerdiv)  

    let h2=document.createElement("h2")
    h2.innerText=value.title
    innerdiv.append(h2)

    let p=document.createElement("p")
    p.innerText=value.description  
    innerdiv.append(p) 
    
    let delbtn=document.createElement("button")
    delbtn.setAttribute("class","Delete")
    delbtn.innerText="-"
    div.append(delbtn)

    container.append(div)

    })

}

function removeTask(){
    taskadd.forEach(()=>{
        const div=document.querySelector(".taskadd")
        div.remove();
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    removeTask();

    taskadd.push({
        title : title.value,
        description : description.value
    })

    console.log(taskadd)
    showAllTask();
})