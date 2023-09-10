import Button from "../button/button";

const Newsletter = () => (
    <div className="flex justify-center items-center m-auto max-w-[800px] h-[300px] bg-white shadow-xl">
        <form>
            <div className="flex gap-3 md:flex-row flex-col">
                <input
                    type="text"
                    placeholder="Type your e-mail..."
                    className="text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-slate-200"
                    required
                />
                <Button type="submit" secondary className="flex items-center justify-center w-full md:w-fit">
                    Send
                </Button>
            </div>
        </form>
    </div>
);

export default Newsletter;
