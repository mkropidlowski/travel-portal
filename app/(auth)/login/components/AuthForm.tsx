"use client";
import Button from "@/app/components/button/button";
import Input from "@/app/components/input/input";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback } from "react";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // useEffect(() => {
    //     if (session.status === "authenticated") {
    //         router.push("/dashboard");
    //     } else {
    //         router.push("/");
    //     }
    // }, [router, session.status]);
    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant("REGISTER");
        } else {
            setVariant("LOGIN");
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({ defaultValues: { name: "", email: "", password: "" } });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("elo");
    };

    return (
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-[20px]">
                    {variant === "REGISTER" ? (
                        <Input
                            type="text"
                            label="Name"
                            disabled={isLoading}
                            fullWidth
                            id="name"
                            {...register("name")}
                        />
                    ) : null}
                    <Input
                        type="text"
                        label="E-mail"
                        disabled={isLoading}
                        fullWidth
                        id="email"
                        {...register("email")}
                    />
                    <Input
                        type="password"
                        label="Password"
                        disabled={isLoading}
                        fullWidth
                        id="password"
                        {...register("password")}
                    />
                    <Button type="submit" secondary disabled={isLoading}>
                        {variant === "LOGIN" ? "login" : "create account"}
                    </Button>
                </div>
            </form>
            <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                <div>{variant === "LOGIN" ? "New to travel portal?" : "Already have an account?"}</div>
                <div onClick={toggleVariant} className="underline cursor-pointer">
                    {variant === "LOGIN" ? "Create an account" : "Login"}
                </div>
            </div>
        </div>
    );
};

export default AuthForm;
