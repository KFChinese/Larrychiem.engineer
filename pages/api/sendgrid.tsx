import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  // NOTE: Uncomment the below lines to make the code work

  try {
    fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=your_secret_key&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(
            reCaptchaRes,
            "Response from Google reCatpcha verification API"
          );
          if (reCaptchaRes?.score > 0.5) {
            // Save data to the database from here
            res.status(200).json({
              status: "success",
              message: "Enquiry submitted successfully",
            });
          } else {
            res.status(200).json({
              status: "failure",
              message: "Google ReCaptcha Failure",
            });
          }
        });
     await sendgrid.send({
       to: "larrychiem@gmail.com", // Your email where you'll receive emails
       from: "contact@larrychiem.engineer", // your website email address here
       subject: `[Lead from website] : ${req.body.subject}`,
       html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
       <html lang="en">
       <head>
         <meta charset="utf-8">

         <title>The HTML5 Herald</title>
         <meta name="description" content="The HTML5 Herald">
         <meta name="author" content="SitePoint">
       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

         <link rel="stylesheet" href="css/styles.css?v=1.0">

       </head>

       <body>
         <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
               </div>
               <div class="container" style="margin-left: 20px;margin-right: 20px;">
               <h3>You've got a new mail from ${req.body.fullname}, their email is: ✉️${req.body.email} </h3>
               <div style="font-size: 16px;">
               <p>Message:</p>
               <p>${req.body.message}</p>
               <br>
               </div>
               </div>
               </div>
       </body>
       </html>`,
     });
   } catch (error) {
     // console.log(error);
     return res.status(error.statusCode || 500).json({ error: error.message });
   }

  return res.status(200).json({ error: "" });
}

export default sendEmail;