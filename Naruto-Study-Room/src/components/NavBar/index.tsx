import React from 'react';
import {
  Tooltip,
  Button,
  Avatar,
  Select,
  Typography,
  Dropdown,
  Menu,
  Space,
  Divider,
  Icon,
} from '@arco-design/web-react';
import { IconSunFill, IconMoonFill } from '@arco-design/web-react/icon';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useLocale from '../../utils/useLocale';
import Logo from '../../assets/logo.svg';
import history from '../../history';
import MessageBox from '../MessageBox';
import GreetingTerms from '../GreetingTerms';

import styles from './style/index.module.less';
import { initialState } from '../../recoil/global';

const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/font_734522_13vp4s774m5.js' });

const iconStyle = {
  marginRight: 8,
  fontSize: 18,
  transform: 'translateY(2.5px)',
};

function Navbar() {
  const locale = useLocale();
  const { theme, userInfo } = useRecoilValue(initialState);
  const initialValue = useSetRecoilState(initialState);

  function logout() {
    localStorage.setItem('userStatus', 'logout');
    localStorage.clear();
    history.push('/user/login');
  }

  function onMenuItemClick(key) {
    if (key === 'logout') {
      logout();
    }
  }

  const dropList = (
    <Menu style={{ width: 400, height: 'calc(100% - 28px)', maxHeight: 400 }}>
      <Menu.Item key="0">
        <Space align="center">
          <Typography.Title heading={6} style={{ transform: 'translateY(2px)', margin: 0 }}>
            {userInfo.name}
          </Typography.Title>
          <Avatar size={24} style={{ marginRight: 8 }}>
            <img alt="avatar" src={userInfo.avatar} />
          </Avatar>
        </Space>
      </Menu.Item>
      <Divider style={{ margin: '8px 0' }} />
      <Menu.Item key="1">
        <IconFont type="icon-xianhualipin" style={iconStyle} />
        <Typography.Text style={{ textAlign: 'justify' }}>设 置</Typography.Text>
      </Menu.Item>
      <Menu.Item key="2">
        <IconFont type="icon-chongwutiandi" style={iconStyle} />
        <Typography.Text style={{ textAlign: 'justify' }}>修改信息</Typography.Text>
      </Menu.Item>
      <Menu.Item key="3">
        <IconFont type="icon-ershouhuishou" style={iconStyle} />
        <Typography.Text style={{ textAlign: 'justify' }}>走马观画</Typography.Text>
      </Menu.Item>
      <Divider style={{ margin: '4px 0' }} />
      <Menu.Item key="logout" onClick={() => onMenuItemClick('logout')}>
        <IconFont type="icon-tuichu1" style={iconStyle} />
        <Typography.Text style={{ textAlign: 'justify' }}> 退出登陆</Typography.Text>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Space size={8}>
          <Logo width={54} height={54} />
          <Typography.Title style={{ margin: 0, fontSize: 18 }} heading={5}>
            火影自习室
          </Typography.Title>
        </Space>
      </div>
      <ul className={styles.right}>
        <li>
          <MessageBox />
        </li>
        <li>
          <Select
            options={[
              { label: '中文', value: 'zh-CN' },
              { label: 'English', value: 'en-US' },
            ]}
            value={localStorage.getItem('arco-lang')}
            bordered={false}
            triggerProps={{
              autoAlignPopupWidth: false,
              autoAlignPopupMinWidth: true,
              position: 'bl',
            }}
            onChange={(value) => {
              localStorage.setItem('arco-lang', value);
              window.location.reload();
            }}
          />
        </li>
        <li>
          <Tooltip
            content={
              theme === 'light'
                ? locale['settings.navbar.theme.toDark']
                : locale['settings.navbar.theme.toLight']
            }
          >
            <Button
              type="text"
              icon={theme === 'light' ? <IconMoonFill /> : <IconSunFill />}
              onClick={() =>
                initialValue((oldValue) => ({
                  ...oldValue,
                  theme: theme === 'light' ? 'dark' : 'light',
                }))
              }
              style={{ fontSize: 20 }}
            />
          </Tooltip>
        </li>
        <li style={{ padding: '0 8px', marginRight: '15px' }}>
          <GreetingTerms text="你好！美好的一天，从阅读开始！" />
        </li>
        {userInfo && (
          <li>
            <Avatar size={24} style={{ marginRight: 8 }}>
              <img alt="avatar" src={userInfo.avatar} />
            </Avatar>
            <Dropdown trigger="click" droplist={dropList} position="br">
              <Typography.Text className={styles.username}>{userInfo.name}</Typography.Text>
            </Dropdown>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
