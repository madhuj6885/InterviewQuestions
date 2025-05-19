import { test } from'@playwright/test';


[{name:"madhu", place:"hoskote"},
    {name:"mithun", place:"kr puram"},
    {name:"sumanth", place:"bangalore"}
 ].forEach(({name, place}) =>{
    test(`The test name is ${name}`, async () =>{
        console.log(`${place}`);
    })
 })

// test.describe("Group -1", () =>{

//     test.describe.configure({mode:"default"});

//     test("1", () =>{
//         console.log("1")
//     })

    
//     test("2", () =>{
//         console.log("2")
//     })

    
//     test("3", () =>{
//         console.log("3")
//     })
// })


// test.describe("Group -2", () =>{

//     test.describe.configure({mode:"parallel"});

//     test("4", () =>{
//         console.log("4")
//     })

    
//     test("5", () =>{
//         console.log("5")
//     })

    
//     test("6", () =>{
//         console.log("6")
//     })
// })