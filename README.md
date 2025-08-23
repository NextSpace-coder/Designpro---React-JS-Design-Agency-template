# designpro

A modern React template with clean design, responsive layouts, and comprehensive functionality for various business needs.

## Features

- **Modern React 18+** - Latest React features and hooks
- **Vite Build Tool** - Fast development and optimized builds
- **Responsive Design** - Mobile-first responsive layouts
- **Component-Based Architecture** - Reusable and maintainable components
- **Modern CSS** - Styled with modern CSS techniques
- **Performance Optimized** - Optimized for speed and SEO

## Technology Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Bootstrap
- **Router**: React Router Dom (if applicable)
- **Package Manager**: pnpm (recommended)

## Project Structure

```
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── integrations/       # Third-party integrations
│   │   └── supabase/       # Supabase configuration
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Application entry point
├── public/                 # Public assets
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- pnpm (recommended) or npm

### Installation

1. Clone or download this template
2. Install dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm run dev
```

The application will open at `http://localhost:8080`

### Build for Production

Create a production build:

```bash
pnpm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
pnpm run preview
```

## Page Structure

- **Single Page Application**: All content on main page with component sections
- **Hero Section**: Main banner with call-to-action
- **Features Section**: Key features and benefits
- **About Section**: Company or service information
- **Contact Section**: Contact information and form

## Customization

### Styling
- Customize Bootstrap variables in SCSS files
- Override Bootstrap classes as needed
- Use Bootstrap components and utilities

### Content
- Update text content in component files
- Replace images in the `src/assets/` directory
- Modify colors and themes in CSS files

### Components
- All components are located in `src/components/`
- Components are modular and can be easily customized
- Follow the existing component structure for consistency

## Deployment

This template can be deployed to various platforms:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## Supabase Integration

This template includes Supabase integration setup in `src/integrations/supabase/`. 

To use Supabase:

1. Create a Supabase project at https://supabase.com
2. Get your project URL and anon key
3. Create a `.env` file:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## License

This template is provided as-is for development purposes.

## Support

For issues and questions:
- Check the documentation
- Review the code comments
- Ensure all dependencies are properly installed

---

Built with ❤️ using React + Vite
