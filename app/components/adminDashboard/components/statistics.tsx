import { FC } from "react";

type StatisticsProps = {};
// TODO add functions with completed tour, earing money stats
const Statistics: FC<StatisticsProps> = () => {
    return (
        <div className="w-full h-[100px] flex gap-6 mt-4">
            <div className="w-[200px] bg-white rounded-2xl p-3 hover:cursor-pointer hover:bg-stone-200">
                <h2 className="text-[30px]">220</h2>
                <h3 className="text-[15px] text-slate-500">Completed tour</h3>
            </div>
            <div className="w-[200px] bg-white rounded-2xl p-3 hover:cursor-pointer hover:bg-stone-200">
                <h2 className="text-[30px]">35.500 $</h2>
                <h3 className="text-[15px] text-slate-500">Earning money</h3>
            </div>
        </div>
    );
};

export default Statistics;
