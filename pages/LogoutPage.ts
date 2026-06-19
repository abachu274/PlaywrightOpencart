import{Page,Locator} from "@playwright/test"
import { homepage } from "./homepage";

export class logoutpage{


private readonly page:Page;
private readonly clkmyaccountlnk:Locator;
private readonly clklogout:Locator;
private readonly verifylogout:Locator;
private readonly clkcontinue:Locator;

constructor(page:Page){
this.page=page;
this.clkmyaccountlnk=page.locator("//span[text()='My Account']");
this.clklogout=page.locator("//a[text()='Logout' and @class='dropdown-item']");
this.verifylogout=page.locator("//h1[text()='Account Logout']");
this.clkcontinue=page.locator("//a[text()='Continue' and @class='btn btn-primary']");
}

async clkLogout():Promise<logoutpage>{
    try{
await this.clkmyaccountlnk.click();
await this.clklogout.click();
      return new logoutpage(this.page);
    }catch(error){
        console.log(`Error Occured while clicking on Logout: ${error}`);
        throw error;
    }   
}

async confirmLogoutPage():Promise<boolean>{
    try{
        let title:string=await this.page.title();   
        return title.includes("Account Logout");
    }catch(error){
        console.log(`Error Occured while confirming logout page: ${error}`);
        throw error;
    }
}

async clkContinue():Promise<homepage>{
    try{
        await this.clkcontinue.click();
        return new homepage(this.page);
    }catch(error){
        console.log(`Error Occured while clicking on continue: ${error}`);
        throw error;
    }   

}

}