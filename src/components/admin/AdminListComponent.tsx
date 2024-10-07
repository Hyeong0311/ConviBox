import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; // Redux Dispatch 가져오기
import { IProduct } from "../../types/product.ts";
import { getList } from "../../api/productAPI.ts";
import { setRecipeName, setDescription, setPrice, setKeywords } from "../../productSlice"; // 액션 임포트

function AdminListComponent() {
    const dispatch = useDispatch(); // Dispatch 초기화
    const [selectPrice, setSelectPrice] = useState("option0");
    const [itemList, setItemList] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchItems = async() => {
            const data = await getList();

            const filterItems = data.dtoList.filter((result) => {
                switch (selectPrice) {
                    case "option0":
                        return result.price <= 3000;
                    case "option1":
                        return result.price >= 3000 && result.price < 5000;
                    case "option2":
                        return result.price >= 5000 && result.price < 10000;
                    case "option3":
                        return result.price >= 10000;
                    default:
                        return true;
                }
            });
            setItemList(filterItems);
        };
        fetchItems();
    }, [selectPrice]);

    const handleClickDesc = (item: IProduct) => {
        dispatch(setDescription(item.pdesc)); // 설명 저장
        dispatch(setRecipeName(item.pname)); // 이름 저장
        dispatch(setPrice(item.price.toString())); // 가격 저장
        if (item.keyword != null) {
            dispatch(setKeywords(item.keyword));
        } // 키워드 저장 (필요한 경우)
        console.log(item.pdesc); // 콘솔 출력
    };

    return (
        <div className="w-1/4 h-full p-4">
            {/* 가격선택 부분 */}
            <aside className="h-1/8 p-4 bg-[#f8c300] mb-4 rounded-2xl shadow-lg">
                <p className='font-bold text-gray-800 text-lg'>가격선택</p>
                <select
                    className="p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
                    value={selectPrice}
                    onChange={(e) => setSelectPrice(e.target.value)}
                >
                    <option value="option0">3천원 이하</option>
                    <option value="option1">5천원 이하</option>
                    <option value="option2">1만원 이하</option>
                    <option value="option3">1만원 이상</option>
                </select>
            </aside>

            {/* 리스트 사이드바 */}
            <aside className="h-3/4 p-4 bg-[#ffb400] rounded-2xl shadow-lg flex flex-col items-center justify-center">

                {/* 스크롤 가능 리스트 */}
                <ul className="flex flex-col items-center w-full space-y-3 overflow-y-scroll h-full p-2">
                    {itemList.length > 0 ? (
                        itemList.map((item) => (
                            <li
                                key={item.pno}
                                onClick={() => handleClickDesc(item)}
                                className="w-full p-3 bg-white rounded-xl shadow-lg text-gray-800 cursor-pointer text-center transition-all transform hover:scale-105 hover:bg-[#f8c300] hover:shadow-xl hover:text-white"
                            >
                                {item.pname}
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-500">No items found</li>
                    )}
                </ul>
            </aside>
        </div>
    );
}

export default AdminListComponent;
