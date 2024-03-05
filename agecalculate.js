console.log("working")

function show(){
    let dom=Number(document.getElementById("months").value);
    let a=dom*30;
    console.log(a)

    let b=Number(document.getElementById("dates").value);
    console.log(b)

    let doy=Number(document.getElementById("years").value);
    let c=(doy%2000)*365
    console.log(c)

    let dob=a+b+c
    console.log(dob)

    let present=new Date();
    console.log(present)

    let x= present.getDate();
    console.log(x);

    let pmonth= present.getMonth();
    let y=(1+pmonth)*30
    console.log(y);

    let pyear= present.getFullYear();
    let z=(pyear%2000)*365
    console.log(z);

    let pre=x+y+z;
    console.log(pre)

    let result=(pre-dob)/365;
    console.log(result)

    document.getElementById("age").value=result;

}