# Todo List App

## Description
A simple and interactive Todo List app built with React and Framer Motion for smooth animations. The app allows users to add, complete, delete, and reorder tasks effortlessly. It also includes a tooltip feature to guide users on how to interact with the app.

## Features
- Add tasks to the list
- Mark tasks as completed
- Swipe left to delete a task
- Drag up or down to reorder tasks
- Persistent storage using localStorage
- Animated interactions with Framer Motion
- Tooltip guide for user instructions

## Technologies Used
- React
- Tailwind CSS
- Framer Motion
- Nanoid
- Lucide-react Icons

## Installation & Usage

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and npm installed on your system.

### Steps to Run the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todolist-app.git
   cd todolist-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open the app in your browser at `http://localhost:3000`

## Project Structure
```
📂 todolist-app
 ├── 📂 src
 │   ├── 📂 components
 │   │   ├── InputItem.js
 │   │   ├── ListItem.js
 │   │   ├── Todolist.js
 │   │   ├── ToolTip.js
 │   │   ├── FancyCheckBox.js
 │   ├── App.js
 │   ├── index.js
 ├── 📄 package.json
 ├── 📄 README.md
```

## Customization
- Modify the tooltip messages in `App.js` inside the `toolTips` array.
- Adjust the task item styles in `ListItem.js`.
- Change animation effects in `Framer Motion` components.

## Live Link
https://rishabh0-0.github.io/todoList/


## Author
Rishabh - [GitHub](https://github.com/Rishabh0-0)

