import { Message, Ring } from "../../icons";

const ActionHeader = ({ sessionDetails }: { sessionDetails: any }) => {
    return (
        <div className="w-full h-[70px] flex justify-between items-center p-5">
            <div>
                <form className="flex gap-5">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-[260px] px-4 p-1 rounded-2xl leading-[25px] text-[15px]"
                    />
                    <div className="flex items-center gap-3">
                        <label className="font-medium">From: </label>
                        <input type="date" className="w-[200px] rounded-2xl px-4 p-1 leading-[30px]" />
                        <label className="font-medium">To: </label>
                        <input type="date" className="w-[200px] rounded-2xl px-4 p-1 leading-[30px]" />
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-around p-3 bg-white rounded-2xl w-[200px] h-[45px]">
                <div className="hover:cursor-pointer">
                    <Message width={20} height={20} />
                </div>
                <div className="hover:cursor-pointer">
                    <Ring width={20} height={20} />
                </div>
                <div className="hover:cursor-pointer">
                    <h2 className="font-medium">Hello, {sessionDetails?.user?.name}</h2>
                </div>
            </div>
        </div>
    );
};
export default ActionHeader;
