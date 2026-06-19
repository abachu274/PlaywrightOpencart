import{test,expect} from "@playwright/test"

import {loginpage} from "../pages/loginpage";
import { homepage } from "../pages/homepage";
import { testConfig } from "../test.config";

let config:testConfig;
let homep:homepage;
let loginp:loginpage;

test.beforeEach(async({page})=>{
    config=new testConfig();
    await page.goto(config.AppURL);
    homep=new homepage(page);
    loginp=new loginpage(page);
})

test.afterEach(async({page})=>{
    await page.waitForTimeout(2000);
    await page.close();
})

test("login to the application  @master @sanity @regression",async({})=>{

//confirm homepage

const onHomePage:boolean= await homep.isHomePageExists();
expect(onHomePage).toBeTruthy();

//naviagte to login page
await homep.clkLoginUser();


//confirm login page
const onloginpage:boolean=await loginp.confirmLoginPage();
expect(onloginpage).toBeTruthy();

//enter credentails

await loginp.enteremail(config.email);
await loginp.enterpassword(config.password);
await loginp.loginBtn();

//confirm account page

const onAccountpage:boolean=await loginp.confirmAccPage();
expect(onAccountpage).toBeTruthy();




})