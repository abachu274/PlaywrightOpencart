import {Page,Locator} from"@playwright/test"

export class registerPage{

    private readonly page:Page;
    private readonly registerpagetxt:Locator;
    private readonly firstName:Locator;
    private readonly lastName:Locator;
    private readonly email:Locator;
    private readonly enterPassword:Locator;
    private readonly agreeCheckbox:Locator;
    private readonly clkContinue:Locator;
    private readonly chkregistersucess:Locator;


    constructor(page:Page){
        this.page=page;
        this.registerpagetxt=page.locator("//title[text()='Register Account']");
        this.firstName=page.locator("//input[@name='firstname']");
        this.lastName=page.locator("//input[@name='lastname']");
        this.email=page.locator("//input[@name='email']");
        this.enterPassword=page.locator("//input[@name='password']");
        this.agreeCheckbox=page.locator("input[name='agree']");
        this.clkContinue=page.getByRole('button',{name:'continue'});
        this.chkregistersucess=page.getByRole('heading',{name:'Your Account Has Been Created!'});





    }

    async confirmRegistrationPage(){
        return await this.registerpagetxt.isVisible();
    }

    async setFirstName(firstName:string){

        await this.firstName.fill(firstName);

    }
    async setLastName(lastName:string){

        await this.lastName.fill(lastName);

    }
    async setEmail(email:string){

        await this.email.fill(email);

    }
    async setpassword(password:string){

        await this.enterPassword.fill(password);

    }
    async agreeCheckBox(){

        await this.agreeCheckbox.click();

    }

    async clickContinue(){

        await this.clkContinue.click();

    }

    async validateRegistrationSucessMsg():Promise<string>{
            return await this.chkregistersucess.textContent() ?? '';
    }

    async completeRegistration(FirstName:string,LastName:string,email:string,password:string){
        await this.setFirstName(FirstName);
        await this.setLastName(LastName);
        await this.setEmail(email);
        await this.setpassword(password);
        await this.agreeCheckBox();
        await this.clickContinue();

    }
}