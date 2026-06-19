import {Page,Locator} from "@playwright/test";

export class homepage{

    private readonly page:Page;
    private readonly clkmyaccountlnk:Locator;
    private readonly clkregisterlnk:Locator;
    private readonly clkloginlnk:Locator;


    constructor(page:Page){

        this.page=page;
        this.clkmyaccountlnk=page.locator("//span[text()='My Account']");
        this.clkregisterlnk=page.locator("//a[text()='Register']");
        this.clkloginlnk=page.locator("//a[text()='Login']");

    }

    //methods
    async isHomePageExists():Promise<boolean>{

       let title:string =await this.page.title();
       if(title){
        return true;
       }else{
        return false;
       }


    }

    // async clkAccount(){
    //     try{
    //     await this.clkmyaccountlnk.click();
    //     }catch(error){
    //         console.log(`Error Occurred while clicking on my account: ${error}`);
    //         throw error;
    //     }     
//}


   async clkRegisterUser(){
    
    try{
    await this.clkmyaccountlnk.click();
    await this.clkregisterlnk.click();
    }catch(error){
        console.log(`Error Occured while clicking on Register: ${error}`);
        throw error;
    }
   }

   async clkLoginUser(){
   // await this.clkAccount();
    try{
    await this.clkmyaccountlnk.click();
    await this.clkloginlnk.click();
    }catch(error){
        console.log(`Error Occured while clicking on Register: ${error}`);
        throw error;
    }
   }

}