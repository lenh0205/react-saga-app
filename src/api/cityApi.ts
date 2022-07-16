import { ListResponse, City } from 'models';
import axiosClient from './axiosClient';

const cityApi = {
    getAll(): Promise<ListResponse<City>> {
        const url = '/cities'
        return axiosClient.get(url, { params: {
            _page: 1,
            _limit: 10,
        } })
    } 
    // nó là Promise của 1 response, list response này có kiểu dữ liệu là City 
    // vậy cái ta muốn trả về sẽ là 1 Object gồm 2 key data, pagination; data đó là 1 mảng các City
}

export default cityApi