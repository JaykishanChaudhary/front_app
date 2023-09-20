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