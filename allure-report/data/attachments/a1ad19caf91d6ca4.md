# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> Register to OpenCart
- Location: tests\AccountRegistration.spec.ts:8:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Your Account Has Been Created!')

```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox', { name: 'agree' })

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - list [ref=e6]:
        - listitem [ref=e7]:
          - link "$ Currency " [ref=e10] [cursor=pointer]:
            - /url: "#"
            - strong [ref=e11]: $
            - text: Currency
            - generic [ref=e12]: 
        - listitem
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link " 123456789" [ref=e16] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - generic [ref=e17]: 
            - text: "123456789"
        - listitem [ref=e18]:
          - link " My Account " [ref=e20] [cursor=pointer]:
            - /url: "#"
            - generic [ref=e21]: 
            - text: My Account
            - generic [ref=e22]: 
        - listitem [ref=e23]:
          - link " Wish List (0)" [ref=e24] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - generic [ref=e25]: 
            - text: Wish List (0)
        - listitem [ref=e26]:
          - link " Shopping Cart" [ref=e27] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/cart&language=en-gb
            - generic [ref=e28]: 
            - text: Shopping Cart
        - listitem [ref=e29]:
          - link " Checkout" [ref=e30] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=checkout/checkout&language=en-gb
            - generic [ref=e31]: 
            - text: Checkout
  - banner [ref=e32]:
    - generic [ref=e34]:
      - link "Your Store" [ref=e37] [cursor=pointer]:
        - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
        - img "Your Store" [ref=e38]
      - generic [ref=e40]:
        - textbox "Search" [ref=e41]
        - button "" [ref=e42] [cursor=pointer]:
          - generic [ref=e43]: 
      - button " 0 item(s) - $0.00" [ref=e46] [cursor=pointer]:
        - generic [ref=e47]: 
        - text: 0 item(s) - $0.00
  - main [ref=e48]:
    - navigation [ref=e50]:
      - text: 
      - list [ref=e52]:
        - listitem [ref=e53]:
          - link "Desktops" [ref=e54] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=20
        - listitem [ref=e55]:
          - link "Laptops & Notebooks" [ref=e56] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=18
        - listitem [ref=e57]:
          - link "Components" [ref=e58] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=25
        - listitem [ref=e59]:
          - link "Tablets" [ref=e60] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=57
        - listitem [ref=e61]:
          - link "Software" [ref=e62] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=17
        - listitem [ref=e63]:
          - link "Phones & PDAs" [ref=e64] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=24
        - listitem [ref=e65]:
          - link "Cameras" [ref=e66] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=33
        - listitem [ref=e67]:
          - link "MP3 Players" [ref=e68] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=product/category&language=en-gb&path=34
    - generic [ref=e69]:
      - list [ref=e70]:
        - listitem [ref=e71]:
          - link "" [ref=e72] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=common/home&language=en-gb
            - generic [ref=e73]: 
        - listitem [ref=e74]:
          - link "Account" [ref=e75] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
        - listitem [ref=e76]:
          - link "Register" [ref=e77] [cursor=pointer]:
            - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
      - generic [ref=e78]:
        - generic [ref=e79]:
          - heading "Register Account" [level=1] [ref=e80]
          - paragraph [ref=e81]:
            - text: If you already have an account with us, please login at the
            - link "login page" [ref=e82] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
            - text: .
          - generic [ref=e83]:
            - group "Your Personal Details" [ref=e84]:
              - generic [ref=e85]: Your Personal Details
              - generic [ref=e86]:
                - generic [ref=e87]: "* First Name"
                - generic [ref=e88]:
                  - textbox "* First Name" [ref=e89]:
                    - /placeholder: First Name
                  - generic [ref=e90]: First Name must be between 1 and 32 characters!
              - generic [ref=e91]:
                - generic [ref=e92]: "* Last Name"
                - textbox "* Last Name" [ref=e94]:
                  - /placeholder: Last Name
                  - text: RaquelBernhard
              - generic [ref=e95]:
                - generic [ref=e96]: "* E-Mail"
                - textbox "* E-Mail" [ref=e98]:
                  - /placeholder: E-Mail
                  - text: Darnell_Mills74@yahoo.com
            - group "Your Password" [ref=e99]:
              - generic [ref=e100]: Your Password
              - generic [ref=e101]:
                - generic [ref=e102]: "* Password"
                - textbox "* Password" [ref=e104]:
                  - /placeholder: Password
                  - text: test@123
            - group "Newsletter" [ref=e105]:
              - generic [ref=e106]: Newsletter
              - generic [ref=e107]:
                - generic [ref=e108]: Subscribe
                - checkbox [ref=e111]
            - generic [ref=e112]:
              - generic [ref=e113]:
                - generic [ref=e114]:
                  - text: I have read and agree to the
                  - link "Privacy Policy" [ref=e115] [cursor=pointer]:
                    - /url: http://localhost/opencart/upload/index.php?route=information/information.info&language=en-gb&information_id=3
                - checkbox [ref=e116]
              - button "Continue" [ref=e117] [cursor=pointer]
        - complementary [ref=e118]:
          - generic [ref=e119]:
            - link "Login" [ref=e120] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/login&language=en-gb
            - link "Register" [ref=e121] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/register&language=en-gb
            - link "Forgotten Password" [ref=e122] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/forgotten&language=en-gb
            - link "My Account" [ref=e123] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - link "Payment Methods" [ref=e124] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/payment_method&language=en-gb
            - link "Address Book" [ref=e125] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/address&language=en-gb
            - link "Wish List" [ref=e126] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - link "Order History" [ref=e127] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - link "Downloads" [ref=e128] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/download&language=en-gb
            - link "Subscriptions" [ref=e129] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/subscription&language=en-gb
            - link "Reward Points" [ref=e130] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/reward&language=en-gb
            - link "Returns" [ref=e131] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/returns&language=en-gb
            - link "Transactions" [ref=e132] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/transaction&language=en-gb
            - link "Newsletter" [ref=e133] [cursor=pointer]:
              - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
  - contentinfo [ref=e134]:
    - generic [ref=e135]:
      - generic [ref=e136]:
        - generic [ref=e137]:
          - heading "Information" [level=5] [ref=e138]
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Terms & Conditions" [ref=e141] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=2
            - listitem [ref=e142]:
              - link "Delivery Information" [ref=e143] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=4
            - listitem [ref=e144]:
              - link "About Us" [ref=e145] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=1
            - listitem [ref=e146]:
              - link "Privacy Policy" [ref=e147] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/information&language=en-gb&information_id=3
        - generic [ref=e148]:
          - heading "Customer Service" [level=5] [ref=e149]
          - list [ref=e150]:
            - listitem [ref=e151]:
              - link "Contact Us" [ref=e152] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/contact&language=en-gb
            - listitem [ref=e153]:
              - link "Returns" [ref=e154] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/returns.add&language=en-gb
            - listitem [ref=e155]:
              - link "Site Map" [ref=e156] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=information/sitemap&language=en-gb
        - generic [ref=e157]:
          - heading "Extras" [level=5] [ref=e158]
          - list [ref=e159]:
            - listitem [ref=e160]:
              - link "Brands" [ref=e161] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/manufacturer&language=en-gb
            - listitem [ref=e162]:
              - link "Affiliate" [ref=e163] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/affiliate&language=en-gb
            - listitem [ref=e164]:
              - link "Specials" [ref=e165] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=product/special&language=en-gb
        - generic [ref=e166]:
          - heading "My Account" [level=5] [ref=e167]
          - list [ref=e168]:
            - listitem [ref=e169]:
              - link "My Account" [ref=e170] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/account&language=en-gb
            - listitem [ref=e171]:
              - link "Order History" [ref=e172] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/order&language=en-gb
            - listitem [ref=e173]:
              - link "Wish List" [ref=e174] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/wishlist&language=en-gb
            - listitem [ref=e175]:
              - link "Newsletter" [ref=e176] [cursor=pointer]:
                - /url: http://localhost/opencart/upload/index.php?route=account/newsletter&language=en-gb
      - separator [ref=e177]
      - paragraph [ref=e178]:
        - text: Powered By
        - link "OpenCart" [ref=e179] [cursor=pointer]:
          - /url: https://www.opencart.com
        - text: Your Store © 2026
```

