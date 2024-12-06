import * as Yup from "yup";
// Register page form schema
export const userRegistrationSchemaValidation =  Yup.object().shape({
    name: Yup.object({
        firstName: Yup.string().required("First name is required").min(2,"First name must be at least 2 charecters").max(60, 'First name maximum is 60  charecters '),
        lastName: Yup.string().notRequired(),
    }),
    email: Yup.string().email('Invalid email address').required("Email is required").transform((value) => value.trim().toLowerCase()),
    password: Yup.string().trim().required("Password is required").min(6,"Password must be at least 6 charecters").max(60,"Password maximum is 60 charecters"),
    rePassword: Yup.string().oneOf([Yup.ref('password'), undefined], "Password must match").required("Re-password is required"),
})


// Creation time validation
export const userSchemaValidationServer =  Yup.object().shape({
    name: Yup.object({
        firstName: Yup.string().required("First name is required").min(2,"First name must be at least 2 charecters").max(60, 'First name maximum is 60  charecters '),
        lastName: Yup.string().notRequired(),
    }),
    email: Yup.string().email('Invalid email address').required("Email is required").transform((value) => value.trim().toLowerCase()),
    password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(60, "Password maximum is 60 characters")
    .test(
      "is-not-empty",
      "Password cannot be empty",
      (value) => value.trim().length > 0 
    ),
   
})