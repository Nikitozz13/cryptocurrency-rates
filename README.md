# Cryptocurrency Rates Viewer

**Live Demo:** [Cryptocurrency Rates Viewer](https://nikitozz13.github.io/cryptocurrency-rates)

## Project Overview

Cryptocurrency Rates Viewer is a web application that displays cryptocurrency rates. This project is built with React, TypeScript, and Webpack and deployed on GitHub Pages. The app provides detailed information about various cryptocurrencies using routing for individual pages.

---

## Features

- **Cryptocurrency List**: Display a list of available cryptocurrencies.
- **Detailed View**: Navigate to a detailed view of any selected cryptocurrency.
- **Skeleton Loader**: A loading placeholder while data is being fetched.
- **Error Handling**: Graceful handling of API errors.
- **Mobile Responsiveness**: Optimized for various screen sizes, including mobile devices.
- **Single Page Application**: Smooth routing using React Router.
  
---

## Technologies Used

- **React**: Core library for building the UI.
- **TypeScript**: For static type-checking and better developer experience.
- **React Query**: For fetching, caching, and updating API data.
- **Zod**: For schema validation and error handling of API responses.
- **Webpack**: For bundling JavaScript and managing assets.
- **GitHub Pages**: For deployment.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js v16+  
- npm or yarn package manager

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Nikitozz13/cryptocurrency-rates.git
   cd cryptocurrency-rates
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open the app in your browser:
   ```bash
   http://localhost:3000/cryptocurrency-rates
   ```

### Deployment

The project uses `gh-pages` for deployment. Run the following commands:
```bash
npm run deploy
```
