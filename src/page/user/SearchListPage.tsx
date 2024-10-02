import {ReactElement} from "react";
import SearchProductListComponent from "../../components/user/SearchProductListComponent.tsx";

function SearchListPage(): ReactElement {
    return (

        <div>
            <div>Search List Page</div>
            <SearchProductListComponent></SearchProductListComponent>
        </div>

    );
}

export default SearchListPage;