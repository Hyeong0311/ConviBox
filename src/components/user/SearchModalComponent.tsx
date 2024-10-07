import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoadingComponentProps {
    onClose: () => void;
}

function SearchModalComponent({ onClose }: LoadingComponentProps): ReactElement {
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        setSearchKeyword(value);
    };

    const handleClick = () => {
        const queryStr = `?keyword=${searchKeyword}`;
        navigate({
            pathname: '/search',
            search: queryStr
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">검색</h2>
                <input
                    type="text"
                    name="searchItem"
                    onChange={handleChange}
                    placeholder="검색어를 입력하세요"
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={handleClick}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                        검색
                    </button>
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                    >
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchModalComponent;
