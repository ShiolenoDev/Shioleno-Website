/**
 * Shioleno contact notification — table layout + inline styles for baseline support, plus
 * a <style> block for dark mode where clients support @media (prefers-color-scheme: dark).
 * Logo strip stays light in dark mode so the black wordmark remains readable.
 */

const bg = '#F8F7F4'
const surface = '#FFFFFF'
const text = '#1A1A1A'
const muted = '#6B6B6B'
const border = '#E5E5E5'
const accent = '#A1845A'

export type ContactEmailFields = {
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
}

function escapeHtml (s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function row (label: string, value: string) {
  const e = escapeHtml
  if (!value.trim()) return ''
  return `
  <tr>
    <td class="shioleno-field" style="padding:0 0 14px 0;vertical-align:top;">
      <p class="shioleno-label" style="margin:0 0 4px 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${muted};">
        ${e(label)}
      </p>
      <p class="shioleno-value" style="margin:0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.5;color:${text};">
        ${e(value)}
      </p>
    </td>
  </tr>`
}

const darkModeCss = `
  :root { color-scheme: light dark; }
  @media (prefers-color-scheme: dark) {
    .shioleno-outer { background-color: #141414 !important; }
    .shioleno-wrap { background-color: transparent !important; }
    .shioleno-card { background-color: #1E1E1E !important; border-color: #3A3A3A !important; }
    .shioleno-logo-cell {
      background-color: #F8F7F4 !important;
      border-bottom-color: #3A3A3A !important;
    }
    .shioleno-title { color: #ECECEC !important; }
    .shioleno-lede { color: #9A9A9A !important; }
    .shioleno-label { color: #9A9A9A !important; }
    .shioleno-value { color: #ECECEC !important; }
    .shioleno-msg-label { color: #9A9A9A !important; }
    .shioleno-msg-box {
      background-color: #252525 !important;
      border-color: #3A3A3A !important;
      border-left-color: #C4A574 !important;
    }
    .shioleno-msg-text { color: #E8E8E8 !important; }
    .shioleno-foot { border-top-color: #3A3A3A !important; color: #9A9A9A !important; }
    .shioleno-sep { color: #3A3A3A !important; }
    .shioleno-a { color: #D4B896 !important; }
    .shioleno-a-muted { color: #9A9A9A !important; }
  }
`.replace(/\n\s*/g, '')

/**
 * Renders a full HTML document (meta + style) so clients can apply light/dark rules.
 */
export function buildContactEmailHtml (
  p: ContactEmailFields,
  options: { logoUrl: string; siteName: string; siteUrl: string }
) {
  const e = escapeHtml
  const fullName = `${p.firstName} ${p.lastName}`.trim()
  const inner = `
<table role="presentation" class="shioleno-outer" width="100%" cellspacing="0" cellpadding="0" style="background-color:${bg};margin:0;padding:0;border-collapse:collapse;">
  <tr>
    <td class="shioleno-wrap" align="center" style="padding:32px 16px 40px 16px;">
      <table role="presentation" class="shioleno-card" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;border-collapse:collapse;background-color:${surface};border:1px solid ${border};border-radius:2px;overflow:hidden;">
        <tr>
          <td class="shioleno-logo-cell" style="padding:28px 28px 20px 28px;border-bottom:1px solid ${border};text-align:center;">
            <a href="${e(options.siteUrl)}/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
              <img src="${e(options.logoUrl)}" width="360" height="40" alt="${e(options.siteName)}" style="display:block;margin:0 auto;max-width:100%;height:auto;border:0;outline:none;" />
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 28px 8px 28px;">
            <p class="shioleno-title" style="margin:0 0 8px 0;font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:400;line-height:1.35;color:${text};letter-spacing:-0.02em;">
              New contact message
            </p>
            <p class="shioleno-lede" style="margin:0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.55;color:${muted};">
              Someone submitted the form on your website. Reply to this email to respond to them — their address is set as the reply target.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:8px 28px 8px 28px;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
              ${row('Name', fullName)}
              ${row('Email', p.email)}
              ${row('Company', p.company)}
              ${row('Phone', p.phone)}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:4px 28px 20px 28px;">
            <p class="shioleno-msg-label" style="margin:0 0 8px 0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:${muted};">
              Message
            </p>
            <div class="shioleno-msg-box" style="background-color:${bg};border:1px solid ${border};border-left:3px solid ${accent};padding:16px 18px;border-radius:0 2px 2px 0;">
              <p class="shioleno-msg-text" style="margin:0;font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:${text};white-space:pre-wrap;word-wrap:break-word;">${e(p.message)}</p>
            </div>
          </td>
        </tr>
        <tr>
          <td style="padding:0 28px 28px 28px;">
            <p class="shioleno-foot" style="margin:0;padding:16px 0 0 0;border-top:1px solid ${border};font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.5;color:${muted};text-align:center;">
              <a class="shioleno-a" href="${e(options.siteUrl)}/" style="color:${accent};text-decoration:none;font-weight:600;">${e(options.siteName)}</a>
              <span class="shioleno-sep" style="color:${border};"> · </span>
              <a class="shioleno-a-muted" href="${e(options.siteUrl)}/contact" style="color:${muted};text-decoration:underline;">Contact page</a>
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`.trim()

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
<!--[if mso]>
<noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<style type="text/css">${darkModeCss}</style>
</head>
<body style="margin:0;padding:0;background-color:${bg};" class="shioleno-outer">
${inner}
</body>
</html>`.trim()
}
