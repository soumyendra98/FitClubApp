
# Technosapiens FitClub App

The Technosapiens FitClub App is a comprehensive solution designed to streamline gym operations, enhance member experience, and promote a healthy and active lifestyle. Leveraging advanced tools, cutting-edge techniques, and core values, the app empowers gym owners, staff, and members to achieve their fitness goals effectively.

## Meet Team Technosapiens

 - Soumyendra Srivastava 		       -> Frontend, Backend and Deployment
 
 - Siddhant Sancheti 			          -> Frontend, Backend and Deployment
 
 - Tanuja Reddy Maligireddy 	     -> Frontend, Backend and Documentation


## Links:
- [App Link](https://technosapeins.netlify.app/)

- [Project Report](https://docs.google.com/document/d/1jy0wLttNiWaMfY1qPLr4Htqvp2mg29S6JSl8vUmeujs/edit#)

- [Frontend Doc](https://docs.google.com/document/d/14fqP7jNRVIqx0nKnPiRpxi-uJcCxZBO6_kuMTdeiIbY/edit)

- [Backend Doc](https://docs.google.com/document/d/176wvD1xGQ25ZUm6XMnkX21dvNlrRbU-DVne1mlRY-hw/edit?usp=sharing)

- [Scrum Sheet](https://docs.google.com/spreadsheets/d/1HN0le52rM7cu-OspXAQySWGSONYIR2AQGERz5CyNwek/edit?usp=sharing)

- [JIRA Board](https://technosapiens.atlassian.net/jira/software/projects/TEC/boards/1) 


### Tech Stack:

1.Frontend - React.js

2.Backend - Node.js, Express.js

3.Database - MongoDB

4.Deployment – AWS, Docker
## Key Features

### Home Page Features

🏋️‍♂️ Gym Details: Access essential information about the gym, including its address, contact details, and opening hours. Stay informed and easily locate the facility for a convenient workout experience.

📅 Class Schedules: Explore the dynamic class schedules that outline the diverse range of fitness classes offered. Get details on class timings, dates, and subjects, enabling you to plan your workouts effectively.

### Enrolled Member Features

📆 Class Schedule: View the comprehensive class schedule, displaying upcoming and previous classes attended. Stay organized and never miss a class, ensuring you make the most of your membership.

⏳ Activity History: Track your fitness progress with a detailed activity log spanning the past seven, thirty, or ninety days. Gain insights into your workout patterns, achievements, and areas for improvement.

📝 Class Registration: Reserve your spot in classes by registering in advance. Secure your place in popular sessions, manage your fitness routine, and ensure a seamless experience.

⌚️ Workout Logging: Keep track of your workout activities by recording the duration of your sessions. Whether using specific gym equipment or engaging in weightlifting exercises, monitor your progress and stay motivated.

### Fitness Club Staff Features

📝 Member Enrollment: Efficiently enroll new members into the fitness club, capturing their details and facilitating a smooth onboarding process. Simplify membership management and enhance the member experience.

✅ Member Check-In/Check-Out: Streamline the check-in and check-out process for club members, ensuring accurate attendance records and maintaining facility security.

🆓 Free Trial Registration: Register non-members for free trial sessions, giving them a taste of the gym's offerings. Gather their information and showcase the club's unique features to attract potential new members.

📊 Analytics Dashboard: Gain valuable insights into gym performance, member engagement, and attendance trends through an intuitive analytics dashboard. Make data-driven decisions to optimize operations and drive business growth.

## XP Core Values:

📢 Communication: We prioritize open and transparent communication within our team. We believe that regular updates, progress sharing, and addressing challenges are essential for maintaining a shared understanding. By fostering a culture of active listening, clarity, and responsiveness, we promote effective collaboration and synergy among team members.

🔄 Feedback: We embrace a constructive feedback culture as a fundamental aspect of our team dynamics. We recognize the value of timely and specific feedback in helping each other improve and grow. Our feedback is delivered respectfully, focusing on the project's objectives and individual growth, ensuring that it promotes continuous learning and development.

🙌 Respect: We value and respect each team member as an integral part of our team. We appreciate diverse perspectives, opinions, and contributions, recognizing that they enrich our problem-solving and decision-making processes. Our inclusive and supportive environment encourages everyone to freely express their ideas and concerns, fostering a sense of belonging and collaboration.

By embracing these XP (Extreme Programming) core values, we establish a strong foundation for effective teamwork, continuous improvement, and successful project outcomes. These values create a positive and empowering work environment that promotes trust, collaboration, and innovation among team members.

## Backend

🚀 Reasons to choose Node.js and Express.js:

Easier Communication 🔄: Node.js allows developers to use JavaScript for both frontend and backend development. This enables seamless communication and collaboration between frontend and backend teams, as they can work in a unified language and share code, libraries, and utilities.

Rapid Development ⚡️: Node.js provides a lightweight and efficient runtime environment, allowing developers to start coding quickly without complex setup or configuration. This results in faster development cycles and increased agility when building backend applications.

Single-Threaded Event Loop 📚: Node.js utilizes a single-threaded event loop architecture, which handles concurrent requests efficiently without the need for manual thread management. This makes it well-suited for building scalable and responsive applications, especially in scenarios that involve high concurrency or microservices design.

Express.js Framework 🌐: Express.js is a popular JavaScript framework for building RESTful APIs. It provides a robust set of features and middleware that simplify the development of scalable and maintainable APIs. Express.js offers routing, request/response handling, middleware support, and other utilities that streamline the backend development process.

🔧 Technical Details:

The provided code snippet showcases the usage of Node.js with Express.js for building a backend server. Here are some additional technical details:

The code imports necessary modules such as express, helmet, xss-clean, express-mongo-sanitize, compression, cors, and passport. These modules enhance security, sanitize input data, enable compression, and handle cross-origin resource sharing (CORS).

The code initializes the Express.js application using express(), creating an instance of the Express application.

Various middleware functions are applied using the app.use() method. These middleware functions handle tasks such as setting security HTTP headers (helmet()), parsing JSON and URL-encoded request bodies (express.json() and express.urlencoded()), sanitizing input data to prevent cross-site scripting attacks (xss() and mongoSanitize()), enabling gzip compression (compression()), and enabling CORS (cors()).

Passport.js is used for JWT authentication (passport.initialize() and passport.use('jwt', jwtStrategy)). This allows the application to authenticate and authorize requests using JSON Web Tokens (JWT) and supports custom authentication strategies.

The code sets up API routes for version 1 (/v1) using app.use('/v1', routes). The actual routes and their corresponding handlers are defined in the routes/v1 module. This modular approach promotes code organization and maintainability.

Error handling is implemented using middleware functions such as errorConverter and errorHandler. These functions convert errors to a standardized format (ApiError) and handle them appropriately, returning the appropriate HTTP status code and error message.

The code includes additional utilities such as logging middleware (morgan) for request/response logging and rate limiting middleware (authLimiter) to limit repeated failed requests to authentication endpoints.

By utilizing Node.js and Express.js, this backend application provides a solid foundation for building scalable and secure APIs. It offers essential features like request handling, authentication, error handling, and security enhancements. The modular structure allows for easy extensibility and integration of additional functionality or third-party modules as per project requirements.

## Frontend

🚀 Reasons to choose React JS:

Component-Based 🧩: React.js follows a component-based architecture, where the UI is divided into reusable components. This allows for better organization of code, reusability, and easier maintenance.

Virtual DOM ⚡️: React.js utilizes a virtual DOM, a lightweight copy of the actual DOM. React performs updates on the virtual DOM and efficiently updates only the necessary parts of the actual DOM, minimizing expensive DOM manipulations and improving performance.

One-Way Data Flow ➡️: React.js enforces a unidirectional data flow, where data flows in a single direction from parent components to child components. This helps in better understanding and debugging of the application, as the data flow is predictable and avoids unexpected side effects.

Declarative Syntax 📝: React.js uses a declarative syntax, allowing developers to describe the desired UI state and React takes care of updating the actual UI to match that state. This makes it easier to reason about the application and write cleaner, more maintainable code.

Huge Ecosystem 🌍: React.js has a vast ecosystem with a wide range of libraries, tools, and community support. This ecosystem provides solutions for various needs like state management (Redux, MobX), styling (styled-components, CSS modules), and testing (Jest, Enzyme), making development faster and more efficient.

React Native 📱: With React Native, you can use your existing React knowledge to develop mobile applications for iOS and Android. It enables code sharing between web and mobile platforms, reducing development time and effort.

🔧 Technical Details:

The provided code demonstrates the usage of React.js in a frontend application. Here are some additional technical details:

The application uses React Router 🌐 for handling routing and navigation. It allows for defining different routes and rendering corresponding components based on the URL.

The useState hook from React is used for managing component-level state. It allows functional components to have stateful behavior without using class components.

The code follows a modular approach by dividing the UI into reusable components. Components like Navbar, Sidebar, and various pages (Service, Classes, Pricing, etc.) are used to create a structured and reusable UI.

The application includes features like user authentication (LoginComponent) and user registration (SignupComponent). These components handle user input, perform data validation, and interact with the backend API for authentication and registration.

The callBackHandler function is passed as a prop to child components to update the login status in the parent component (App) when certain events occur. This helps in managing the login state of the application and controlling the visibility of certain components based on the user's authentication status.

The application includes additional functionality such as a gym enrollment form (GymEnrollment), a log hours feature (LogHours), an activities chart (ActivitiesChart), and a class schedule display (ClassSchedule). These components interact with backend APIs or services to fetch and update data related to gym memberships, activity logs, and class schedules.

The code uses CSS stylesheets (App.css) for styling the components, and it can be extended or modified to meet specific design requirements. Additional CSS frameworks or libraries, such as Bootstrap or Tailwind CSS, can be integrated to enhance the UI styling.

## Deployment using AWS and Docker:

🚀 AWS (Amazon Web Services): We chose AWS as our deployment platform due to its extensive range of cloud services and its reputation for reliability and scalability. By utilizing AWS, we have access to a wide array of infrastructure and platform services, such as EC2, RDS, S3, and more, that enable us to build and deploy our application with ease.

🐳 Docker: Docker is a containerization platform that allows us to package our application and its dependencies into lightweight, isolated containers. With Docker, we achieve consistency in our deployment process across different environments, ensuring that our application runs reliably and predictably regardless of the underlying infrastructure.

📦 Container Orchestration with AWS ECS (Elastic Container Service): AWS ECS is a fully managed container orchestration service that simplifies the deployment and scaling of Docker containers. It provides automatic load balancing, high availability, and auto-scaling capabilities, allowing us to efficiently manage our containerized application in production.

🔒 Security with AWS IAM (Identity and Access Management): AWS IAM enables us to manage access to AWS resources securely. We can define fine-grained permissions and roles, ensuring that only authorized individuals or services can interact with our deployed application and its underlying infrastructure.

⚙️ Infrastructure Automation with AWS CloudFormation: AWS CloudFormation allows us to define our infrastructure as code using templates. With CloudFormation, we can provision and manage AWS resources in a repeatable and automated manner, reducing the potential for manual errors and simplifying the deployment process.

⚡️ High Availability with AWS Load Balancers and Auto Scaling: By utilizing AWS Load Balancers and Auto Scaling, we can ensure high availability and scalability for our application. Load Balancers distribute incoming traffic across multiple instances of our application, while Auto Scaling automatically adjusts the number of instances based on demand, ensuring optimal performance and resource utilization.

🔒 Secure Network Communication with AWS VPC (Virtual Private Cloud): AWS VPC allows us to create isolated virtual networks for our application, providing secure communication and control over network traffic. We can define subnets, configure security groups, and establish VPN connections to securely connect our application with other resources and networks.

🌐 DNS Management with AWS Route 53: AWS Route 53 is a highly scalable and reliable DNS management service. It allows us to register domain names, route traffic to the appropriate resources, and perform health checks for our application. Route 53 ensures reliable and efficient DNS resolution for our deployed application.

💻 Continuous Integration and Deployment with AWS CodePipeline: AWS CodePipeline provides a fully managed continuous integration and deployment service. We can define a pipeline that automatically builds, tests, and deploys our application whenever changes are made to the code repository. This enables us to deliver updates and new features to our users quickly and reliably.

By leveraging the capabilities of AWS and Docker, we can deploy our application in a scalable, secure, and automated manner. This deployment approach ensures high availability, fault tolerance, and efficient resource utilization, allowing us to focus on developing and delivering a robust application to our users.

<!-- ## Diagrams:

Architecture Diagram:

![Arch Diagram](https://drive.google.com/file/d/18XMZ8G7peXCO91vW-FBAPv3ng1Uca8kv/view?usp=sharing)

Use-Case Diagram:

![UseCase](https://drive.google.com/file/d/1bF1YkmX_631LMo-_um7HixDA20Mpa228/view?usp=sharing)

Activity Diagram (Employee)

![Employee](https://drive.google.com/file/d/1X_18XSkYtubccNfNVt90Q9B6zRLgZShE/view?usp=sharing)

Activity Diagram (Members):

![Members](https://drive.google.com/file/d/1Dy_wxwq1E1aJwmzg4o0K-IJFoi2EZd3x/view?usp=sharing)

Component Diagram:

![Comp Diagram](https://drive.google.com/file/d/1pRissdcT2yV8CpNbsbBsb-5UfVb0y3nh/view?usp=sharing)

Burndown Chart: 

![Burndown Chart](https://drive.google.com/file/d/1vnLiqfh6LucSTIuRKMarlO_I4DifwbCW/view?usp=sharing) -->

 
**Team Members and Contributions:**
1. Soumyendra Srivastava - Frontend, Backend and Deployment
2. Siddhant Sancheti - Frontend, Backend and Deployment
3. Tanuja Reddy Maligireddy - Frontend, Backend and Documentation
 
SPRINT DURATION: 2 WEEKS
 

### Diagrams

Architecture Diagram:

![Architecture Diagram](https://github.com/gopinathsjsu/team-project-technosapiens/blob/master/Docs/Architecture%20Diagram.png)

Use-Case Diagram:

![Use-Case Diagram](https://github.com/gopinathsjsu/team-project-technosapiens/blob/master/Docs/UseCase%20Diagram.png)

Activity Diagram (Employee):

![Activity Diagram (Employee)](https://github.com/gopinathsjsu/team-project-technosapiens/blob/master/Docs/Activity%20Diagram%20Admin%20.png)


Activity Diagram (Members):

![Activity Diagram (Members)](https://github.com/gopinathsjsu/team-project-technosapiens/blob/master/Docs/Activity%20Diagram%20Member.png)

Component Diagram:

![Component Diagram](https://github.com/gopinathsjsu/team-project-technosapiens/blob/master/Docs/Component%20Diagram.png)

AWS Instances:

![Instances](https://github.com/gopinathsjsu/team-project-technosapiens/blob/master/Docs/Instances.png)

Load Balancers:

![Load Balancers](https://github.com/gopinathsjsu/team-project-technosapiens/blob/master/Docs/Load%20Balancers.png)

Burndown Chart:

![Burndown Chart](https://github.com/gopinathsjsu/team-project-technosapiens/blob/master/Diagrams/animation.gif)
