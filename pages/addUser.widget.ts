import { expect, type Locator, type Page } from '@playwright/test';
import { type User } from '../data/types/userData.type';
import { scrambleUserName } from '../utilities/randomizer';

export class AddUserWidget {
    readonly page: Page;
    readonly addUserWidgetTitle: Locator;
    readonly firstNameTextfield: Locator;
    readonly lastNameTextfield: Locator;
    readonly userNameTextfield: Locator;
    readonly passwordTextfield: Locator;
    readonly companyAAACustomerRadiobutton: Locator;
    readonly companyBBBCustomerRadiobutton: Locator;
    readonly roleDropdown: Locator;
    readonly emailTextfield: Locator;
    readonly cellphoneTextfield: Locator;
    readonly saveButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.addUserWidgetTitle = page.getByRole('heading', { name: 'Add User' });
      this.firstNameTextfield = page.locator('input[name="FirstName"]');
      this.lastNameTextfield = page.locator('input[name="LastName"]');
      this.userNameTextfield = page.locator('input[name="UserName"]');
      this.passwordTextfield = page.locator('input[name="Password"]');
      this.companyAAACustomerRadiobutton = page.getByLabel('Company AAA');
      this.companyBBBCustomerRadiobutton = page.getByLabel('Company BBB');
      this.roleDropdown = page.getByRole('combobox');
      this.emailTextfield = page.locator('input[name="Email"]');
      this.cellphoneTextfield = page.locator('input[name="Mobilephone"]');
      this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async selectCompanyType(companyType: string){
      if (companyType === 'Company AAA'){        
        await this.companyAAACustomerRadiobutton.check();
      }
      else {
        await this.companyBBBCustomerRadiobutton.check();
      }
    }

    async selectRole(role: string){
      if (role === 'Customer'){        
        await this.roleDropdown.selectOption('1');
      }
      else if (role === 'Admin'){
        await this.roleDropdown.selectOption('2');
      }
    }
  
    async addUser(user: User) {
      await expect(this.addUserWidgetTitle).toBeAttached();
      await this.firstNameTextfield.fill(user.FirstName);
      await this.lastNameTextfield.fill(user.LastName);
      user.UserName = scrambleUserName();
      await this.userNameTextfield.fill(user.UserName);
      await this.passwordTextfield.fill(user.Password);
      await this.selectCompanyType(user.Customer);
      await this.selectRole(user.Role);
      await this.emailTextfield.fill(user.Email);
      await this.cellphoneTextfield.fill(user.CellPhone);
      await this.saveButton.click();
    }
}