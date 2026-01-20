# Firebase React Todo App

A modern todo application built with React, Redux Toolkit, and Firebase. This project demonstrates state management, real-time database integration, and responsive UI design.

## Deploy Link 

- Link :- https://react-firebase-database-pr.vercel.app/

## Features

- ✅ Create, read, update, and delete todos
- 🔥 Real-time Firebase integration
- 📦 Redux Toolkit for state management
- 🎨 Responsive and clean UI design
- 🚀 Fast development with Vite
- 📱 Mobile-friendly interface

## Tech Stack

- **Frontend Framework:** React
- **State Management:** Redux Toolkit
- **Build Tool:** Vite
- **Backend:** Firebase
- **Styling:** CSS
- **HTTP Client:** Axios (via apiInstance)

## Project Structure

```
src/
├── api/
│   └── apiInstance.js          # Axios instance for API calls
├── app/
│   └── store.js                # Redux store configuration
├── components/
│   ├── Todo.jsx                # Todo list component
│   ├── Todo.css
│   ├── ViewTodo.jsx            # View/detail component
│   └── ViewTodo.css
├── features/
│   └── todo/
│       └── todoSlice.js        # Redux slice for todo state
├── App.jsx                     # Main app component
├── main.jsx                    # React entry point
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase project setup

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd firebase-react-todo
```

2. Install dependencies:
```bash
npm install
```

3. Configure Firebase:
   - Update your Firebase credentials in `src/api/apiInstance.js` or create a `.env` file with your Firebase config

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port)

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Usage

1. **Add a Todo:** Enter your todo text and click the add button
2. **View Todo:** Click on a todo to view its details
3. **Mark Complete:** Toggle the completion status of your todos
4. **Delete Todo:** Remove todos from your list

## Redux Store

The application uses Redux Toolkit for state management with a todo slice that handles:
- Adding todos
- Removing todos
- Updating todo status
- Fetching todos from Firebase

## Contributing

Feel free to fork this project and submit pull requests for improvements.

## License

This project is open source and available under the MIT License.
