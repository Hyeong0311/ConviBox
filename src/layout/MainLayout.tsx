import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // 경로 확인을 위해 import
import SearchModalComponent from "../components/user/SearchModalComponent.tsx";

const MainLayout: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const location = useLocation(); // 현재 경로 가져오기

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <>
            {modalOpen && <SearchModalComponent onClose={closeModal}></SearchModalComponent>}

            <header className="bg-[#f9bd03] flex items-center justify-between px-4 py-3">
                {/* 뒤로가기 버튼과 Admin 버튼 */}
                <div className="flex items-center space-x-2"> {/* 버튼 간 간격 설정 */}
                    <img src="/weui--back-filled.svg" alt="뒤로가기" style={{ width: '24px', height: '24px' }} />

                    {/* 현재 경로가 "/"(MainPage)일 때만 admin 버튼 보여주기 */}
                    {location.pathname === "/" && (
                        <button
                            className="bg-blue-500 text-white px-3 py-1 rounded"
                            onClick={() => window.location.href = "/admin"} // admin 페이지로 이동
                        >
                            Admin
                        </button>
                    )}
                </div>

                {/* 중앙 로고 및 텍스트 */}
                <div className="text-center">
                    <h1 className="text-white text-3xl font-bold">ConviBox</h1>
                    <p className="text-white text-sm">편의점 재료로 완성하는 우리의 레시피</p>
                </div>

                {/* 검색 및 카트 아이콘 */}
                <div className="flex items-center space-x-4">
                    <img src="/fluent--box-search-24-regular.svg" alt="검색" onClick={openModal} style={{ width: '24px', height: '24px' }} />
                    <img src="/ion--cart-outline.svg" alt="카트" style={{ width: '24px', height: '24px' }} />
                </div>
            </header>
        </>
    );
};

export default MainLayout;
