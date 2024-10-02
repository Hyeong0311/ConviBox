import {ReactElement, useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {getSearchedList} from "../../api/productAPI.ts";
import {IProduct, IProducts} from "../../types/product.ts";
import LoadingComponent from "../../common/LoadingComponent.tsx";


const initialState: IProducts = {

    dtoList: []
}


function SearchProductListComponent(): ReactElement {

    const [searchParams] = useSearchParams()
    const [loading, setLoading] = useState<boolean>(false)
    const [product, setProduct] = useState<IProducts>({...initialState})

    const query: string = searchParams.get("query") || ""

    useEffect(() => {

        setLoading(true)

        getSearchedList(query).then(product => {

            setProduct(product)
            setLoading(false)
        })
    }, [query])


    return (
        <div>
            {loading && <LoadingComponent></LoadingComponent>}

            <div className="w-full max-w-lg mx-auto mt-10 space-y-6">
                {product.dtoList.map((item: IProduct) => (
                    <div
                        key={item.pno}
                        className="flex items-center space-x-5 bg-white p-5 rounded-full shadow-lg"
                    >
                        {/* 이미지 박스 (임시 회색 배경) */}
                        <div className="h-24 w-24 bg-gray-200 rounded-full"></div>

                        {/* 제품 정보 */}
                        <div className="flex-1">
                            <div className="font-bold text-xl">{item.pname}</div>
                            <div className="text-gray-500 text-lg">{item.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchProductListComponent;