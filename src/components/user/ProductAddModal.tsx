import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";  // useNavigate import

interface ProductAddModalProps {
    message: string;
    isOpen: boolean;
    onClose: () => void;
}

function ProductAddModal({ message, isOpen, onClose }: ProductAddModalProps): ReactElement | null {
    const navigate = useNavigate();  // useNavigate 훅 사용

    if (!isOpen) return null; // 모달이 열리지 않았으면 아무것도 렌더링하지 않음

    const handleConfirm = () => {
        onClose();  // 모달 닫기
        navigate("/cart");  // 카트 페이지로 이동
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-96">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{message}</h2>

                    <button
                        className="bg-[#f8c300] text-white py-2 px-6 rounded-full font-semibold hover:bg-yellow-600 transition duration-200"
                        onClick={handleConfirm}  // 확인 버튼 클릭 시 handleConfirm 실행
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductAddModal;
