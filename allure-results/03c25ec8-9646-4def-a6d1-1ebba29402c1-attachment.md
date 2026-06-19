# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> login to the application
- Location: tests\Login.spec.ts:23:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Test source

```ts
  1  | import{test,expect} from "@playwright/test"
  2  | 
  3  | import {loginpage} from "../pages/loginpage";
  4  | import { homepage } from "../pages/homepage";
  5  | import { testConfig } from "../test.config";
  6  | 
  7  | let config:testConfig;
  8  | let homep:homepage;
  9  | let loginp:loginpage;
  10 | 
  11 | test.beforeEach(async({page})=>{
  12 |     config=new testConfig();
  13 |     await page.goto(config.AppURL);
  14 |     homep=new homepage(page);
  15 |     loginp=new loginpage(page);
  16 | })
  17 | 
  18 | test.afterEach(async({page})=>{
  19 |     await page.waitForTimeout(2000);
  20 |     await page.close();
  21 | })
  22 | 
  23 | test("login to the application",async({})=>{
  24 | 
  25 | //confirm homepage
  26 | 
  27 | const onHomePage:boolean= await homep.isHomePageExists();
  28 | expect(onHomePage).toBeTruthy();
  29 | 
  30 | //naviagte to login page
  31 | await homep.clkLoginUser();
  32 | 
  33 | 
  34 | //confirm login page
  35 | const onloginpage:boolean=await loginp.confirmLoginPage();
  36 | expect(onloginpage).toBeTruthy();
  37 | 
  38 | //enter credentails
  39 | 
  40 | await loginp.enteremail(config.email);
  41 | await loginp.enterpassword(config.password);
  42 | await loginp.loginBtn();
  43 | 
  44 | //confirm account page
  45 | 
  46 | const onAccountpage:boolean=await loginp.confirmAccPage();
> 47 | expect(onAccountpage).toBeTruthy();
     |                       ^ Error: expect(received).toBeTruthy()
  48 | 
  49 | 
  50 | 
  51 | 
  52 | })
```