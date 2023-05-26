import * as yup from "yup";

const userSchema = yup.object().shape({
    Name: yup.string().max(25).min(5).required("Name is Required"),
    Email: yup.string().email().required("Email is Required"),
    Password: yup.string().min(8).max(15).required("Password is Required"),
})

export default userSchema;