import{test,expect} from "@playwright/test"

import {loginpage} from "../pages/loginpage";
import { homepage } from "../pages/homepage";
import { testConfig } from "../test.config";
import { loadJSON } from "../utils/dataProviders";

let config:testConfig;
let homep:homepage;
let loginp:loginpage;


const jsonpath="testdata/testdata.json";
const jsondata=loadJSON(jsonpath);

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


for(const data of jsondata){

test(`Login with json data: ${data.TestName} @dataDriven`,async({page})=>{

//confirm homepage

const onHomePage:boolean= await homep.isHomePageExists();
expect(onHomePage).toBeTruthy();

//naviagte to login page
await homep.clkLoginUser();


//confirm login page
const onloginpage:boolean=await loginp.confirmLoginPage();
expect(onloginpage).toBeTruthy();

//enter credentails

await loginp.enteremail(data.Email);
await loginp.enterpassword(data.Password);
await loginp.loginBtn();

if(data.expected.toLowerCase()==="success"){

//confirm account page

const onAccountpage:boolean=await loginp.confirmAccPage();
expect(onAccountpage).toBeTruthy();


}else{
    const Errormessage=await loginp.getLoginErr();

    expect(Errormessage).toContain(data.ErrMsg);

  //page.on('dialog',dialog=>dialog.accept());
  //await page.getByRole('button').click();

}






})}