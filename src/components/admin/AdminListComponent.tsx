import {useEffect, useState} from "react";
import {IProduct} from "../../types/product.ts";
import {getList} from "../../api/productAPI.ts";
import {useDispatch} from "react-redux";
import {setSelectedItem} from "../../slice/ProductSlice.ts";

function AdminListComponent() {

    const [selectPrice, setSelectPrice] = useState("option0");
    const [itemList, setItemList] = useState<IProduct[]>([]);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchItems = async() => {
            const data = await getList();

            const filterItems = data.dtoList.filter((result) => {
                switch (selectPrice) {
                    case "option0":
                        return result.price <= 3000
                    case "option1":
                        return result.price >= 3000 && result.price < 5000;
                    case "option2":
                        return result.price >= 5000 && result.price < 10000;
                    case "option3":
                        return result.price >= 10000;
                    default:
                        return true;
                }
            })
            setItemList(filterItems)
        }
        fetchItems()
    }, [selectPrice]);

    const handleClickItem = (item: IProduct) => {
        // 선택된 아이템을 스토어에 저장
        dispatch(setSelectedItem({
            name: item.pname,
            desc: item.pdesc,
            price: item.price,
            keyword: item.keyword,
            image: item.image
        }));
    };




    return (
        <div className="w-1/4 h-full p-4">
            {/* 가격선택 부분 */}
            <aside className="h-1/8 p-4 bg-[#f8c300] mb-4 rounded-2xl shadow-lg">
                <p className='font-bold text-gray-800 text-lg'>가격선택</p>
                <select
                    className="p-3 border border-gray-300 rounded-xl w-full focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
                    value={selectPrice}
                    onChange={(e) => setSelectPrice(e.target.value)} // 선택 변경 시 상태 업데이트
                >
                    <option value="option0">3천원 이하</option>
                    <option value="option1">5천원 이하</option>
                    <option value="option2">1만원 이하</option>
                    <option value="option3">1만원 이상</option>
                </select>
            </aside>

            {/* 리스트 사이드바 */}
            <aside className="h-3/4 p-4 bg-[#ffb400] rounded-2xl shadow-lg flex flex-col items-center justify-center">
                <p className='font-bold text-gray-800 text-lg mb-4'>List Sidebar</p>

                {/* 스크롤 가능 리스트 */}
                <ul className="flex flex-col items-center w-full space-y-3 overflow-y-scroll h-full p-2">
                    {itemList.length > 0 ? (
                        itemList.map((item) => (
                            <li
                                key={item.pno}
                                onClick={() => handleClickItem(item)}
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