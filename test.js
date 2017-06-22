var promise = new Promise(function(resolve, reject){
    reject();
});
 
promise.then(function(){
            console.log(1);
        })
        .then(function(){
            console.log(2);
        }, function(){
            console.log('Error!')
        })
        .then(function(){
            console.log(3);
        },function(){
            console.log(5);
        });


let array = ['1', '2','3'];
setTimeout(function() {
    for(let x of array){
    console.log(x);
};
}, 3000);
//this is test
//this is test2
//this is test03
//this is test04
//this is test06
//this is test07
