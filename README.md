# Quotr

Quotr helps people find Bible passages connected to what they are feeling, experiencing, or celebrating. Instead of opening a Bible app without knowing where to start, users pick a category like Anxious, Grieving, or New Job and receive a curated list of references to read on their own. It is built as a simple discovery tool, not a replacement for personal Bible study or pastoral guidance.

## Features

- **Category-based discovery** — browse emotions, life situations, topics, and milestones on a single page.
- **Curated Scripture references** — each category loads a focused list of Bible references stored locally in JSON.
- **One-click Bible Gateway links** — every reference opens directly on Bible Gateway so users can read it in context.
- **Related suggestions** — after choosing a category, users see other entries from the same group.
- **Responsive design** — works on mobile and desktop with a collapsible navigation menu and flexible layouts.
- **Custom typography** — uses a warm combination of serif and sans-serif typefaces to match the app's tone.

## Usage

Open the live app at [usequotr.vercel.app](https://usequotr.vercel.app). The landing page explains the idea and links to the main app.

On the main page, choose a category that matches what is on your mind:

- Emotional / Mental States: Anxious, Sad, Lonely, Angry, and more
- Life Situations: Getting married, Grieving, Starting a new job, and more
- Topics / Teachings: Prayer, Faith and doubt, Marriage and relationships, and more
- Celebrations / Milestones: Birthday, Wedding, Graduation, and more

Each category navigates to a dedicated route, for example:

```text
https://usequotr.vercel.app/app/scriptures/anxious
```

On that page, Quotr asks if you are feeling the selected category and lists relevant references. Click any reference to open it on Bible Gateway in a new tab. The page also suggests related categories from the same group so you can keep exploring.

## Technologies Used

| Technology | Description |
|------------|-------------|
| [React](https://react.dev/) | UI library for building the component-based interface |
| [TypeScript](https://www.typescriptlang.org/) | Type definitions for safer React development |
| [Vite](https://vitejs.dev/) | Fast build tool and development server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling for responsive layouts |
| [React Router](https://reactrouter.com/) | Client-side routing between pages and category routes |
| [Lucide React](https://lucide.dev/) | Lightweight icon library used in navigation and actions |

## Author

Built by Ugochukwu Isaac.

- X (Twitter): [@_IamZik](https://x.com/_IamZik)

## Badges

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
