const {test, request, expect} = require('@playwright/test')

const payload = {
    name: "morpheus",
    job: "zion resident"
}

test("@API @smoke Get request API automation", async()=>{
    const apiContext = await request.newContext()
    const response = await apiContext.get("https://reqres.in/api/users?page=2")
    console.log(await response.json());
    console.log(response.status());
    await expect(response.ok()).toBeTruthy();
})

test("PUT request API automation", {tag: '@API'}, async()=>{
    const apiContext = await request.newContext()
    const Response = await apiContext.get("https://reqres.in/api/users/2")
    console.log(await Response.json());
    const response = await apiContext.put("https://reqres.in/api/users/2", {
        data: payload
    })
    console.log(await response.json());
    console.log(response.status());
    await expect(response.ok()).toBeTruthy();
    const getResponse = await apiContext.get("https://reqres.in/api/users/2")
    console.log(await getResponse.json());
})

test("Delete request API automation", {tag:'@API'}, async()=>{
    const apiContext = await request.newContext()
    const response = await apiContext.delete("https://reqres.in/api/users/2")
    console.log(await response.status())
    expect(response.ok()).toBeTruthy();
})