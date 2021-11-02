import React from 'react';
import { Layout } from '@arco-design/web-react';
import { FooterProps } from '@arco-design/web-react/es/Layout/interface';
import cs from '../../utils/classnames';
import styles from './style/index.module.less';

const Footer = Layout.Footer;

export default (props: FooterProps = {}) => {
  const { className, ...restProps } = props;
  return (
    <Footer className={cs(styles.footer, className)} {...restProps}>
      GIP UED & 火影文化有限公司 &&&& ⓒ Copyright ByteDance 2021 京ICP备19059916号-18
    </Footer>
  );
};
