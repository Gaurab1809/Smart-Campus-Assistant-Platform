## Overview

# 🧪 QA Engineer Team

**Working Folder:** `/qa/`

**Role:** Test the entire platform and ensure everything works correctly across all layers.

#### Responsibilities

- Write and execute manual test cases
- Perform API testing using Postman
- Automate key flows using Playwright
- Report all bugs clearly with reproduction steps

#### Tools

| Category        | Tool                     |
| --------------- | ------------------------ |
| API Testing     | Postman                  |
| Browser Testing | Chrome DevTools          |
| Automation      | Playwright / Selenium    |
| Bug Tracking    | Trello / Notion          |
| Documentation   | Google Sheets / Markdown |

#### Test Coverage Areas

- Login and authentication flow
- Notice and event creation/retrieval APIs
- AI chatbot responses
- UI responsiveness across screen sizes
- Mobile app screens
- Cross-device testing (Android, Chrome, Firefox)

#### Folder Structure (suggested)

```
qa/
├── test-cases/
│   ├── login-tests.md
│   ├── api-tests.md
│   └── ui-tests.md
├── bug-reports/
│   └── bug-report-template.md
├── automation/
│   └── playwright/
├── postman/
│   └── SmartCampus.postman_collection.json
└── README.md
```

#### Deliverables

- Complete test case document (at least 20 test cases)
- Bug report document with all found issues
- Postman collection for API tests

#### Branch Naming

```bash
git checkout -b qa/login-test-cases
git checkout -b qa/api-testing
git checkout -b qa/playwright-automation
```

---
