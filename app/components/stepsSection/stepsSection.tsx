import { ProcessMock } from "@/app/config/stepsBox/data";

const StepsSection = () => {
    return (
        <div className="max-w-[1140px] flex flex-wrap justify-center gap-8 mt-[80px] m-auto">
            {ProcessMock.map((steps) => (
                <div
                    key={steps.stepNumber}
                    className="w-[300px] flex flex-col hover:bg-slate-50 hover:shadow-xl p-3 rounded-xl cursor-pointer"
                >
                    <div className="flex flex-col items-start gap-3">
                        <div className="w-full flex items-center gap-4">
                            <h2 className="flex items-center justify-center rounded-md w-[35px] h-[35px] bg-slate-100 shadow-lg">
                                {steps.stepNumber}
                            </h2>
                            <span className="w-[50px] h-[4px] bg-blue-500"></span>
                        </div>

                        <h2 className="h-[45px] text-lg font-semibold">{steps.title}</h2>
                    </div>
                    <div>
                        <p>{steps.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StepsSection;
