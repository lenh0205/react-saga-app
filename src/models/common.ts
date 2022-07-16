export interface PaginationParams {
    _limit: number;
    _page: number;
    _total: number;
}

// khi s/d json-server, khi request get 1 list dữ liệu thì nó luôn trả về chung 1 format {data: , pagination: }
export interface ListResponse<T> {
    data: T[];
    pagination: PaginationParams;
}
// lưu ý khi ta GET all dữ liệu thì không có pagination -> ta cần get  baseUrl/something?_limit=10&_page=1 thì mới có data, pagination