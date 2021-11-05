export interface PaginationType {
  sizeCanChange: boolean;
  showTotal: boolean;
  pageSize: number;
  current: number;
  total: number;
  pageSizeChangeResetCurrent: boolean;
}

export const paginationInit: PaginationType = {
  sizeCanChange: true,
  showTotal: true,
  pageSize: 10,
  total: 0,
  current: 1,
  pageSizeChangeResetCurrent: true,
};
