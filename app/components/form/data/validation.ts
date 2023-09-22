import * as yup from "yup";

const schema = {
    max80Characters: "Incorrect e-mail",
    emailRegex:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

export const validationSchema = yup.object().shape({
    name: yup.string().required("Name required").min(2, "Minimum 2 chars").max(40, "Limit 40 chars"),
    surname: yup.string().required("Surname required").min(2, "Minimum 2 chars").max(40, "Limit 40 chars"),
    email: yup.string().required("E-mail required").email("Check e-mail address"),
    phone: yup
        .string()
        .required("Phone required")
        .matches(/^\d{9}$/, "Phone number must contain 9 numbers"),
    street: yup.string().required("Street required"),
    houseNumber: yup.string().required("House number required"),
    locality: yup.string().required("Locality required"),
    postalCode: yup.string().required("Postal code required"),
    birthDate: yup.string().required("Birth date required"),
    gender: yup.string().required("Choose gender"),
});
