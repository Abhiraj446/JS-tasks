function enter(){

    let dob=document.getElementById("dob").value
    let empty=document.getElementById("empty")
    let result=document.getElementById("result")
    if(dob=="" || dob==null){
        empty.innerText="Please enter your age";
        empty.style.color="red";
        result.innerText="Invalid Input"
        result.style.color="red"
    }
    
    else{
    const b=new Date(dob)
    const time=b.getTime()

    const diff=Date.now()-time

    const age=new Date(diff)

    let old=Math.abs(age.getUTCFullYear()-1970)
    console.log(old)
    result.innerText=`You are ${old} years old.`;
    }
}