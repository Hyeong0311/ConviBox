import {lazy, Suspense} from "react";
import LoadingComponent from "../common/LoadingComponent.tsx";


const MainPage = lazy(() => import('../page/user/MainPage'))
const SearchListPage = lazy(() => import('../page/user/SearchListPage'))

const loading = <LoadingComponent></LoadingComponent>


const UserRouter = {

    path: '/',
    element: <Suspense fallback={loading}><MainPage/></Suspense>,
    children: [

        {
            path: 'search',
            element: <Suspense fallback={loading}><SearchListPage/></Suspense>
        }
    ]
}

export default UserRouter;