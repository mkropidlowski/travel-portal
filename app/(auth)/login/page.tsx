import AuthForm from "./components/AuthForm";

const LoginPage = () => {
    return (
        <div className="flex justify-center items-center flex-col w-[900px] h-screen">
            <h2 className="text-[30px] font-medium">Hello, login or create account.</h2>
            <AuthForm />
        </div>
    );
};

export default LoginPage;
