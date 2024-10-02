function AdminListComponent() {
    return (
        <div className="w-1/4 h-full p-4">
            <aside className="h-1/8 p-4 bg-yellow-100 mb-4 rounded-lg">
                <p className='font-bold'>가격선택</p>
                <select className="p-2 border rounded w-full">
                    <option value="option0">3천원 이하</option>
                    <option value="option1">5천원 이하</option>
                    <option value="option2">1만원 이하</option>
                    <option value="option3">1만원 이상</option>
                </select>
            </aside>

            <aside className="h-3/4 p-4 bg-yellow-200 rounded-lg flex flex-col items-center justify-center">
                <p className='font-bold'>List Sidebar</p>
                <ul className="flex flex-col items-center">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                    <li>Item 6</li>
                </ul>
            </aside>
        </div>
    );
}

export default AdminListComponent;
