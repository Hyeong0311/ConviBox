import axios from "axios";


const host = 'http://1.255.178.102:8089/api/products'


export const getSearchedList = async (query: string | undefined) => {

    const res = await axios.get(`${host}/list?query=${query}`)

    return res.data
}