# Startup Pitch

Startup Pitch is a platform where startup founders can showcase their innovative ideas, and the community can engage by viewing, commenting, and offering feedback. Whether you're looking for validation, potential collaborators, or just want to share your vision, Startup Pitch is the space to connect and grow your startup journey.

## Features

- **Idea Upload**: Startup owners can upload their innovative ideas with detailed descriptions.
- **Community Engagement**: Viewers can comment, like, and interact with posted ideas.
- **Authentication**: Secure login using NextAuth for a personalized experience.
- **Dynamic Content**: Content management and updates powered by Sanity.
- **Responsive Design**: Tailwind CSS ensures the platform is fully responsive and user-friendly.

## Tech Stack

- **HTML & Tailwind CSS**: For the structure and design of the application.
- **Next.js**: React framework for building the front end and handling server-side rendering.
- **TypeScript**: For static typing, ensuring robust and error-free code.
- **NextAuth.js**: Authentication system for handling user login and sessions.
- **Sanity**: Headless CMS for managing dynamic content like startup ideas and comments.

## Setup

To get started with the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/i-am-Shekinah/startup-pitch.git
   ```

2. Navigate to the project directory:

   ```bash
   cd startup-pitch
   ```

3. Install the required dependencies:

   ```bash
   pnpm install
   ```

4. Set up environment variables:

   - Create a `.env.local` file in the root of the project
   - Add your necessary environment variables, such as for NextAuth and Sanity:

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   SANITY_PROJECT_ID=your_sanity_project_id
   SANITY_DATASET=your_sanity_dataset
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

5. Run the development server:

```bash
pnpm run dev
```

6. Visit `http://localhost:3000` in your browser.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit pull requests. You can also report issues or suggest new features by opening an issue on GitHub.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Live Demo

The live site will be available once development is complete. Stay tuned!

<!--
Check out the live version of the project here:
👉 [Startup Pitch on Vercel](https://startup-pitch.vercel.app) -->
