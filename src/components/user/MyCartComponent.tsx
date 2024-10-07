import { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // useNavigate import

interface CartItem {
    pname: string;
    price: number;
    pdesc: string;
    pno: string;  // 레시피 상세 페이지로 이동하기 위한 pno 필드 추가
}

function MyCartComponent(): ReactElement {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    const navigate = useNavigate();  // useNavigate 사용

    // 로컬 스토리지에서 장바구니 정보를 가져옴
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart);
    }, []);

    // 특정 아이템을 삭제하는 함수
    const handleRemoveItem = (index: number) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);  // 해당 인덱스의 아이템을 제외한 새로운 배열 생성
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));  // 로컬 스토리지에 업데이트된 장바구니 정보 저장
    };

    // 레시피 디테일 페이지로 이동하는 함수
    const handleRecipeClick = (pno: string) => {
        navigate(`/recipe/${pno}`);  // 해당 pno의 레시피 디테일 페이지로 이동
    };

    return (
        <div className="w-full max-w-xl mx-auto mt-10 p-5 space-y-6">
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-md space-y-3">
                        <div className="flex justify-between items-center">
                            {/* 좌측에 상품명 및 설명 */}
                            <div>
                                <div
                                    className="font-bold cursor-pointer"  // 클릭 가능하게 스타일 추가
                                    onClick={() => handleRecipeClick(item.pno)}  // 클릭 시 레시피 디테일로 이동
                                >
                                    {item.pname}
                                </div>
                                <div className="text-gray-500">{item.pdesc}</div>
                            </div>

                            {/* 우측에 가격과 삭제 버튼 */}
                            <div className="flex items-center space-x-4">
                                <div className="text-xl font-bold">{item.price}원</div>
                                <button
                                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className="text-center text-gray-500">장바구니가 비어 있습니다.</div>
            )}
        </div>
    );
}

export default MyCartComponent;
