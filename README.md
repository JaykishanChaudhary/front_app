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




# Deploying a React Frontend App on AWS S3

This README provides step-by-step instructions on how to create an S3 bucket on AWS and deploy your React frontend app to it.

## Prerequisites

Before you begin, make sure you have the following prerequisites in place:

1. An AWS account with appropriate permissions.
2. AWS CLI installed and configured with your credentials. You can configure it using `aws configure`.
3. Your React frontend app build files ready. You can create these files using `npm run build` or `yarn build`.

## Step 1: Create an S3 Bucket

1.1. Log in to your AWS Management Console.

1.2. Navigate to the AWS S3 service.

1.3. Click the "Create bucket" button.

1.4. Choose a unique bucket name (e.g., my-react-app-bucket). Remember this name as it will be used later.

1.5. Select the region where you want to create the bucket.

1.6. Leave all other settings as default and click the "Create bucket" button.

## Step 2: Upload Your React App Build Files

2.1. Open the newly created S3 bucket in the AWS S3 console.

2.2. Click the "Upload" button.

2.3. Select all the build files from your React app (typically located in the `build` folder) and upload them to the S3 bucket.

2.4. After uploading, select all files, click on the "Actions" button, and choose "Make public" to make the files publicly accessible.

## Step 3: Configure Bucket Properties

3.1. In the S3 bucket, click on the "Properties" tab.

3.2. Under the "Static website hosting" section, click the "Edit" button.

3.3. Select "Use this bucket to host a website."

3.4. Set the "Index document" to `index.html` (or your desired entry point).

3.5. Optionally, you can set up error documents if needed.

3.6. Click the "Save changes" button.

## Step 4: Configure Bucket Permissions

4.1. In the S3 bucket, click on the "Permissions" tab.

4.2. Under the "Block public access" settings, click the "Edit" button.

4.3. Uncheck all options to allow public access (if needed for your use case).

4.4. Click the "Save changes" button.

## Step 5: Enable Website Hosting

5.1. Go back to the "Properties" tab in your S3 bucket.

5.2. Under the "Static website hosting" section, you will see a URL endpoint for your website : `http://my-tasks-app.s3-website-us-east-1.amazonaws.com`.

## Step 6: Test Your Website

6.1. Open a web browser and enter the URL you noted down in Step 5. Your React app should now be accessible online.

## Step 7: Optional - Configure a Custom Domain

If you want to use a custom domain, you can configure it using AWS Route 53 or another DNS provider. Follow the DNS provider's instructions to point the domain to the S3 bucket's URL.




# MERN Stack Application with AWS Deployment - Design Choices and Challenges

## Design Choices

### Frontend
1. **React.js**: We chose React.js for the frontend due to its component-based architecture, which makes it easy to build reusable UI components and manage the application's state efficiently.

2. **Axios**: Axios was selected as the HTTP client to communicate with the backend because of its simplicity and flexibility in handling HTTP requests.

### DevOps and AWS
1. **AWS Deployment**: We deployed the application on AWS using the AWS Free Tier to make it accessible to a wider audience without incurring costs during the initial phase.

2. **S3 Bucket**: We set up an S3 bucket to host the Frontend website, allowing us to control the server environment and scalability.

## Challenges Faced

1. **AWS Configuration**: Configuring AWS services and setting up the EC2 instance required careful planning and understanding of AWS's infrastructure, which was initially challenging.

2. **Deployment Automation**: Initially, deploying the application manually was time-consuming. However, we overcame this challenge by automating deployment processes using AWS services like Elastic Beanstalk or CI/CD pipelines.

Overall, this project allowed us to gain valuable experience in building a MERN stack application with AWS infrastructure. We continuously improved our design choices and problem-solving skills throughout the development process.

For a more detailed understanding of the project and its components, please refer to the source code and deployment instructions provided in this repository.