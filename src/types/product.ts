
export interface IProduct {

    pno: number
    pname: string
    pdesc: string
    price: number
    keyword?: string
    uploadFileNames?: string[]
}

export interface IProducts {

    dtoList: IProduct[]
}