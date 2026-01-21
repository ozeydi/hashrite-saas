# HashRite.com

Cryptographic File Integrity & Verification SaaS

## Quick Start

\`\`\`bash

# Install dependencies

npm install

# Start development server

npm run dev

# Build for production

npm run build

# Preview production build

npm run preview
\`\`\`

## Features

- Generate cryptographic hashes (MD5, SHA-256, SHA-512, etc.)
- Verify file integrity against expected hashes
- Drag & drop file upload
- Text input for direct hashing
- Multiple algorithm support
- Export results as JSON
- Copy to clipboard functionality

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Notifications:** React Toastify

## Project Structure

\`\`\`
src/
├── components/ # Reusable UI components
├── pages/ # Page components
├── utils/ # Utility functions
├── types/ # TypeScript type definitions
└── services/ # API services
\`\`\`

## Development

1. Clone the repository
2. Install dependencies: \`npm install\`
3. Copy \`.env.example\` to \`.env\`
4. Start dev server: \`npm run dev\`
5. Open http://localhost:5173

## License

MIT
