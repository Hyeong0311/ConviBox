import {ReactElement} from "react";


function LoadingComponent(): ReactElement {
    return (

        <div className="flex items-center justify-center h-screen">
            <div
                className="animate-spin rounded-full h-32 w-32 border-t-4"
                style={{borderTopColor: "#f8c300"}}
            ></div>
        </div>
    );
}

export default LoadingComponent;