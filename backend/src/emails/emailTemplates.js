// emailTemplate.js
export function createWelcomeEmailTemplate(name, CLIENT_URL) {
  return /* html */ `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Welcome</title>
  </head>
  <body style="margin:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f9fafb;padding:40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <tr>
              <td style="background:#111827;padding:32px;text-align:center;">
                <h1 style="margin:0;font-size:24px;font-weight:600;color:#ffffff;">Welcome aboard 🎉</h1>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px;color:#111827;font-size:16px;line-height:1.6;">
                <p style="margin:0 0 16px;">Hi <strong>${name}</strong>,</p>
                <p style="margin:0 0 24px;">
                  We’re thrilled to have you with us! Your account is ready, and you can dive in right away.
                </p>
                <p style="text-align:center;margin:0;">
                  <a href="${CLIENT_URL}" 
                     style="display:inline-block;padding:14px 28px;background:#2563eb;color:#ffffff;text-decoration:none;border-radius:10px;font-weight:600;font-size:15px;">
                    Open Dashboard
                  </a>
                </p>
                <p style="margin:24px 0 0;">
                  If the button doesn’t work, copy and paste this link into your browser:
                </p>
                <p style="margin:8px 0 24px;">
                  <a href="${CLIENT_URL}" style="color:#2563eb;text-decoration:underline;">${CLIENT_URL}</a>
                </p>

                <!-- Getting Started Tips -->
                <h2 style="font-size:18px;font-weight:600;margin:24px 0 12px;color:#111827;">🚀 Getting Started Tips</h2>
                <ul style="padding-left:20px;margin:0;color:#374151;font-size:15px;line-height:1.6;">
                  <li>✅ Complete your profile to personalize your experience</li>
                  <li>📊 Explore your dashboard to see key insights</li>
                  <li>🔔 Enable notifications so you never miss updates</li>
                  <li>💡 Visit our Help Center for quick guides & FAQs</li>
                </ul>

                <p style="margin:24px 0 0;">
                  Cheers,<br>
                  The Team
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f3f4f6;text-align:center;padding:20px;font-size:13px;color:#6b7280;">
                <p style="margin:0;">&copy; ${new Date().getFullYear()} My App. All rights reserved.</p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
