import {
  PageHeader,
  Card,
  Space,
  Descriptions,
  Form,
  Button,
  Table,
  Select,
} from '@arco-design/web-react';
import React, { useEffect, useState } from 'react';
import { managermentsListRequest } from '../../../service/Apis';
import { paginationInit, PaginationType } from '../../../utils/defaultPagunation';
import styles from '../style/index.module.less';

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};

function CardVoucher(props) {
  const {
    location: {
      search: { userId },
    },
  } = props;
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
          label: '用户ID',
          value: userId,
        },
        {
          label: '用户手机',
          value: total,
        },
      ];
      setDescriptions(resouce);
      setPagination((val) => ({ ...val, total }));
    }
  };

  useEffect(() => {
    init();
  }, [userId]);

  const columns = [
    {
      title: '区域',
      dataIndex: 'area',
    },
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '卡券获得时间',
      dataIndex: 'getTime',
    },
    {
      title: '卡券过期时间',
      dataIndex: 'endTime',
    },
    {
      title: '卡券状态',
      dataIndex: 'status',
    },
    {
      title: '卡券获得渠道',
      dataIndex: 'channel',
    },
    {
      title: '支付金额',
      dataIndex: 'price',
    },
  ];

  return (
    <div className={styles.container}>
      <PageHeader
        style={{ background: 'var(--color-bg-2)' }}
        title="用户管理"
        subTitle="用户卡券"
        breadcrumb={{
          routes: [
            {
              path: '/manage/user-manage',
              breadcrumbName: '用户列表',
            },
            {
              path: '/manage/card-voucher',
              breadcrumbName: '用户管理',
            },
          ],
        }}
      />

      <Card bordered={false}>
        <Space style={{ width: '100%', justifyContent: 'space-between' }}>
          <Descriptions colon=" :" column={2} layout="inline-horizontal" data={descriptions} />
          <Form
            form={form}
            {...formItemLayout}
            layout="inline"
            onSubmit={(v) => {
              console.log(v);
            }}
          >
            <FormItem label="区域" field="area">
              <Select
                style={{ width: '194px' }}
                options={[
                  { label: '全部', value: 'a' },
                  { label: 'A区', value: 'b' },
                  { label: 'B区', value: 'c' },
                ]}
                allowClear
              />
            </FormItem>
            <FormItem colon label="渠道" field="channel">
              <Select
                style={{ width: '194px' }}
                placeholder="please select"
                options={[
                  { label: '全部', value: 'a' },
                  { label: '美团', value: 'b' },
                  { label: '饿了么', value: 'c' },
                  { label: '支付宝', value: 'd' },
                  { label: '微信', value: 'e' },
                ]}
                allowClear
              />
            </FormItem>
            <FormItem wrapperCol={{ offset: 0 }}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </FormItem>
          </Form>
        </Space>
      </Card>
      <Card bordered={false}>
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

export default CardVoucher;
