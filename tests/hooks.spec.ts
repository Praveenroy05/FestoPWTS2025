// Hooks

// beforeAll - Excuted once before executing any of the test cases
// beforeEach - Executed once before executing each and every test cases
// afterEach - Executed once after executing each and every test cases
// afterAll - Excuted once after executing all the test cases

import {test} from '@playwright/test'



test.afterEach(async ()=>{
    console.log("After Each Test Cases");
    })

test.afterAll(async ()=>{
    console.log("After All Test Cases");
})


test("Test1", async ()=>{
    console.log("Inside Test1");
})

test("Test2", async ()=>{
    console.log("Inside Test2");
})

test("Test3", async ()=>{
    console.log("Inside Test3");
})

test("Test4", async ()=>{
    console.log("Inside Test4");
})

test.beforeAll(async ()=>{
    console.log("Before All Test Cases");
})

test.beforeEach(async ()=>{
    console.log("Before Each Test Cases");
})