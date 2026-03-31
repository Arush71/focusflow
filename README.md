# FocusFlow

A modern, responsive task management application designed to help you streamline your productivity and focus on what truly matters.

**Live Demo:** [https://focusflow-pi-eight.vercel.app](https://focusflow-pi-eight.vercel.app)

---

## Features

✨ **Core Functionality**
- **Create Tasks** - Add new tasks with a clean, intuitive dialog interface
- **Manage Tasks** - Mark tasks as complete with a single click
- **Edit Tasks** - Double-click any task to quickly edit its title
- **Delete Tasks** - Remove tasks you no longer need
- **Smart Sorting** - Incomplete tasks automatically appear at the top
- **Persistent Storage** - Tasks are saved locally in your browser

🎨 **Design & UX**
- **Dark Mode Support** - Seamless theme switching with system preferences
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Fluid transitions and interactive feedback using Framer Motion
- **Modern UI** - Built with Radix UI primitives and Tailwind CSS
- **Accessibility** - Keyboard navigation and ARIA labels throughout

---

## Tech Stack

### Frontend
- **Framework:** [Next.js 15](https://nextjs.org) with App Router
- **UI Library:** [React 19](https://react.dev)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Components:** [Radix UI](https://www.radix-ui.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion)
- **Icons:** [Lucide React](https://lucide.dev)
- **Theme Management:** [next-themes](https://github.com/pacocoursey/next-themes)

### Backend (Infrastructure Ready)
- **Database:** [PostgreSQL](https://www.postgresql.org)
- **ORM:** [Prisma](https://www.prisma.io)
- **Validation:** [Zod](https://zod.dev)

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/focusflow.git
   cd focusflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your configuration:
   ```env
   DATABASE_URL=your_postgresql_url
   JWT_SECRET=your_jwt_secret
   AUTH_SECRET=your_auth_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the application.

---

## Project Structure

```
focusflow/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── page.tsx        # Main todo page
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles
│   ├── components/          # React components
│   │   ├── ui/             # Radix UI-based components
│   │   ├── TodoCards.tsx   # Task list container
│   │   ├── TaskCard.tsx    # Individual task component
│   │   ├── AddTaskBtn.tsx  # Add task button & modal
│   │   ├── header.tsx      # Header component
│   │   └── theme-provider.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── types.ts        # taskType definition
│   ├── lib/                # Utility functions
│   │   ├── prisma.ts       # Prisma client singleton
│   │   └── utils.ts        # Helper utilities
│   ├── services/           # Business logic
│   │   └── todoServices.ts # Todo database operations
│   └── schema/             # Validation schemas
│       └── todos.schema.ts
├── prisma/                 # Database schema
│   └── schema.prisma       # Prisma model definitions
├── public/                 # Static assets
├── .env.example            # Environment variables template
└── tsconfig.json           # TypeScript configuration
```

---

## Usage

### Creating a Task
1. Click the **"ADD NEW TASK +"** button
2. Enter your task description
3. Click **"Add Task"** or press Enter

### Managing Tasks
- **Mark Complete:** Click the checkbox next to a task
- **Edit Task:** Double-click a task to edit its title
- **Delete Task:** Click the trash icon button

### Theme
- Use the theme toggle in the header to switch between light and dark modes
- Theme preference is automatically saved to your browser

---

## Development

### Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Prisma Commands

```bash
# Generate Prisma client
npx prisma generate

# Open Prisma Studio (database browser)
npx prisma studio

# Create a migration
npx prisma migrate dev --name migration_name
```

---

## Roadmap

### Planned Features
- 🔐 **User Authentication** - Login/signup with email and password
- 💾 **Database Persistence** - Sync tasks to PostgreSQL
- 📂 **Task Categories** - Organize tasks by categories/projects
- ⏰ **Due Dates & Reminders** - Set deadlines and get notified
- 🏷️ **Tags & Filtering** - Organize and filter tasks by tags
- 📊 **Analytics Dashboard** - Track productivity metrics
- 🔄 **Recurring Tasks** - Create repeating tasks
- 🤝 **Collaboration** - Share task lists with others

---

## Architecture Notes

### Current State
FocusFlow is currently a **frontend-focused MVP** with localStorage persistence. The application is fully functional with all core task management features implemented.

### Backend Infrastructure
While the PostgreSQL database schema and Prisma ORM are configured, they are not yet integrated into the frontend. The foundation is in place for future backend integration including:
- User authentication and authorization
- Cloud-based task synchronization
- Multi-device sync support

### Scalability Path
The modular component architecture and TypeScript typing make it straightforward to:
1. Add API routes for backend persistence
2. Implement authentication flows
3. Scale to multi-user scenarios

---

## Performance

- **Optimized Bundle:** Next.js automatic code splitting
- **Fast Rendering:** React 19 with concurrent features
- **Turbopack:** Fast local development with blazing compilation
- **CSS-in-JS:** Tailwind CSS with purging and optimization

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is open source and available under the MIT License.

---

## Contact & Support

For questions, issues, or feedback, please open an issue on [GitHub](https://github.com/Arush71/focusflow/issues).

---

**Built with ❤️ using modern web technologies**
