import { ReactElement, useState, useEffect } from "react";
import MyCartComponent from "../../components/user/MyCartComponent.tsx";

function MyCartPage(): ReactElement {
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const total = storedCart.reduce((acc: number, item: { price: number }) => acc + item.price, 0);
        setTotalPrice(total);
    }, []);

    return (
        <div className="w-full max-w-xl mx-auto mt-10 p-5 space-y-6">
            <h1 className="text-center text-3xl font-bold">나의 레시피 장바구니</h1>
            <MyCartComponent/>
            <div className="text-lg font-bold">합계: {totalPrice}원</div>
            <button className="w-full py-3 bg-yellow-500 text-white rounded-lg">결제하기</button>
        </div>
    );
}

export default MyCartPage;
