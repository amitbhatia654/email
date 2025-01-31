import * as Yup from "yup";
export const sendEmail = Yup.object({
    emailTo: Yup.string()
        .email("Invalid email format") // Ensures a valid email format
        .required("Email Id is required"), // Ensures the field is not empty

    subject: Yup.string()
        .min(3, "Subject must be at least 3 characters") // Minimum character length
        .max(100, "Subject cannot exceed 100 characters") // Maximum character length
        .required("Subject is required"),

    emailBody: Yup.string()
        .min(10, "Message must be at least 10 characters") // Prevents very short messages
        .required("Please enter the message"),
});