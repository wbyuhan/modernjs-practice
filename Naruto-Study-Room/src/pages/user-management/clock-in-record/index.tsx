import {
  PageHeader,
  Card,
  Space,
  Descriptions,
  Form,
  Button,
  Table,
  DatePicker,
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
const { YearPicker, MonthPicker } = DatePicker;
function ClockInRecord(props) {
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
      title: '打卡',
      dataIndex: 'clockArea',
    },
    {
      title: '打卡日期',
      dataIndex: 'clockTime',
    },
    {
      title: '支付方式',
      dataIndex: 'payStyle',
    },
    {
      title: '开始时间',
      dataIndex: 'beginTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
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
            <FormItem label="年份" field="year">
              <YearPicker style={{ width: 200 }} />
            </FormItem>
            <FormItem colon label="月份" field="month">
              <MonthPicker style={{ width: 200 }} />
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
          renderPagination={(paginationNode) => (
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              <Space>
                <span>当前累计打卡时长：30h</span>
              </Space>
              {paginationNode}
            </div>
          )}
        />
      </Card>
    </div>
  );
}

export default ClockInRecord;
