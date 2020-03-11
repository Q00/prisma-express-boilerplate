import { UserService } from '../../../services/UserService';
import { User } from '../../../models/User';
import { UserRepository } from '../../../contracts/UserRepository';
test('getArticles_noArticlesInDB_emptyList', async () => {
  const userService = new UserService(new EmptyMockRepository());
  const users: User[] = await userService.getUsers();
  expect(users.length).toBe(0);
});

test('getArticles_oneArticleInDB_ListOfOneArticle', async () => {
  const userService = new UserService(new SingleMockRepository());
  const users: User[] = await userService.getUsers();
  expect(users.length).toBe(1);
});

class EmptyMockRepository implements UserRepository {
  async users(): Promise<User[]> {
    return [];
  }
}

class SingleMockRepository implements UserRepository {
  async users(): Promise<User[]> {
    return [
      {
        nickname: 'Q00',
        birthday: new Date('1995-03-27'),
        sex: 'male',
        userAccount: {},
        userPushId: '123',
      } as User,
    ];
  }
}
