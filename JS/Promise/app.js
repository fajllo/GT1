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
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const rand = Math.random();
            if(rand < 0.5){
                resolve();
            }
            else{
                reject();
            }
    
        },100)
    
    
    })

}

getYou().then(() => {
    console.log("You got somthing");
}).catch(() => {
    console.log("You got NOTHING");
})

const fakeRequest = (url) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            const rand = Math.random();
            if(rand < 0.7){
                resolve();
            }
            else{
                reject();
            }

        },3000)

    })
}
fakeRequest().then(() => {
    console.log("request ok")
}).catch(()=>{
    console.log("error")
})