import {ReactElement} from "react";
import MainLayout from "../../layout/MainLayout.tsx";
import {Outlet} from "react-router-dom";


function UserIndex(): ReactElement {


    return (
        <MainLayout>

            <div>
                <Outlet></Outlet>
            </div>
        </MainLayout>
    );
}

export default UserIndex;