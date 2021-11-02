import { atom, selector, selectorFamily } from 'recoil';
import { frinendDataRequest } from '../../../service/Apis';

export const currentUserIDState = atom({
  key: 'CurrentUserID',
  default: 1,
});

export const userInfoQuery = selectorFamily({
  key: 'UserInfoQuery',
  get: (userID) => async () => {
    const response: any = await frinendDataRequest({ userID });
    if (response.error) {
      throw response.error;
    }
    return {
      name: 'json',
      friendList: response.data,
    };
  },
});

export const currentUserInfoQuery = selector({
  key: 'CurrentUserInfoQuery',
  get: ({ get }) => get(userInfoQuery(get(currentUserIDState))),
});

export const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const response = await frinendDataRequest({
      userID: get(currentUserIDState),
    });
    return {
      name: 'json',
      response,
    };
  },
});

export const friendsInfoQuery = selector({
  key: 'FriendsInfoQuery',
  get: ({ get }) => {
    const { friendList } = get(currentUserInfoQuery);

    return friendList.map((friendID) => get(userInfoQuery(friendID)));
  },
});
