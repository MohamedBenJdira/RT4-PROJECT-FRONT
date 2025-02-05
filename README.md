# RT4-PROJECT-FRONT

## 🎬 Angular Movies Project

Welcome to **RT4-PROJECT-FRONT**, an Angular-based movie project designed to provide an engaging user experience for browsing and discovering movies.

## 📌 Features
- Browse popular movies
- Search for movies
- View detailed information on each movie

## 🚀 Tech Stack
- **Angular**: Version 16
- **TypeScript**: Strongly typed JavaScript
- **RxJS**: Reactive programming with observables
- **SCSS**: Styling with modular support
- **Angular Router**: For navigation and routing

## 🔗 Backend API
The project relies on a backend service for fetching movie data. You can access the backend repository here:
[RT4-PROJECT-BACKEND](https://github.com/m0uadh880/web-project-RT4-Back)

## 🛠️ Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (Latest LTS recommended)
- Angular CLI

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/RT4-PROJECT-FRONT.git
   cd RT4-PROJECT-FRONT
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   ng serve
   ```
   The app will be available at `http://localhost:4200/`.

## 📂 Project Structure
```
RT4-PROJECT-FRONT/
│── src/
│   ├── app/
│   │   ├── dto/               # Data transfer objects
│   │   ├── guards/            # Route guards for authentication
│   │   ├── interceptors/      # HTTP interceptors
│   │   ├── models/            # TypeScript models
│   │   ├── not-found/         # 404 Not Found page
│   │   ├── pages/             # Feature-specific pages
│   │   ├── services/          # API and state management
│   │   ├── shared/            # Shared components and modules
│   │   ├── utilities/         # Utility functions and helpers
│   │   ├── app-routing.module.ts  # Application routing
│   │   ├── app.component.css  # Component styles
│   │   ├── app.component.html # Main HTML template
│   │   ├── app.component.ts   # Root component logic
│   │   ├── app.module.ts      # Main application module
│   ├── assets/                # Static assets (images, icons)
│   │   ├── constants.ts       # Application-wide constants
│   ├── favicon.ico            # Favicon
│   ├── index.html             # Main HTML file
│   ├── main.ts                # Entry point of the app
│   ├── styles.css             # Global styles
│── .editorconfig              # Code formatting settings
│── angular.json               # Angular configuration
│── package.json               # Dependencies and scripts
│── README.md                  # Project documentation
```

## ✅ Deployment
To build the project for production, run:
```sh
ng build --configuration=production
```

## 🤝 Contributing
1. Fork the repository
2. Create a new feature branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request
