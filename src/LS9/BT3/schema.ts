import * as yup from "yup"
export const loginSchema=yup.object({
    userName:yup.string().required("Username is required"),
    password:yup.string().min(8,"Password must be at least 8 characters").required("Password is required"),
    rememberMe:yup.boolean().notRequired(),
})  