import React from 'react';
import { Card, Form, Button, Input, Select } from '@arco-design/web-react';

import styles from './style/index.module.less';

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};

const FormItem = Form.Item;

function RegionalManagement() {
  const [form] = Form.useForm();

  const getRice = (val, value) => {
    const sen = Math.floor(val * 0.3);
    console.log('%c 🍫 sen: ', 'font-size:20px;background-color: #FCA650;color:#fff;', sen);
    const center = Math.floor((value - sen) / 0.7) * 5;
    return center;
  };
  const onSubmit = (v) => {
    console.log('%c 🥃 v: ', 'font-size:20px;background-color: #2EAFB0;color:#fff;', v);
    const { zong, begin } = v;
    const res = getRice(begin, zong);
    console.log('%c 🍅 res: ', 'font-size:20px;background-color: #33A5FF;color:#fff;', res);
    alert(`你的分数为：${res}`);
  };
  return (
    <div className={styles.container}>
      <Card bordered={false}>
        <div style={{ maxWidth: 650 }}>
          <Form form={form} {...formItemLayout} onSubmit={onSubmit}>
            <FormItem label="分数" field="zong">
              <Input placeholder="please enter your 总分" />
            </FormItem>
            <FormItem label="初试" field="begin">
              <Input placeholder="please enter your 初试" />
            </FormItem>
            <FormItem label="Post" field="post" rules={[{ required: true }]}>
              <Select
                placeholder="please select"
                options={[
                  { label: '单人明区', value: 0 },
                  { label: '双人明区', value: 1 },
                  { label: '双人靠窗', value: 2 },
                  { label: '单人区靠窗', value: 3 },
                ]}
                allowClear
              />
            </FormItem>
            <span>桌子数量：20</span>
            <span>1.当前区域名称：单人明区</span>
            <FormItem
              label="新的区域名称"
              field="newName"
              rules={[{ required: true, message: 'username is required' }]}
            >
              <Input placeholder="please enter..." />
            </FormItem>
            <span>2.当前区域名称描述：我是一段放飞自我，并且可以五彩斑斓的白碾压五光十色的</span>
            <FormItem
              label="新的区域描述"
              field="newDescript"
              rules={[{ required: true, message: 'username is required' }]}
            >
              <Input placeholder="please enter..." />
            </FormItem>
            <span>3.当前价格：18.8/h</span>
            <FormItem
              label="新的价格设定"
              field="newPrice"
              rules={[{ required: true, message: 'username is required' }]}
            >
              <Input placeholder="please enter..." addAfter="/h" />
            </FormItem>
            <FormItem
              wrapperCol={{
                offset: 7,
              }}
            >
              <Button type="primary" htmlType="submit">
                确认修改
              </Button>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  );
}

export default RegionalManagement;
