function enter(){
    
    if(dob=="" || dob==null){
        document.getElementById("empty").innerText="Please enter your age";
        document.getElementById("empty").style.color="red";
        document.getElementById("result").innerText="Invalid Input"
        document.getElementById("result").style.color="red"
    }

    else{
        let dob=document.getElementById("dob");
        const birthdate=new Date(dob.value);
        const currentdate=new Date();

        //calculate difference in millisecond between currentdate and birthdate  
        const diff=currentdate-birthdate;

        const years=Math.floor(diff/(1000*60*60*24*365));

        const months=Math.floor((diff%(1000*60*60*24*365))/(1000*60*60*24*30));

        const days=Math.floor((diff%(1000*60*60*24*30))/(1000*60*60*24));

        document.getElementById("result").innerHTML=`You are ${years}years , ${months}months , ${days}days old`;
    }
}