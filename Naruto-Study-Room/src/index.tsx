import React, { useState, useEffect } from 'react';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import enUS from '@arco-design/web-react/es/locale/en-US';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import PageLayout from './layout/page-layout';
import { GlobalContext } from './context';
import './style/index.less';
import './mock';
import Login from './pages/login';
import checkLogin from './utils/checkLogin';
import { userInfoRequest } from './service/Apis';
import { initialState } from './recoil/global';

function Index() {
  const localeName = localStorage.getItem('arco-lang') || 'zh-CN';
  const [initialData] = useRecoilState(initialState);

  const setUserInfo = useSetRecoilState(initialState);

  if (!localStorage.getItem('arco-lang')) {
    localStorage.setItem('arco-lang', localeName);
  }
  const [locale, setLocale] = useState();

  async function fetchLocale(ln?: string) {
    const locale = (await import(`./locale/${ln || localeName}`)).default;
    setLocale(locale);
  }

  function getArcoLocale() {
    switch (localeName) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  }

  function fetchUserInfo() {
    userInfoRequest().then((res: { data?: any }) => {
      setUserInfo({ ...initialData, userInfo: res?.data });
    });
  }

  useEffect(() => {
    fetchLocale();
  }, []);

  useEffect(() => {
    if (checkLogin()) {
      fetchUserInfo();
    } else {
      history.push('/user/login');
    }
  }, []);

  const contextValue = {
    locale,
  };

  return locale ? (
    <Router history={history}>
      <ConfigProvider locale={getArcoLocale()}>
        <GlobalContext.Provider value={contextValue}>
          <Switch>
            <Route path="/user/login" component={Login} />
            <Route path="/" component={PageLayout} />
          </Switch>
          {/* <Setting /> */}
        </GlobalContext.Provider>
      </ConfigProvider>
    </Router>
  ) : null;
}

ReactDOM.render(
  <RecoilRoot>
    <Index />
  </RecoilRoot>,
  document.getElementById('root')
);
