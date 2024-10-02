import {ReactElement} from "react";
import ProductListComponent from "../../components/user/ProductListComponent.tsx";
import MainLayout from "../../layout/MainLayout.tsx";

function MainPage():ReactElement {
    return (
        <>
            <MainLayout><></></MainLayout>
            <ProductListComponent></ProductListComponent>
        </>

    );
}

export default MainPage;