# Test source

```ts
  1  | import {Page,Locator} from"@playwright/test"
  2  | 
  3  | export class registerPage{
  4  | 
  5  |     private readonly page:Page;
  6  |     private readonly registerpagetxt:Locator;
  7  |     private readonly firstName:Locator;
  8  |     private readonly lastName:Locator;
  9  |     private readonly email:Locator;
  10 |     private readonly enterPassword:Locator;
  11 |     private readonly agreeCheckbox:Locator;
  12 |     private readonly clkContinue:Locator;
  13 |     private readonly chkregistersucess:Locator;
  14 | 
  15 | 
  16 |     constructor(page:Page){
  17 |         this.page=page;
  18 |         this.registerpagetxt=page.locator("//title[text()='Register Account']");
  19 |         this.firstName=page.locator("//input[@name='firstname']");
  20 |         this.lastName=page.locator("//input[@name='lastname']");
  21 |         this.email=page.locator("//input[@name='email']");
  22 |         this.enterPassword=page.locator("//input[@name='password']");
  23 |         this.agreeCheckbox=page.getByRole('checkbox',{name:'agree'});
  24 |         this.clkContinue=page.getByRole('button',{name:'continue'});
  25 |         this.chkregistersucess=page.getByText('Your Account Has Been Created!');
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 |     }
  32 | 
  33 |     async confirmRegistrationPage(){
  34 |         return await this.registerpagetxt.isVisible();
  35 |     }
  36 | 
  37 |     async setFirstName(firstName:string){
  38 | 
  39 |         await this.firstName.fill(firstName);
  40 | 
  41 |     }
  42 |     async setLastName(lastName:string){
  43 | 
  44 |         await this.lastName.fill(lastName);
  45 | 
  46 |     }
  47 |     async setEmail(email:string){
  48 | 
  49 |         await this.email.fill(email);
  50 | 
  51 |     }
  52 |     async setpassword(password:string){
  53 | 
  54 |         await this.enterPassword.fill(password);
  55 | 
  56 |     }
  57 |     async agreeCheckBox(){
  58 | 
> 59 |         await this.agreeCheckbox.click();
     |                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
  60 | 
  61 |     }
  62 | 
  63 |     async clickContinue(){
  64 | 
  65 |         await this.clkContinue.click();
  66 | 
  67 |     }
  68 | 
  69 |     async validateRegistrationSucessMsg():Promise<string>{
  70 |             return await this.chkregistersucess.textContent() ?? '';
  71 |     }
  72 | 
  73 |     async completeRegistration(FirstName:string,LastName:string,email:string,password:string){
  74 |         await this.setFirstName(FirstName);
  75 |         await this.setLastName(LastName);
  76 |         await this.setEmail(email);
  77 |         await this.setpassword(password);
  78 |         await this.agreeCheckBox();
  79 |         await this.clickContinue();
  80 | 
  81 |     }
  82 | }
```