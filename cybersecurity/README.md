## Overview

# 🔒 Cybersecurity Team

**Working Folder:** `/cybersecurity/`

**Role:** Review the platform for security vulnerabilities and ensure it follows security best practices.

#### Responsibilities

- Review JWT implementation for weaknesses
- Check all APIs for common vulnerabilities
- Validate input sanitization and password hashing
- Review environment variable handling
- Run through the OWASP Top 10 checklist

#### Tools

| Category              | Tool                 |
| --------------------- | -------------------- |
| Security Reference    | OWASP Top 10         |
| API Testing           | Postman              |
| Browser Analysis      | Chrome DevTools      |
| Network Analysis      | Wireshark            |
| Vulnerability Testing | Burp Suite Community |

#### Security Tasks

- JWT token security review (expiry, secret strength, storage)
- Password validation (min length, hashing algorithm)
- API vulnerability scan (injection, broken auth, CORS)
- Rate limiting assessment
- OWASP Top 10 checklist walkthrough
- **Bonus:** Run a simple penetration testing demo

#### Folder Structure (suggested)

```
cybersecurity/
├── audit/
│   ├── owasp-checklist.md
│   ├── jwt-review.md
│   └── api-vulnerability-report.md
├── risk-report/
│   └── risk-report.md
├── pentest/              # Optional: demo scripts/notes
└── README.md
```

#### Deliverables

- OWASP Top 10 audit checklist (checked against the platform)
- Risk report with severity ratings (Critical / High / Medium / Low)
- Recommendations for each vulnerability found

#### Branch Naming

```bash
git checkout -b cybersecurity/owasp-audit
git checkout -b cybersecurity/jwt-review
git checkout -b cybersecurity/risk-report
```

---
