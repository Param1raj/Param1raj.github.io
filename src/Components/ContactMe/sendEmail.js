import { Resend } from "resend";
import Email from "./Email";
const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
export default async function sendEmail(from, to, subject, name, email, phone) {
    return await resend.emails.send({
        from,
        to,
        subject,
        react: <Email name={name} email={email} phone={phone} subject={subject} />
    })
}