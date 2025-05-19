import test from "@playwright/test";


   test.describe("Suite", () =>{
    test.beforeAll("Before All", () =>{});
        test("1", () =>{
            console.log("1");
            
        })
        test("2", () =>{
            console.log("2");
            
        })
        test("3", () => {
            console.log("3");
            
        })
        
    })
    test.afterAll("After All", () =>{
        console.log("After ALL");
        
    })
