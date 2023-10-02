import { FC } from "react";

type StatisticsProps = {
    ammount: number[];
    tripCount: number;
};

const Statistics: FC<StatisticsProps> = ({ ammount, tripCount }) => {
    return (
        <div className="w-full h-[100px] flex gap-6">
            <div className="w-[200px] bg-white rounded-2xl p-3 hover:cursor-pointer hover:bg-stone-200 shadow-md">
                <h2 className="text-[30px]">{tripCount}</h2>
                <h3 className="text-[15px] text-slate-500">Tour count</h3>
            </div>
            <div className="w-[200px] bg-white rounded-2xl p-3 hover:cursor-pointer hover:bg-stone-200 shadow-md">
                <h2 className="text-[30px]">{ammount} $</h2>
                <h3 className="text-[15px] text-slate-500">Earning money</h3>
            </div>
        </div>
    );
};

export default Statistics;
