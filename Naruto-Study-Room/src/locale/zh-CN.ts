import localeSettings from './zh-CN/settings';
import localeMessageBox from '../components/MessageBox/locale/zh-CN';
import localeSearchTable from '../pages/search-table/locale/zh-CN';
import localeWelcome from '../pages/welcome/locale/zh-CN';

export default {
  'menu.list': '列表页',
  'menu.data-flow': '数据流图',
  'menu.manage': '用户管理',
  'menu.manage.user': '用户列表',
  'menu.manage.card.voucher': '用户卡券',
  'menu.manage.clock': '打卡记录',
  'menu.regional-management': '区域管理',
  'menu.seat-list': '座位列表',
  'menu.seat-manage': '座位管理',
  'menu.reservation-status': '座位预约情况',
  'menu.voucher-management': '卡券购买管理',
  'menu.exchange-code-management': '兑换码管理',
  'menu.exchange-code-list': '兑换码列表',
  'menu.create-exchange-code': '生成兑换码',
  'menu.order-manage': '订单管理',
  'menu.recharge-management': '充值管理',
  'menu.recharge-list': '充值列表',
  'menu.recharge-price-configuration': '充值价格配置',
  'menu.gate': '入口管理',
  'menu.banner-management': '首页幻灯片管理',
  'menu.exchange-time-management': '兑换时长管理',
  'menu.merchants-tel-management': '商家电话管理',
  'navbar.docs': '文档中心',

  ...localeSettings,
  ...localeMessageBox,
  ...localeSearchTable,
  ...localeWelcome,
};
