
import ScaleLoader from "react-spinners/ScaleLoader";
const LoaderSpinner = () => {
    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            {/* loader spinner */}
            <ScaleLoader 
            color="#FF6B6B"
            height={100}
            width={10}
             />
        </div>
    );
};

export default LoaderSpinner;