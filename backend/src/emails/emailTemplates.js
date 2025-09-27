// emailTemplate.js
export function createWelcomeEmailTemplate(name, clientURL) {
  return /* html */ `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Welcome</title>
        <style>
          body { font-family: system-ui, sans-serif; background: #f9fafb; margin: 0; padding: 0; }
          .container { max-width: 600px; margin: auto; background: #fff; border-radius: 12px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.08); overflow: hidden; }
          .header { background: #2563eb; color: #fff; text-align: center; padding: 24px; font-size: 20px; font-weight: 600; }
          .body { padding: 24px; color: #111827; font-size: 15px; line-height: 1.6; }
          .btn { display: inline-block; margin-top: 20px; padding: 12px 20px; background: #2563eb; color: #fff;
            text-decoration: none; border-radius: 8px; font-weight: 600; }
          .footer { text-align: center; font-size: 13px; color: #6b7280; margin: 24px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">Welcome 🎉</div>
          <div class="body">
            <p>Hello <strong>${name}</strong>,</p>
            <p>We’re excited to have you with us! You can start right away by visiting your dashboard:</p>
            <a href="${clientURL}" class="btn">Go to Dashboard</a>
            <p style="margin-top:28px;">Cheers,<br>The Team</p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </body>
    </html>
  `;
}
