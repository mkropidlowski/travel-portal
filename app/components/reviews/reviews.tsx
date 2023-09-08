const Reviews = () => (
    <div className="flex justify-center flex-col items-center gap-8">
        <div className="mt-[150px] relative">
            <h3 className="max-w-[700px] text-center text-slate-500 bg-slate-50 p-4 rounded">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters, as opposed to using Content here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem Ipsum as their default model text
            </h3>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-[65px] h-[65px] rounded-[50px] bg-slate-400"></div>
            <h2 className="text-lg">Angle Julia Rosge</h2>
            <h3 className="text-slate-400">Island</h3>
        </div>
    </div>
);

export default Reviews;
