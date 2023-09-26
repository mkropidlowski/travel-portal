import AuthForm from "./components/AuthForm";

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center flex-col max-w-[900px] h-screen gap-7">
            <h2 className="text-[30px] font-medium max-w-[300px] text-center">Hello, login or create account.</h2>
            <AuthForm />
        </div>
    );
};

export default LoginPage;
