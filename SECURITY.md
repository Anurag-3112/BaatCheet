# Security Policy

## Supported Versions

BaatCheet is currently under active development.

At this stage, security fixes will generally be applied to the latest version of the `main` branch.

| Version | Supported |
| ------- | --------- |
| `main`  | ✅ Yes |
| Older versions | ❌ No |

---

## Reporting a Vulnerability

If you discover a security vulnerability in BaatCheet, please **do not create a public GitHub Issue**.

Publicly reporting a vulnerability may expose users and other contributors before a fix is available.

Instead, please report the vulnerability privately to the project maintainer.

### Please include:

- A clear description of the vulnerability.
- Steps to reproduce the issue.
- The potential impact.
- Relevant screenshots or logs, if applicable.
- A suggested fix, if you have one.

Please avoid including sensitive information such as passwords, API keys, access tokens, or personal data in your report.

---

## What Should Be Reported Privately?

Examples include:

- Authentication bypasses.
- JWT vulnerabilities.
- Authorization problems.
- Account takeover vulnerabilities.
- Password-related security issues.
- Injection vulnerabilities.
- Sensitive information exposure.
- Insecure file uploads.
- Cloudinary security issues.
- Database security vulnerabilities.
- Socket.IO authorization problems.
- Cross-site scripting (XSS).
- Security-related dependency vulnerabilities.
- Any issue that could compromise user data or application security.

When in doubt, report the issue privately.

---

## What Does Not Need Private Reporting?

Normal bugs and non-security problems can be reported through GitHub Issues.

Examples:

- UI bugs.
- Incorrect layout.
- Broken buttons.
- Typographical errors.
- Performance improvements.
- Feature requests.
- Documentation improvements.

If you're unsure whether an issue is security-related, please treat it as a security issue and report it privately.

---

## Security Best Practices for Contributors

Contributors must never commit:

```text
.env
.env.local
API keys
Database credentials
JWT secrets
Cloudinary credentials
Access tokens
Passwords
Private keys