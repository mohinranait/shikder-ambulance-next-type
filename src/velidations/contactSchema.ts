import * as Yup from "yup";
// Contact form schema
export const contactFormSchema =  Yup.object().shape({
    fullName: Yup.string().required("Full name is required").min(2,"Full name must be at least 2 charecters").max(60, 'Full name maximum is 60  charecters '),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email('Invalid email address').optional().transform((value) => value.trim().toLowerCase()),
    from: Yup.string().required("Patient address required").min(2,"Must be at least 2 charecters").max(60,"Patient address maximum is 60 charecters"),
    to: Yup.string().required("Destination address required").min(2,"Must be at least 2 charecters").max(60,"Destination maximum is 60 charecters"),
    message: Yup.string().optional().max(150,"Message maximum is 150 charecters"),
})