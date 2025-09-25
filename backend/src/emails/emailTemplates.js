export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Welcome Email</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f4f6fb;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 20px rgba(0,0,0,0.08);
      }
      .header {
        background: #2563eb;
        color: #fff;
        padding: 20px;
        text-align: center;
      }
      .body {
        padding: 24px;
        color: #111827;
      }
      .body h1 {
        font-size: 20px;
      }
      .body p {
        font-size: 15px;
        line-height: 1.5;
      }
      .btn {
        display: inline-block;
        margin-top: 20px;
        padding: 12px 18px;
        background: #2563eb;
        color: #fff;
        text-decoration: none;
        border-radius: 8px;
        font-weight: bold;
      }
      .footer {
        margin-top: 24px;
        padding: 16px;
        font-size: 13px;
        color: #6b7280;
        text-align: center;
        border-top: 1px solid #e5e7eb;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Welcome 🎉</h2>
      </div>
      <div class="body">
        <h1>Hello ${name},</h1>
        <p>
          We’re excited to have you on board! You can get started right away by visiting your dashboard.
        </p>
        <a href="${clientURL}" class="btn">Go to Dashboard</a>
        <p>
          Cheers,<br>
          The Team
        </p>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  </body>
  </html>
  `;
}
