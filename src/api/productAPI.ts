import axios from "axios";
import {IProducts} from "../types/product.ts";


const host = 'http://1.255.178.102:8089/api/products'


export const getSearchedList = async (query: string): Promise<IProducts> => {

    const res = await axios.get<IProducts>(`${host}/list?query=${query}`)

    return res.data
}