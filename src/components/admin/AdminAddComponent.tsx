import {IProduct} from "../../types/product.ts";
import {ChangeEvent, useCallback, useRef, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import {postProduct} from "../../api/productAPI.ts";

const initState:IProduct = {
    pname: '',
    pdesc: '',
    price: '',
    keyword: '',

}

function AdminAddComponent() {

    const [recipe, setRecipe] = useState<IProduct>({...initState});
    const filesRef = useRef<HTMLInputElement>(null) // id,name을 사용하는 대신에

    const addMutation = useMutation({mutationFn:(formData) => postProduct(formData)})

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        // 상태 업데이트
        setRecipe((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) || 0 : value, // 가격을 숫자로 변환
        }));
    }, []);

    const handleClickAdd = () => {
        console.log(recipe)

        const files = filesRef?.current?.files // 등록한 파일에 대한 정보

        const formData = new FormData() // 파일 업로드와 텍스트 데이터를 동시에 처리하기위해 일반적인 json객체를 사용할 수 없다.


        formData.append("pname", recipe.pname)
        formData.append("pdesc", recipe.pdesc)
        formData.append("pdesc", recipe.pdesc)
        formData.append("keyword", recipe.keyword || '')

        if(files) {
            for (let i = 0; i < files.length; i++) {
                formData.append("files", files[i])
            }
        }

        addMutation.mutate(formData)

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

                        <li className="mb-4 w-full">
                            <label htmlFor="files" className="block mb-1">files</label>
                            <input type='file' ref={filesRef} name='files' multiple={true}/>
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
