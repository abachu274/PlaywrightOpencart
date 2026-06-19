# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Register to OpenCart
- Location: tests\AccountRegistration.spec.ts:8:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Test source

```ts
  1  | import {homepage} from "../pages/homepage"
  2  | import {registerPage} from "../pages/registerpage"
  3  | import {test,expect} from "@playwright/test"
  4  | import { RandomDataUtil } from "../utils/randomDataGenerator" 
  5  | import { testConfig } from "../test.config"  
  6  | 
  7  | 
  8  | test("Register to OpenCart",async({page})=>{
  9  | 
  10 | 
  11 | 
  12 |     //goto Opencart url
  13 |     const config = new testConfig();
> 14 |     await page.goto(config.AppURL);
     |                ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  15 | 
  16 |     //go to my account and click register
  17 | 
  18 |     const homep = new homepage(page);
  19 |     homep.isHomePageExists();
  20 |     await homep.clkAccount();
  21 |     await homep.clkRegisterUser();
  22 | 
  23 |     //fill the registration form and submit
  24 |     const registerp = new registerPage(page);
  25 |     registerp.confirmRegistrationPage();
  26 |     registerp.setFirstName(RandomDataUtil.getFirstName());
  27 |     registerp.setLastName(RandomDataUtil.getLastName());
  28 |     registerp.setEmail(RandomDataUtil.getEmail());
  29 |     registerp.setpassword(config.password);
  30 |     registerp.agreeCheckBox();
  31 |     await registerp.clickContinue();
  32 | 
  33 |     //validate the registration success message
  34 |     const successMsg = await registerp.validateRegistrationSucessMsg();
  35 |     expect(successMsg).toContain("Your Account Has Been Created!");
  36 | 
  37 |     await page.waitForTimeout(2000);
  38 |     
  39 | 
  40 | 
  41 | 
  42 | 
  43 | 
  44 | 
  45 | 
  46 |     
  47 | 
  48 | 
  49 | 
  50 | })
  51 | 
```