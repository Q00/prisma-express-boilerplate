import Container from 'typedi';
import { UserService } from '../../../services/userService';
import { User } from '../../../models/user';
test('getArticles_noArticlesInDB_emptyList', async () => {
  const userService: UserService = Container.get('UserService');
  const users: User[] = await userService.getUsers();
  expect(users.length).toBe(0);
});
