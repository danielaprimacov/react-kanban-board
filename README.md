# React Kanban Board (NextGen Productivity)

NextGen Productivity is a modern Kanban board application built with React, React Router, and React DnD. It empowers your workflow with cutting-edge tools and a sleek design tailored for today's innovators. Manage tasks, customize your board, and gain insights into your productivity with comprehensive statistics.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Features

- **Intuitive Drag-and-Drop:**  
  Easily move tasks between columns with smooth animations using React DnD.
- **Customizable Columns:**  
  Edit column titles, add new columns, and create your ideal workflow with our New Board functionality.
- **Task Management:**  
  Create, update, and delete tasks that include details such as title, description, assignee, priority, and due dates.
- **Task Details Modal:**  
  Click on any task to view and edit its details in a modal window.
- **Statistics Dashboard:**  
  View monthly statistics on tasks completed, along with an overall breakdown of task priorities.
- **Responsive Design:**  
  Enjoy a sleek, modern interface that works across all devices.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository**
   Open your terminal and run:

   ```bash
   git clone https://github.com/your-username/react-kanban-board.git
   cd react-kanban-board
   ```

2. **Install Dependencies**
   Install the necessary dependencies using either npm or yarn.

**Using npm:**

```bash
   npm install
```

**Using npm:**

```bash
   yarn install
```

3. **Start the Development Server**
   Start the development server with one of the following commands.
   **Using npm:**

```bash
   npm run dev
```

**Using npm:**

```bash
   yarn dev
```

Once the server starts, open your browser and navigate to http://localhost:5173 to view the application.

## Additional Information

- **Ensure Environment Compatibility:**  
  Confirm your development environment meets the prerequisites, including having the correct version of Node.js (v14 or later).

- **Troubleshooting:**  
  If you encounter any issues during installation:

  - Verify your Node.js version by running `node -v`.
  - Check your internet connection.
  - Look through the repository's issues section for similar problems and potential solutions.

- **Contributing:**  
  Contributions are welcome! Feel free to fork the repository, create a branch for your changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

- **Documentation:**  
  Refer to the project's documentation available in the repository for more detailed guidance and support.

## Folder Structure

Below is an example folder structure for the NextGen Productivity project:

```plaintext
nextgen-productivity/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── assets/
│   │   ├── components/
│   │   │   ├── MainContent.jsx
│   │   │   ├── RootLayout.jsx
│   │   │   ├── KanbanProvider.jsx
│   │   │   ├── KanbanContext.js
│   │   │   ├── DragLayer.jsx
│   │   │   ├── ColumnComponent/
│   │   │   │   ├── ColumnItem.jsx
│   │   │   │   └── Columns.jsx
│   │   │   └── TaskComponent/
│   │   │       ├── Tasks.jsx
│   │   │       └── TaskItem.jsx
│   │   ├── animations/
│   │   │   └── team.json
│   │   └── images/
│   │       ├── check.png
│   │       ├── star.png
│   │       └── arrow-right.png
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── KanbanPage.jsx
│   │   ├── NewBoardPage.jsx
│   │   ├── TaskDetailsPage.jsx
│   │   └── StatisticsPage.jsx
│   ├── index.css
│   └── main.jsx
└── package.json
```

# Dependencies

This project uses the following dependencies:

- **React**  
  A JavaScript library for building user interfaces.

- **React Router DOM**  
  Provides declarative routing for React applications.

- **React DnD**  
  Enables drag-and-drop functionality for React components.

- **React Lottie**  
  Renders beautiful Lottie animations within your React app.

- **FlipMove**  
  Adds smooth animations when reordering list items.

- **Vite**  
  A lightning-fast development server and build tool for modern web projects.

# Usage

## Main Dashboard

- **Welcome Screen:**  
  The home page greets you with an engaging introduction to NextGen Productivity, featuring a modern design and animated header.

- **Get Started Button:**  
  Click the **Get Started** button to navigate to the New Board page (`/newboard`), where you can begin building your board from scratch.

---

## Board Management

- **New Board Functionality:**  
  On the New Board page, start with an empty board where you can add new columns to organize your workflow.

- **Add and Manage Columns:**

  - Add new columns using the "Add Column" button.
  - Edit column titles inline by clicking on the title.

- **Task Operations:**
  - **Drag and Drop:**  
    Move tasks between columns using intuitive drag-and-drop functionality (powered by React DnD).
  - **Task Details Modal:**  
    Click on a task to open a modal that displays its details (title, description, assignee, priority, and due date).
  - **Create, Update, and Delete Tasks:**  
    Easily add new tasks, edit existing ones, or remove tasks as your workflow evolves.

---

## Statistics Dashboard

- **Monthly Completed Tasks:**

  - Navigate to the `/statistics` route to view statistics.
  - See the total number of tasks marked as "Done" in the last month.
  - View a detailed breakdown of these tasks by priority (Low, Medium, High).

- **All Tasks Overview:**
  - Get a comprehensive list of all tasks across your board.
  - Check an overall breakdown showing how many tasks are low, medium, and high priority.
  - Examine a detailed table that includes each task's title, description, assignee, status, priority, created date, and due date.

# Contributing

Thank you for considering contributing to NextGen Productivity! Your contributions help make this project better for everyone. Please follow these guidelines to contribute effectively.

---

## How to Contribute

1. **Fork the Repository**

   - Click the **Fork** button at the top right of the repository page on GitHub to create your own copy.

2. **Clone Your Fork**

   - Open your terminal and run:

     ```bash
     git clone https://github.com/your-username/react-kanban-board.git
     cd kanban-board
     ```

3. **Create a New Branch**

   - Create a branch for your feature or bugfix:

     ```bash
     git checkout -b feature/your-feature-name
     ```

4. **Make Your Changes**

   - Implement your feature or bugfix.
   - Commit your changes with clear and descriptive commit messages:

     ```bash
     git add .
     git commit -m "Description of your changes"
     ```

5. **Push to Your Fork**

   - Push your branch to your forked repository:

     ```bash
     git push origin feature/your-feature-name
     ```

6. **Create a Pull Request**

   - Open a pull request on the original repository.
   - Provide a detailed description of your changes and the motivation behind them.
   - Follow any provided pull request template if available.

7. **Follow Up**

   - Be responsive to feedback from maintainers and other contributors.
   - Make any requested changes promptly to help your pull request get merged.

---

## Code of Conduct

By contributing to this project, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md). Please ensure your contributions adhere to our guidelines and coding standards.

---

## Reporting Issues

If you encounter any issues or have suggestions for improvement, please open an issue in the repository. This helps us keep track of bugs and plan new features.

---

Thank you for contributing to NextGen Productivity! Your help makes a difference.

# MIT License

Copyright (c) [2025] [Daniela Primacov]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
