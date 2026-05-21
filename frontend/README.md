### Overview

#### Before continuing make sure
1. Node version 20+
2. You are on your working directory `/frontend`
3. run `npm install`

### Configurations already created
1. TailwindCSS
2. Axios
3. React 19
### Environment Variables
Make a file named `.env` in the root folder and add properties if any examples given
### To Run
Go to your working directory and run `npm run dev`

# 🖥 Frontend Team

**Working Folder:** `/frontend/`

**Role:** Build the responsive web dashboard and integrate all backend APIs.

#### Responsibilities

- Build a clean, modern web UI with React and Tailwind CSS
- Connect to the backend REST APIs using Axios
- Create all required pages and implement navigation

#### Tech Stack

| Category         | Tool             |
| ---------------- | ---------------- |
| Framework        | React            |
| Styling          | Tailwind CSS     |
| HTTP Client      | Axios            |
| State Management | Context API      |
| Deployment       | Vercel / Netlify |
| IDE              | VS Code          |
| Version Control  | GitHub           |

#### Required Pages

| Page         | Path         | Description                              |
| ------------ | ------------ | ---------------------------------------- |
| Login        | `/login`     | Student/admin login                      |
| Dashboard    | `/dashboard` | Overview of notices, events, assignments |
| Notices      | `/notices`   | List of all university notices           |
| Events       | `/events`    | Upcoming campus events                   |
| AI Assistant | `/assistant` | Chat interface for the AI chatbot        |
| Analytics    | `/analytics` | Usage stats (admin only)                 |

#### Folder Structure (suggested)

```
frontend/
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page-level components
│   ├── hooks/            # Custom React hooks
│   ├── context/          # Context API providers
│   ├── api/              # Axios API call functions
│   └── App.jsx
├── public/
├── package.json
└── README.md
```

#### Deliverables

- All pages built and navigable
- Axios API integration with backend
- Fully responsive (mobile + desktop)
- Deployed to Vercel or Netlify

#### Branch Naming

```bash
git checkout -b frontend/login-page
git checkout -b frontend/dashboard-ui
git checkout -b frontend/ai-assistant-page
```

---
