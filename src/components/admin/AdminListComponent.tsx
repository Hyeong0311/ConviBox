import {useEffect, useState} from "react";
import {IProduct} from "../../types/product.ts";
import {getList} from "../../api/productAPI.ts";

function AdminListComponent() {

    const [selectPrice, setSelectPrice] = useState("option0");
    const [itemList, setItemList] = useState<IProduct[]>([]);
    const [Productdesc, setProductDesc] = useState("");

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

    const handleClickDesc = (item:IProduct) => {
        setProductDesc(item.pdesc)
        console.log(Productdesc)
    }




    return (
        <div className="w-1/4 h-full p-4">
            <aside className="h-1/8 p-4 bg-yellow-100 mb-4 rounded-lg">
                <p className='font-bold'>가격선택</p>
                <select
                    className="p-2 border rounded w-full"
                    value={selectPrice}
                    onChange={(e) => setSelectPrice(e.target.value)} // 선택 변경 시 상태 업데이트
                >
                    <option value="option0">3천원 이하</option>
                    <option value="option1">5천원 이하</option>
                    <option value="option2">1만원 이하</option>
                    <option value="option3">1만원 이상</option>
                </select>
            </aside>

            <aside className="h-3/4 p-4 bg-yellow-200 rounded-lg flex flex-col items-center justify-center">
                <p className='font-bold'>List Sidebar</p>
                <ul className="flex flex-col items-center">
                    {itemList.length > 0 ? (
                        itemList.map((item) => (
                            <li key={item.pno} onClick={() => handleClickDesc(item)}>{item.pname}</li>
                        ))
                    ) : (
                        <li>No items found</li>
                    )}
                </ul>
            </aside>
        </div>
    );
}

export default AdminListComponent;