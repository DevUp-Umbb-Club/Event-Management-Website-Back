# **ExpressJs Project**

Welcome to the **Event management website Project**! This README will guide you through setting up the project, collaborating effectively, and contributing your features.

---

## **Project Overview**

This project is built using **Express**. Our primary goal is to work collaboratively and build awesome features together while maintaining a clean and organized codebase.

### **Figma Design Link**
You can find the design for this project on **Figma** here:  
[🔗 Figma Link](https://www.figma.com/design/20LG4S5uMvwJcXyO5aQnge/Club-Event-Management-Website?node-id=0-1&t=dZBvnbRBzLNmcOQd-1) 

---

## **Getting Started**

### **1. Prerequisites**
Before you begin, ensure you have the following installed on your machine:
- **Node.js** (v18 or above)
- **npm** (comes with Node.js)

To check if these are installed, run the following commands in your terminal:
```bash
node -v
npm -v
```
### **2. Clone the Repository**
Open your terminal and navigate to the folder where you want to save the project.

Clone the repository:

```bash
git clone https://github.com/DevUp-Umbb-Club/Event-Management-Website
```
Navigate to the project directory:

```bash
cd <project-folder>
```
### **3. Install Dependencies**
Run the following command to install all the necessary dependencies:

```bash
npm install
```

### **4. Create .env file and add the db Link**

```bash
DB_URL=the_url_provided
```
### **5. Launch the Development Server**
Start the development server to preview the project:

```bash
npm run dev
```
After running the command, the terminal will display a URL (usually http://localhost:5173). Open this URL in your browser to view the project.

### **6-Collaboration Workflow**
To collaborate on this project, follow the steps below:

#### ***Step 1: Create a feature branch***

Before making changes, always create a new branch for the feature/bugfix you're working on:

Pull the latest changes from the main branch of the original repository:
```bash
git pull 
```
Create a new branch for your feature:
```
git checkout -b <feature-name>
````
(Replace <feature-name> with a descriptive name, e.g., feature-login-page.)

#### ***Step 2: Work on Your Feature***
Make changes in your local environment.
Test your code thoroughly.
Regularly commit your changes with meaningful messages:
```bash
git add .
git commit -m "Add <description-of-change>"
```
(Replace <description-of-change> with a brief explanation, e.g., "Add Login page UI".)
#### ***Step 3: Push Your Feature Branch***
Push your branch to your forked repository on GitHub:

```bash
git push origin <branch-name>
```
#### ***Step 4: Create a Pull Request***

1. Go to **Pull Requests** on GitHub.
2. Click on **New Pull Request**.
3. Set the base to `master` and compare it with your feature branch.
4. Click on **Create Pull Request**.
5. Add a description if needed.
6. Submit the pull request.
   
Make sure the base repository is the original repository and the base branch is main.
Add a clear description of your changes, including what you worked on and why.
Assign reviewers if needed, then submit the pull request.

#### ***Step 5: Address Feedback***
If there’s feedback on your pull request:

Make the requested changes on your local branch.
Push the changes:
```bash
git add .
git commit -m "Update based on feedback"
git push origin <branch-name>
```
Your pull request will automatically update with the new commits.
