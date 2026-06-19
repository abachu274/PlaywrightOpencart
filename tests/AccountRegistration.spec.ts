import { homepage } from "../pages/homepage"
import { registerPage } from "../pages/registerpage"
import { test, expect } from "@playwright/test"
import { RandomDataUtil } from "../utils/randomDataGenerator"
import { testConfig } from "../test.config"


let config: testConfig;
let homep: homepage;
let registerp: registerPage;

test.beforeEach(async ({ page }) => {
    config = new testConfig();
    await page.goto(config.AppURL);
    homep = new homepage(page);
    registerp = new registerPage(page);
})

test.afterEach(async ({ page }) => {
    await page.waitForTimeout(2000);
    page.close();

})

test("Register to OpenCart @master @sanity @regression",async({})=>{


    //go to my account and click register

    await homep.isHomePageExists();
    await homep.clkRegisterUser();

    //fill the registration form and submit

    await registerp.confirmRegistrationPage();
    await registerp.setFirstName(RandomDataUtil.getFirstName());
    await registerp.setLastName(RandomDataUtil.getLastName());
    await registerp.setEmail(RandomDataUtil.getEmail());
    await registerp.setpassword(config.password);
    await registerp.agreeCheckBox();
    await registerp.clickContinue();

    //validate the registration success message
    const successMsg = await registerp.validateRegistrationSucessMsg();
    expect(successMsg).toContain("Your Account Has Been Created!");














})
