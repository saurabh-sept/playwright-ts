import { test, expect } from '@playwright/test';
import { UserListTablePage } from '../../pages/userListTable.page';
import { AddUserWidget } from '../../pages/addUser.widget';
import { type User } from '../../data/types/userData.type';
import Users from '../../data/users.json';

test(`Add users to table`, async ({ page }) => {
  const userList = new UserListTablePage(page);
  await userList.goto();
  const usersToadd: User[] = Users;
  for (const user of usersToadd){
    await userList.addUserButton.click();
    const addUser = new AddUserWidget(page);
    await addUser.addUser(user);
    await userList.verifyUserExistsOnTable(user);
  }
});
