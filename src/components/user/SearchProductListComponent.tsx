import {ReactElement} from "react";
import {useParams} from "react-router-dom";
import {getSearchedList} from "../../api/productAPI.ts";


function SearchProductListComponent(): ReactElement {

    const {query} = useParams()

    getSearchedList(query).then(product => {

        console.log(product)
    })


    return (
        <div>

        </div>
    );
}

export default SearchProductListComponent;