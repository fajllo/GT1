// const getYou = new Promise((resolve,reject) => {
//     const rand = Math.random();
//     if(rand < 0.5){
//         resolve();
//     }
//     else{
//         reject();
//     }

// })
// getYou.then(()=> {
//     console.log("You got somthing");
// })
// getYou.catch(()=> {
//     console.log("You got NOTHING");
// })
const getYou = () => {
    new Promise((resolve,reject) => {
        setTimeout(()=>{
            const rand = Math.random();
            if(rand < 0.5){
                resolve();
            }
            else{
                reject();
            }
    
        },5000)
    
    
    })

}

getYou().then(() => {
    console.log("You got somthing");
}).catch(() => {
    console.log("You got NOTHING");
})