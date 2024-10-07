import axios from "axios";
import {IProduct, IProducts} from "../types/product.ts";


const host = 'http://1.255.178.102:8089/api/products'


export const getSearchedList = async (query: string): Promise<IProducts> => {

    const res = await axios.get<IProducts>(`${host}/list?keyword=${query}`)

    return res.data
}


export const getOne = async (pno: string | undefined): Promise<IProduct> => {

    const res = await axios.get<IProduct>(`${host}/${pno}`)

    return res.data
}

export const postProduct = async (formData: IProduct): Promise<number> => {

    const res = await axios.post(`${host}/`, formData)

    console.log("postProduct", res)

    return Number(res.data)
}

export const getList = async (): Promise<IProducts> => {

    const res = await axios.get<IProducts>(`${host}/list`)
    console.log(res.data)
    return res.data

}