import { expect, type Locator, type Page } from '@playwright/test';
import { User } from '../data/types/userData.type';
const BASEUIURL = process.env.baseUIURL;

export class UserListTablePage {
    readonly page: Page;
    readonly addUserButton: Locator;
    readonly userTable: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.addUserButton = page.getByRole('button', { name: 'Add User' });
      this.userTable = page.getByTitle('Smart Table example');
    }
  
    async goto() {
      await this.page.goto(`${BASEUIURL}`);
      await expect(this.page).toHaveTitle(/WebTables/);
    }
  
    async verifyUserExistsOnTable(user: User) {
      const rows = this.userTable.locator('tbody tr');
      const cols = rows.locator('td');
      expect(rows.filter({
        has: this.page.locator('td'),
        hasText: user.UserName
      })).toBeTruthy();
    }
}