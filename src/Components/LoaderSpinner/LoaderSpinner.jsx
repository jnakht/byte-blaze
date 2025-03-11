
import ScaleLoader from "react-spinners/ScaleLoader";
const LoaderSpinner = () => {
    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            {/* loader spinner */}
            <ScaleLoader 
            color="#FF6B6B"
             />
        </div>
    );
};

export default LoaderSpinner;