import { ReactElement } from "react";
import MyCartComponent from "../../components/user/MyCartComponent.tsx";

function MyCartPage(): ReactElement {
    return (
        <div className="w-full max-w-xl mx-auto mt-10 p-5 space-y-6">
            <h1 className="text-center text-3xl font-bold">나의 레시피 장바구니</h1>
            <MyCartComponent/>
            <button className="w-full py-3 bg-yellow-500 text-white rounded-lg">결제하기</button>
        </div>
    );
}

export default MyCartPage;
