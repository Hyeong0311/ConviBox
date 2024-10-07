
export interface IProduct {
    pno: number
    pname: string
    pdesc: string
    price: number
    keyword?: string
    uploadFileNames?: string[]
    files?: File[]
}

export interface IProducts {

    dtoList: IProduct[]
}

export interface IRootState {
    product: IProduct;
}