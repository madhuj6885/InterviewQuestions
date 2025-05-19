async function addition(){
    let result = await setTimeout(() =>{
        return "Hello world!"
    },1000)

    return result;
}

addition().then((result) => console.log(result));