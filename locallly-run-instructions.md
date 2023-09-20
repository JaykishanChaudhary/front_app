# Task-Frontend Local Env Run Instructions

## Description
This document provides instructions for running the Task app locally on your development environment.

## Prerequisites
Before running the app locally, ensure you have the following prerequisites installed:
- Node.js: [Download and install Node.js](https://nodejs.org/)
- NPM (Node Package Manager): Included with Node.js installation

## Getting Started

### 1. Clone the Repository [Both Frontend and Backend]
Clone the [App Name] repository to your local machine using the following command:
```bash
git clone https://github.com/JaykishanChaudhary/front_app.git

git clone https://github.com/JaykishanChaudhary/Back_app.git
```

### 2. Start the Backend

Open your preferred code editor and navigate to the project folder. In the terminal, run the following command to start the backend server:
```bash
node app.js
```

### 3. Start the Frontend

Before starting frontend, You need to change the remote backend apis base url : http://52.90.211.46:5000 to http://localhost:5000 in each component where we trying to intercat with backend server, i.e., updateDetail.js and tablebox.js files.

With the backend running, open a new terminal window and navigate to the project's frontend directory. Use the following command to start the frontend application:
```bash
npm start
```

### 4. Access the App

Once both the backend and frontend are up and running, you can access the app by opening your web browser and navigating to the following URL:
```
http://localhost:3000
```

### 5. Using the App

- Home Page:
  - The app's home page includes a header, sidebar, and a table displaying task details.

- Creating a New Task:
  1. Click the "Create Task" button on the home page.
  2. You will be directed to the "Create Task" page.
  3. Fill out the task details in the provided form.
  4. Click the "Create Task" button to submit the new task.

- Updating a Task:
  1. Click the "View Details" button next to the task you want to update on the home page.
  2. On the "View Details" page, you'll find a form pre-filled with existing task details.
  3. Make your updates to the task details.
  4. Click the "Save" button to save the changes.

- Viewing Tasks:
  - After creating or updating tasks, you can return to the home page to see the updated task list in the table.
  - You can select various filters to fetch the required tasks.

- Deleting Tasks:
  - Click on Delete icon to delete a task.

## Conclusion
You have successfully set up and run the Task app locally on your development environment. Feel free to explore the app, create new tasks, and update existing ones as needed.