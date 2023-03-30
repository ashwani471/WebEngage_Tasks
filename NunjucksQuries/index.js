async function printEven(api){
    const response =await fetch(api);
    const dataRes = await response.json();
    return dataRes; 
}

document.getElementById('takeId').addEventListener("blur",(e)=>{
   let id = Number(e.target.value);  
   const data = printEven("https://jsonplaceholder.typicode.com/users");
   data.then((elem)=>{
     if(id%2===0){
        elem.forEach(element => {
            if(element.id === id){
                console.log(`${element.id} - ${element.name} ,${element.username}, ${element.email} `);
            }
        });
     }else{
        console.log('i am odd');
     }
     elem.forEach(obj=>{
        Object.entries(obj.address).forEach(([keys,value])=>
        {
            if(keys === 'geo'){
                // console.log(value);
                Object.entries(value).forEach(([key,val])=>{
                    console.log(`id : ${obj.id} - ${keys}- ${key} - ${val}`);
                })
            }else{
            console.log(`id : ${obj.id} -${keys} - ${value}`);
            }
        });        
     })

     elem.forEach(obj=>{
        var my_email = obj.email;
        var index=my_email.indexOf(".");
        var my_slice=my_email.slice((index+1),my_email.length);
        if(my_slice === 'biz'){
            console.log(`${obj.name}=${obj.email}`)
        }
     })

     elem.forEach(obj=>{
        if(obj.address.city === "Aliyaview" || obj.address.city === "Howemouth" || obj.address.city === 'Gwenborough'){
            console.log(`id:${obj.id}=${obj.address.city} is:-${obj.address.zipcode} and lat:${obj.address.geo.lat},lng:${obj.address.geo.lng}`);
        }
     })

     elem.forEach(obj=>{
        var myPharse = obj.company.catchPhrase;
        let count = 0;
        for (var i = 0, len = myPharse.length; i < len; i++) {
            if (myPharse[i] !== ' ')
                count++;
        }
        let newPharse = myPharse.length-count;
        if((myPharse.length- newPharse)<=15){
            console.log(`id:${obj.id}-${obj.company.catchPhrase}`)
        }
     })
   });
});


