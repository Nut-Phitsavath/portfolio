# Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, projects, and professional background as an aspiring software developer.

## Live Demo
[View Live Site](https://nut-phitsavath.github.io/portfolio)

## Tech Stack

Built with modern web technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (React)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: GitHub Pages (via GitHub Actions)

## Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Modern UI/UX**: Clean aesthetic withglassmorphism effects and smooth transitions.
- **Dark Mode Support**: System-aware color themes (configurable).
- **Performance**: Static site generation (SSG) for lightning-fast load times.
- **SEO Optimized**: Metatags and semantic HTML structure.

## Getting Started

To run this project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/nut-phitsavath/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured to automatically deploy to **GitHub Pages** whenever changes are pushed to the `master` branch.

- Configuration is managed in `next.config.ts` (`output: 'export'`).
- Workflow defined in `.github/workflows/deploy.yml`.

## License

This project is open source and available under the [MIT License](LICENSE).
