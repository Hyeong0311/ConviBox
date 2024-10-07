
export interface IProduct {
    image: any
    pno: number | null
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
    pno: number;
    product: IProduct;
}