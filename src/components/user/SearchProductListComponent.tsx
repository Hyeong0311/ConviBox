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

    const listLI = product.dtoList?.map((item: IProduct) => {

        return (
            <li key={item.pno}>{item.pname} - {item.pdesc} - {item.price}</li>
        )
    })


    return (
        <div>
            {loading && <LoadingComponent></LoadingComponent>}

            <ul>
                {listLI}
            </ul>
        </div>
    );
}

export default SearchProductListComponent;