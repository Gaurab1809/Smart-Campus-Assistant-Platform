## Overview

# 📱 Mobile App Team

**Working Folder:** `/mobile/`

**Role:** Develop the Android mobile application for the Smart Campus Assistant Platform.

#### Responsibilities

- Build a native Android app allowing students to access all core features on mobile
- Integrate with the backend REST APIs
- Implement mock push notifications for reminders

#### Tech Stack

| Category        | Technology                  |
| --------------- | --------------------------- |
| Language        | Kotlin                      |
| IDE             | Android Studio              |
| UI Framework    | Jetpack Compose             |
| Architecture    | MVVM                        |
| Networking      | Retrofit                    |
| JSON Parsing    | Gson / Kotlin Serialization |
| Local Storage   | Room Database               |
| Version Control | Git & GitHub                |

#### Required Features

**Must Have:**

- Login screen with JWT token storage
- Dashboard showing notices, events, assignments
- AI Assistant chat interface
- API integration with backend

**Optional:**

- Push notification reminders (mock)
- Offline caching with Room

#### Folder Structure (suggested)

```
mobile/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/smartcampus/
│   │   │   │   ├── ui/
│   │   │   │   ├── screens/
│   │   │   │   ├── api/
│   │   │   │   ├── repository/
│   │   │   │   ├── models/
│   │   │   │   ├── viewmodel/
│   │   │   │   └── MainActivity.kt
│   │   │   └── res/
├── build.gradle
└── README.md
```

#### Deliverables

- APK file that can be installed and demoed
- Login, Dashboard, and AI chat screens working
- Connected to backend API

#### Branch Naming

```bash
git checkout -b mobile/login-screen
git checkout -b mobile/dashboard-screen
git checkout -b mobile/api-integration
```

---
