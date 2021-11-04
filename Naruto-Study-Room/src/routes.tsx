import React from 'react';
import { IconBrush } from '@arco-design/web-react/icon';
import { Icon } from '@arco-design/web-react';

const IconFont = Icon.addFromIconFontCn({ src: '//at.alicdn.com/t/font_734522_13vp4s774m5.js' });

export const defaultRoute = 'manage/user-manage';

export const routes = [
  {
    name: 'menu.manage',
    key: 'manage',
    icon: <IconFont type="icon-quanbufenlei" />,
    children: [
      {
        name: 'menu.manage.user',
        key: 'manage/user-manage',
        icon: <IconFont type="icon-liebiao" />,
        componentPath: 'user-management',
      },
      {
        name: 'menu.manage.card.voucher',
        key: 'manage/card-voucher',
        icon: <IconFont type="icon-weifukuan" />,
        componentPath: 'user-management/card-voucher',
      },
      {
        name: 'menu.manage.clock',
        key: 'manage/clock-in-record',
        icon: <IconFont type="icon-zuoyedaqia" />,
        componentPath: 'user-management/clock-in-record',
      },
    ],
  },
  {
    name: 'menu.regional-management',
    key: 'regional-management',
    icon: <IconFont type="icon-chongwutiandi" />,
    componentPath: 'regional-management',
  },
  {
    name: 'menu.seat-manage',
    key: 'seat-manage',
    icon: <IconFont type="icon-zuowei-" />,
    children: [
      {
        name: 'menu.seat-list',
        key: 'seat-list',
        icon: <IconFont type="icon-zuowei" />,
        componentPath: 'seat-management/seat-list',
      },
      {
        name: 'menu.reservation-status',
        key: 'reservation-status',
        icon: <IconFont type="icon-liebiaodaohang_tiyu" />,
        componentPath: 'seat-management/reservation-status',
      },
    ],
  },
  {
    // 卡券管理
    name: 'menu.voucher-management',
    key: 'voucher-management',
    icon: <IconFont type="icon-58_kaquan" />,
    componentPath: 'voucher-management',
  },
  {
    // 兑换码管理
    name: 'menu.exchange-code-management',
    key: 'exchange-code-management',
    icon: <IconFont type="icon-duihuanma" />,
    children: [
      {
        name: 'menu.exchange-code-list',
        key: 'exchange-code-management/list',
        icon: <IconFont type="icon-recharge_list" />,
        componentPath: 'exchange-code-management/exchange-code-list',
      },
      {
        name: 'menu.create-exchange-code',
        key: 'exchange-code-management/create-code',
        icon: <IconFont type="icon-weifukuan" />,
        componentPath: 'exchange-code-management/create-exchange-code',
      },
    ],
  },
  // order-manage 订单管理
  {
    // 订单管理
    name: 'menu.order-manage',
    key: 'order-manage',
    icon: <IconFont type="icon-010-dingdan" />,
    componentPath: 'order-manage',
  },
  {
    // 充值管理
    name: 'menu.recharge-management',
    key: 'recharge-management',
    icon: <IconFont type="icon-wangfeichongzhidingdan" />,
    children: [
      {
        name: 'menu.recharge-list',
        key: 'recharge-management/recharge-list',
        icon: <IconFont type="icon-recharge_list" />,
        componentPath: 'recharge-management/recharge-list',
      },
      {
        name: 'menu.recharge-price-configuration',
        key: 'recharge-management/price-configuration',
        icon: <IconFont type="icon-jiage" />,
        componentPath: 'recharge-management/recharge-price-configuration',
      },
    ],
  },
  {
    // 入口管理
    name: 'menu.gate',
    key: 'gate',
    icon: <IconFont type="icon-dianpurukou1" />,
    componentPath: 'gate',
  },
  {
    // 首页幻灯片管理
    name: 'menu.banner-management',
    key: 'banner-management',
    icon: <IconFont type="icon-zuowei-" />,
    componentPath: 'banner-management',
  },
  {
    // 兑换时长管理
    name: 'menu.exchange-time-management',
    key: 'exchange-time-management',
    icon: <IconFont type="icon-shichang" />,
    componentPath: 'exchange-time-management',
  },
  // merchants-tel-management
  {
    // 商家电话管理
    name: 'menu.merchants-tel-management',
    key: 'merchants-tel-management',
    icon: <IconFont type="icon-dianhua" />,
    componentPath: 'merchants-tel-management',
  },
  {
    name: 'menu.data-flow',
    key: 'data-flow',
    icon: <IconBrush />,
    componentPath: 'data-flow',
  },
];
