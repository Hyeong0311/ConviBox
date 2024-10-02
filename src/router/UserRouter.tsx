import {lazy, Suspense} from "react";
import LoadingComponent from "../common/LoadingComponent.tsx";


const UserIndex = lazy(() => import("../page/user/UserIndex"))
const MainPage = lazy(() => import('../page/user/MainPage'))
const SearchListPage = lazy(() => import('../page/user/SearchListPage'))
const RecipeDetailPage = lazy(() => import('../page/user/RecipeDetailPage'))
const MyCartPage = lazy(() => import('../page/user/MyCartPage'))

const loading = <LoadingComponent></LoadingComponent>


const UserRouter = {

    path: '/',
    element: <Suspense fallback={loading}><UserIndex/></Suspense>,
    children: [

        {
            path: '',
            element: <MainPage/>
        },
        {
            path: 'search',
            element: <Suspense fallback={loading}><SearchListPage/></Suspense>
        },
        {
            path: 'recipe/:pno',
            element: <Suspense fallback={loading}><RecipeDetailPage/></Suspense>
        },
        {
            path: 'cart',
            element: <Suspense fallback={loading}><MyCartPage/></Suspense>
        }
    ]
}

export default UserRouter;