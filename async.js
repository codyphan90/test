let addPr = (a,b) =>{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        if(typeof a != "number" || typeof b != "number") return reject(new Error('Tham so fai la so'));
        resolve(a+b);
     },2000);
});
}

let add = async () =>{
    let result = await addPr(4,5);
    console.log(result);
}

add();