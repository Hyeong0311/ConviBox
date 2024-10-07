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

    const res = await axios.get<IProducts>(`${host}/list?page=1&size=100`)
    console.log(res.data)
    return res.data

}

export const deleteOne = async (mno:number): Promise<{result:string}> => { // postman에서 삭제를 했을때 result:success라고 api에서 미리 설정되어있음

    const res = await axios.delete(`${host}/${mno}`)

    return res.data
}