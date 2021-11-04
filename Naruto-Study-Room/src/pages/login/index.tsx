import React, { useEffect } from 'react';
import { Layout } from '@arco-design/web-react';
import Footer from '../../components/Footer';
import LoginForm from './form';
import LoginBanner from './banner';
import Background from './background';
import Logo from '../../assets/logo.svg';

import styles from './style/index.module.less';

const Header = Layout.Header;
const Content = Layout.Content;

export default () => {
  useEffect(() => {
    document.body.setAttribute('arco-theme', 'light');
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.banner}>
        <Background />
      </div>
      <div className={styles.container}>
        <Layout style={{ height: '100%' }}>
          <Header style={{ height: '70px' }}>
            <div className={styles.logo}>
              <Logo width={40} height={40} />
              <div className={styles['logo-text']}>火影自习室</div>
            </div>
          </Header>
          <Content className={styles.content}>
            <LoginBanner />
            <LoginForm />
          </Content>
        </Layout>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
