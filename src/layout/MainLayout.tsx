import React from 'react';

const MainLayout: React.FC = () => {
    return (
        <header className="bg-[#f9bd03] flex items-center justify-between px-4 py-3">
            {/* 뒤로가기 버튼 */}
            <div className="flex items-center">
                <img src="../../public/weui--back-filled.svg" alt="뒤로가기" style={{ width: '24px', height: '24px' }} />
            </div>

            {/* 중앙 로고 및 텍스트 */}
            <div className="text-center">
                <h1 className="text-white text-3xl font-bold">ConviBox</h1>
                <p className="text-white text-sm">편의점 재료로 완성하는 우리의 레시피</p>
            </div>

            {/* 검색 및 카트 아이콘 */}
            <div className="flex items-center space-x-4">
                <img src="../../public/fluent--box-search-24-regular.svg" alt="검색" style={{ width: '24px', height: '24px' }} />
                <img src="../../public/ion--cart-outline.svg" alt="카트" style={{ width: '24px', height: '24px' }} />
            </div>
        </header>
    );
};

export default MainLayout;
