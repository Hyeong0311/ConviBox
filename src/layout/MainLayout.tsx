import React, {startTransition, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // 경로 확인 및 navigate 사용을 위해 import
import SearchModalComponent from "../components/user/SearchModalComponent.tsx";

function MainLayout({ children }: { children: React.ReactNode }) {
    const [modalOpen, setModalOpen] = useState(false);
    const location = useLocation(); // 현재 경로 가져오기
    const navigate = useNavigate();  // 페이지 이동을 위한 navigate
    const clickadmin = () => {
        startTransition(() => {
            navigate('/admin');
        });
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const goMainClick = () => {

        navigate({

            pathname: '/'
        })
    }

    const goToCart = () => {
        navigate('/cart');
    };

    const goBack = () => {
        navigate(-1);  // 뒤로가기 기능
    };

    return (
        <>
            {modalOpen && <SearchModalComponent onClose={closeModal}></SearchModalComponent>}

            <header className="bg-[#f9bd03] flex items-center justify-between px-4 py-3">
                {/* 뒤로가기 버튼과 Admin 버튼 */}
                <div className="flex items-center space-x-2">
                    <img
                        src="/weui--back-filled.svg"
                        alt="뒤로가기"
                        style={{width: '48px', height: '48px', cursor: 'pointer'}}
                        onClick={goBack}  // 뒤로가기 클릭 시 이전 페이지로 이동
                    />

                    {/* 현재 경로가 "/"(MainPage)일 때만 admin 버튼 보여주기 */}
                    {location.pathname === "/" && (
                        <button
                            className="bg-[#f8c300] text-white px-3 py-1 rounded"
                            onClick={clickadmin}
                        >
                            Admin
                        </button>
                    )}
                </div>

                {/* 중앙 로고 및 텍스트 */}
                <div className="text-left" onClick={goMainClick} style={{cursor: 'pointer'}}>
                    <h1 className="text-white text-3xl font-bold">ConviBox</h1>
                    <p className="text-white text-sm">편의점 재료로 완성하는 우리의 레시피</p>
                </div>

                {/* 검색 및 카트 아이콘 */}
                <div className="flex items-center space-x-4">
                    <img src="/fluent--box-search-24-regular.svg"
                         alt="검색"
                         onClick={openModal}
                         style={{width: '48px', height: '48px', cursor: 'pointer'}}/>
                    <img src="/ion--cart-outline.svg"
                         alt="카트"
                         onClick={goToCart}
                         style={{width: '48px', height: '48px', cursor: 'pointer'}}/>
                </div>
            </header>

            <div className='flex w-full h-full'>
                <main className="flex-1 p-4">{children}</main>
            </div>
        </>
    );
}

export default MainLayout;
