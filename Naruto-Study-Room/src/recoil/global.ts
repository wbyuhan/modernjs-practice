import { atom, selector } from 'recoil';
import defaultSettings from '../settings.json';

const defaultTheme = localStorage.getItem('arco-theme') || 'light';

function changeTheme(newTheme?: 'string') {
  if ((newTheme || defaultTheme) === 'dark') {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
}

// init page theme
changeTheme();

export interface GlobalState {
  theme?: string;
  settings?: typeof defaultSettings;
  userInfo?: {
    name?: string;
    avatar?: string;
    job?: string;
    organization?: string;
    location?: string;
    email?: string;
  };
}

export interface InitState {
  key: string;
  // default: GlobalState;
}

export const initialState = atom({
  key: 'initialState',
  default: {
    theme: defaultTheme,
    settings: defaultSettings,
    userInfo: {
      name: undefined,
      avatar: undefined,
      job: undefined,
      organization: undefined,
      location: undefined,
      email: undefined,
    },
  },
});

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(initialState);

    return text;
  },
});

export const demoState = atom({
  key: 'demoState',
  default: 1,
});

export default function(state = initialState, action) {
  switch (action.type) {
    case 'toggle-theme': {
      const { theme } = action.payload;
      if (theme === 'light' || theme === 'dark') {
        localStorage.setItem('arco-theme', theme);
        changeTheme(theme);
      }

      return {
        ...state,
        theme,
      };
    }
    case 'update-settings': {
      const { settings } = action.payload;
      return {
        ...state,
        settings,
      };
    }
    default:
      return state;
  }
}
