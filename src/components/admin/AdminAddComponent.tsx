import {IProduct} from "../../types/product.ts";
import {ChangeEvent, useCallback, useState} from "react";

const initState:IProduct = {
    pname: '',
    pdesc: '',
    price: 0,
    keyword: '',

}

function AdminAddComponent() {

    const [recipe, setRecipe] = useState<IProduct>({...initState});

    const handleChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        // react는 1way이므로 input 처리할때 state를 따로따로 만들어줘야하므로 이러한 방법을 사용하지않고, 하나의 객체로 사용하기 위해서 해당 이벤트를 사용한다.

        // @ts-ignore
        recipe[e.target.name] = e.target.value
        setRecipe({...recipe})
        console.log(recipe)
    },[])

    const handleClickAdd = () => {
        console.log(recipe)
    }



    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-1/2 h-4/5 p-4">
                <aside className="h-3/4 p-4 bg-yellow-200 rounded-lg flex flex-col items-center justify-between">
                    <p className='font-bold'>List Sidebar</p>
                    <ul className="flex flex-col items-center w-full">

                        <li className="mb-4 w-full">
                            <label htmlFor="name" className="block mb-1">Name</label>
                            <input
                                type='text'
                                name='pname'
                                className="p-2 border rounded w-full"
                                value={recipe.pname}
                                onChange={e => handleChange(e)}/>
                        </li>

                        <li className="mb-4 w-full">
                            <label htmlFor="pdesc" className="block mb-1">Description</label>
                            <textarea
                                name='pdesc'
                                className="p-2 border rounded w-full h-32 resize-none"
                                value={recipe.pdesc}
                                onChange={e => handleChange(e)}/>
                        </li>

                        <li className="mb-4 w-full">
                            <label htmlFor="price" className="block mb-1">Price</label>
                            <input
                                type='text'
                                name='price'
                                className="p-2 border rounded w-full"
                                value={recipe.price}
                                onChange={e => handleChange(e)}/>
                        </li>

                        <li className="mb-4 w-full">
                            <label htmlFor="keyword" className="block mb-1">Keyword</label>
                            <input type='text'
                                   name='keyword'
                                   className="p-2 border rounded w-full"
                                   value={recipe.keyword}
                                   onChange={e => handleChange(e)}/>
                        </li>

                    </ul>

                    <div className="flex justify-end w-full">
                        <button className="bg-green-600 text-white hover:bg-green-700 transition duration-300 py-2 px-4 rounded-md"
                        onClick={() => handleClickAdd()}>
                            ADD
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default AdminAddComponent;
