import { sendTestMail } from "pages/api/send-email";
export default async function checkUserAPI(request, response) {
const result = await sendTestMail("test@test.com");
    response.json(result);
}
