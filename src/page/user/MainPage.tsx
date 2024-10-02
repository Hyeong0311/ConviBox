// import MainLayout from "../../layout/MainLayout.tsx";
import ProductListComponent from "../../components/user/ProductListComponent.tsx";

function MainPage() {
    return (
        <>
            {/*<MainLayout /> /!* 헤더 컴포넌트 *!/*/}
            <div>
                <h1>Main Page</h1>
                <ProductListComponent /> {/* 본문 컴포넌트 */}
            </div>
        </>
    );
}

export default MainPage;
