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
  Descriptions,
} from '@arco-design/web-react';
import { managermentsListRequest } from '../../service/Apis';

import styles from './style/index.module.less';
import { PaginationType, paginationInit } from '../../utils/defaultPagunation';

const FormItem = Form.Item;

function UserManagement() {
  const [form] = Form.useForm();
  // hooks
  const [loading, setLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<[]>([]);
  const [pagination, setPagination] = useState<PaginationType>(paginationInit);
  const [descriptions, setDescriptions] = useState<{ label: string; value: number | string }[]>([]);
  // handlebars

  const onChangeTable = (paginationValue) => {
    const { current, pageSize } = paginationValue;
    console.log(pageSize);
    console.log(current);
  };

  const init = async () => {
    setLoading(true);
    const result: Response | any = await managermentsListRequest();
    const {
      status,
      data: { total, list },
    } = result;

    if (status === 200) {
      setLoading(false);
      setTableData(list);
      const resouce = [
        {
          label: '总用户数',
          value: total,
        },
        {
          label: '今日新增用户',
          value: total,
        },
        {
          label: '7天新增用户',
          value: total,
        },
        {
          label: '30天新增用户数',
          value: total,
        },
      ];
      setDescriptions(resouce);
      setPagination((val) => ({ ...val, total }));
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
        title="用户管理"
        subTitle="用户列表"
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
      <Card bordered={false} style={{ paddingRight: '50%' }}>
        <Descriptions colon=" :" column={4} layout="inline-horizontal" data={descriptions} />
      </Card>
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
            wrapperCol={{
              span: 7,
              offset: 0,
            }}
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
            <DatePicker.RangePicker style={{ width: '310px' }} />
          </FormItem>
          <FormItem wrapperCol={{ offset: 0 }}>
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
