import {ReactElement} from "react";
import MainLayout from "../../layout/MainLayout.tsx";
import SearchProductListComponent from "../../components/user/SearchProductListComponent.tsx";

function SearchListPage(): ReactElement {
    return (
        <>
            <MainLayout></MainLayout>
            <div>Search List Page</div>
            <SearchProductListComponent></SearchProductListComponent>
        </>

    );
}

export default SearchListPage;