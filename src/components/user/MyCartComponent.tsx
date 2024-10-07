import { ReactElement, useEffect, useState } from "react";

interface CartItem {
    pname: string;
    price: number;
    pdesc: string;
}

function MyCartComponent(): ReactElement {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // 로컬 스토리지에서 장바구니 정보를 가져옴
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCartItems(storedCart);
    }, []);

    return (
        <div className="w-full max-w-xl mx-auto mt-10 p-5 space-y-6">
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-md space-y-3">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className="font-bold">{item.pname}</div>
                                <div className="text-gray-500">{item.pdesc}</div>
                            </div>
                            <div className="text-xl font-bold">{item.price}원</div>
                        </div>
                        <button className="text-red-500 font-bold">-</button>
                    </div>
                ))
            ) : (
                <div className="text-center text-gray-500">장바구니가 비어 있습니다.</div>
            )}
        </div>
    );
}

export default MyCartComponent;
