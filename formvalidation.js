let form=document.getElementById("myform");
form.addEventListener("submit",(e)=>{
    e.preventDefault()

    let fname=document.getElementById("fname").value;
    console.log(fname)
    let fnametxt=document.getElementById("fnametxt");

    let mnum=document.getElementById("mnum").value;
    let mnumtxt=document.getElementById("mnumtxt");

    let email=document.getElementById("email").value;
    let emailtxt=document.getElementById("emailtxt");

    let pass=document.getElementById("pass").value;
    let passtxt=document.getElementById("passtxt");

    let cpass=document.getElementById("cpass").value;
    let cpasstxt=document.getElementById("cpasstxt");
  
    if(fname.length<3 || fname=='1'  || fname=='2' ||fname=='3' || fname=='4' || fname=='5' || fname=='6' || fname==7 || fname==8 || fname==9 || fname==0){
        // alert("Please fill the name correctly");
        fnametxt.innerHTML ="*Name can't be less than 3 letter*";
    }

    if(mnum.length!=10){
        // alert("Please fill the number correctly");
        mnumtxt.innerHTML="*Number should be of 10 digit*";
    }

    if(!email.includes("@") || !email.includes(".")){
        // alert("Please enter valid email");
        emailtxt.innerHTML="*Please fill email correctly*";
    }

    if(pass.length<8 && !pass==/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/){
        // alert("Please fill password correctly");
        pass.test(pass);
        passtxt.innerHTML="*Please fill password with atleast 1 special charactor 1 upper and lower case and 1 number*";
    }

    if(pass!==cpass){
        // alert("Incorrect Password")
        cpasstxt.innerHTML="*Please fill the same password as you fill in upper*"
    }

    else{
        alert("Form submitted successfully");
    }
})


