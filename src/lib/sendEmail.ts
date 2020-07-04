const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendEmail = async ({ name, email, message }) => {
  await fetch(SENDGRID_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: process.env.NEXT_CONTACT_EMAIL,
            },
          ],
          subject: 'Contact from personal site',
        },
      ],
      from: {
        email: process.env.NEXT_CONTACT_EMAIL,
        name: 'Contact Site',
      },
      content: [
        {
          type: 'text/html',
          value: `
            <div className="email" style="
              border: 1px solid black;
              padding: 20px;
              font-family: sans-serif;
              line-heigh: 2;
              font-size: 20px;
            ">
              <h2>Hi, i'm ${name}</h2>
              <p>I want to tell you, ${message}</p>
              <p>This is my address: ${email}</p>
          </div>
        `,
        },
      ],
    }),
  })
}

export { sendEmail }
