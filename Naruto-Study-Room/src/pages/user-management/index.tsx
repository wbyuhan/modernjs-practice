/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Table,
  Typography,
  Button,
  DatePicker,
  Card,
  Form,
  Input,
  PageHeader,
} from '@arco-design/web-react';
import { managermentsListRequest } from '../../service/Apis';

import styles from './style/index.module.less';

const FormItem = Form.Item;

type paginationType = {
  sizeCanChange: boolean;
  showTotal: boolean;
  pageSize: number;
  current: number;
  pageSizeChangeResetCurrent: boolean;
};

const paginationInit: paginationType = {
  sizeCanChange: true,
  showTotal: true,
  pageSize: 10,
  current: 1,
  pageSizeChangeResetCurrent: true,
};
function UserManagement() {
  const [form] = Form.useForm();
  // hooks
  const [loading, setLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<[]>([]);
  const [pagination, setPagination] = useState<paginationType>(paginationInit);
  // handlebars

  const onChangeTable = (paginationValue) => {
    const { current, pageSize } = paginationValue;
    console.log(pageSize);
    console.log(current);
  };

  const init = async () => {
    setLoading(true);
    const result: Response | any = await managermentsListRequest();
    const { status, data } = result;
    if (status === 200) {
      setLoading(false);
      setTableData(data.list);
      // setPagination((val) => ({...val,}))
    }
  };

  useEffect(() => {
    init();
  }, []);

  const columns = [
    {
      title: '用户ID',
      dataIndex: 'userId',
    },
    {
      title: '用户名称',
      dataIndex: 'userName',
      render: (value) => <Typography.Text copyable>{value}</Typography.Text>,
    },
    {
      title: '用户手机号',
      dataIndex: 'userTel',
      render: (value) => <Typography.Text copyable>{value}</Typography.Text>,
    },
    {
      title: '用户注册时间',
      dataIndex: 'registrationTime',
    },
    {
      title: '账户余额',
      dataIndex: 'accountBalance',
      sorter: (a, b) => a - b,
    },
    {
      title: '累计学习时长',
      dataIndex: 'studyTime',
      sorter: (a, b) => a - b,
    },
    {
      title: '可用兑换时长',
      dataIndex: 'duration',
      sorter: (a, b) => a - b,
    },
    {
      title: '点击查看',
      dataIndex: 'operations',
      render: () => (
        <div className={styles.operations}>
          <Button type="text" size="small">
            用户卡券
          </Button>
          <Button type="text" size="small">
            打卡记录
          </Button>
        </div>
      ),
    },
  ];
  return (
    <div className={styles.container}>
      <PageHeader
        style={{ background: 'var(--color-bg-2)' }}
        title="ArcoDesign"
        subTitle="This is a description"
        breadcrumb={{
          routes: [
            {
              path: '/manage',
              breadcrumbName: '用户管理',
            },
            {
              path: '/manage/user-manage',
              breadcrumbName: '用户列表',
            },
          ],
        }}
      />
      <Card bordered={false}>
        <Form
          form={form}
          style={{ width: '100%' }}
          layout="inline"
          onSubmit={(v) => {
            console.log(v);
          }}
        >
          <FormItem colon label="用户ID" field="userId">
            <Input placeholder="请输入用户id" />
          </FormItem>
          <FormItem colon label="用户名称" field="userName">
            <Input placeholder="请输入用户名称" />
          </FormItem>
          <FormItem colon label="用户手机号" field="userTel">
            <Input placeholder="请输入用户手机号" />
          </FormItem>
          <FormItem
            colon
            label="用户注册时间"
            extra="请输入用户注册时间"
            field="date"
            rules={[
              {
                required: true,
                message: '请输入用户注册时间',
              },
            ]}
            normalize={(value) => {
              return { begin: value && value[0], end: value && value[1] };
            }}
            formatter={(value) => {
              return value && value.begin ? [value.begin, value.end] : [];
            }}
          >
            <DatePicker.RangePicker />
          </FormItem>
          <FormItem wrapperCol={{ offset: 20 }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </FormItem>
        </Form>
        <Table
          rowKey="userId"
          loading={loading}
          onChange={onChangeTable}
          pagination={pagination}
          columns={columns}
          data={tableData}
        />
      </Card>
    </div>
  );
}

export default UserManagement;
