import {Page,Locator} from "@playwright/test"
export class loginpage{

    private readonly page:Page;
    private readonly Entremail:Locator;
    private readonly Entrpassword:Locator;
    private readonly Loginbtn:Locator;
    private readonly confirmLogin:Locator;
    private readonly confirmAccountPage:Locator;
    private readonly loginErr:Locator;

    constructor(page:Page){
        this.page=page;
        this.Entremail=page.locator("input[name='email']");
        this.Entrpassword=page.locator("input[name='password']");
        this.Loginbtn=page.locator("//button[text()='Login']")
        this.confirmLogin=page.locator("//*[ @class='breadcrumb']//a[text()='Login']")
        this.confirmAccountPage=page.locator("//h1[text()='My Account']");
        this.loginErr=page.locator("//*[text()=' Warning: No match for E-Mail Address and/or Password. ']");
    }

    async confirmLoginPage():Promise<boolean>{
        try{
            await this.confirmLogin.waitFor({state:'visible',timeout:10000});
            return true;
        }catch{
            return false;
        }
    }

    async enteremail(email:string){
        await this.Entremail.fill(email);
    }

    async enterpassword(password:string){
        await this.Entrpassword.fill(password);
    }

    async loginBtn(){
        await this.Loginbtn.click();
    }

    async confirmAccPage():Promise<boolean>{
        try{
            await this.confirmAccountPage.waitFor({state:'visible',timeout:10000});
            return true;
        }catch{
            return false;
        }
    }

    async getLoginErr(){

        return (this.loginErr.textContent());
    
    }

    
}