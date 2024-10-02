import MainComponent from "../../components/user/MainComponent.tsx";
import MainLayout from "../../layout/MainLayout.tsx";

function MainPage() {
    return (
        <>
            <MainLayout /> {/* 헤더 컴포넌트 */}
            <div>
                <h1>Main Page</h1>
                <MainComponent /> {/* 본문 컴포넌트 */}
            </div>
        </>
    );
}

export default MainPage;
