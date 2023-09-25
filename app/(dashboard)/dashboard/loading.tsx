import ClipLoader from "react-spinners/ClipLoader";
export default function Loading() {
    return (
        <div className="flex flex-col items-center gap-10 relative top-[130px] w-full p-3">
            <ClipLoader color="#36d7b7" />
        </div>
    );
}
