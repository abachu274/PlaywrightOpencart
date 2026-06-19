# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginWithDatadriven.spec.ts >> Login with json data: Valid Login @dataDriven
- Location: tests\LoginWithDatadriven.spec.ts:31:5

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
  6  | import { loadJSON } from "../utils/dataProviders";
  7  | 
  8  | let config:testConfig;
  9  | let homep:homepage;
  10 | let loginp:loginpage;
  11 | 
  12 | 
  13 | const jsonpath="testdata/testdata.json";
  14 | const jsondata=loadJSON(jsonpath);
  15 | 
  16 | test.beforeEach(async({page})=>{
  17 |     config=new testConfig();
  18 |     await page.goto(config.AppURL);
  19 |     homep=new homepage(page);
  20 |     loginp=new loginpage(page);
  21 | })
  22 | 
  23 | test.afterEach(async({page})=>{
  24 |     await page.waitForTimeout(2000);
  25 |     await page.close();
  26 | })
  27 | 
  28 | 
  29 | for(const data of jsondata){
  30 | 
  31 | test(`Login with json data: ${data.TestName} @dataDriven`,async({page})=>{
  32 | 
  33 | //confirm homepage
  34 | 
  35 | const onHomePage:boolean= await homep.isHomePageExists();
  36 | expect(onHomePage).toBeTruthy();
  37 | 
  38 | //naviagte to login page
  39 | await homep.clkLoginUser();
  40 | 
  41 | 
  42 | //confirm login page
  43 | const onloginpage:boolean=await loginp.confirmLoginPage();
  44 | expect(onloginpage).toBeTruthy();
  45 | 
  46 | //enter credentails
  47 | 
  48 | await loginp.enteremail(data.Email);
  49 | await loginp.enterpassword(data.Password);
  50 | await loginp.loginBtn();
  51 | 
  52 | if(data.expected.toLowerCase()==="success"){
  53 | 
  54 | //confirm account page
  55 | 
  56 | const onAccountpage:boolean=await loginp.confirmAccPage();
> 57 | expect(onAccountpage).toBeTruthy();
     |                       ^ Error: expect(received).toBeTruthy()
  58 | 
  59 | 
  60 | }else{
  61 |     const Errormessage=await loginp.getLoginErr();
  62 | 
  63 |     expect(Errormessage).toContain(data.ErrMsg);
  64 | 
  65 |   //page.on('dialog',dialog=>dialog.accept());
  66 |   //await page.getByRole('button').click();
  67 | 
  68 | }
  69 | 
  70 | 
  71 | 
  72 | 
  73 | 
  74 | 
  75 | })}
```