# Connect to GitHub

**Git is not installed on this computer.** I cannot automatically initialize the repository for you.

You have two options to proceed.

## Option 1: Install Git (Recommended)

1.  Download and install Git from [git-scm.com](https://git-scm.com/downloads).
2.  During installation, checking "Git Bash Here" and "Add to PATH" is recommended.
3.  Once installed, restart your terminal/VS Code.
4.  Run the following commands in the terminal:

    ```bash
    git init
    git config user.name "denispereztamayo-cyber"
    git config user.email "denis.pereztamayo@gmail.com"
    git add .
    git commit -m "Initial commit"
    git branch -M main
    
    # Replace <REPO_NAME> with your new repository name
    git remote add origin https://github.com/denispereztamayo-cyber/<REPO_NAME>.git
    git push -u origin main
    ```

## Option 2: Manual Upload (No Git Required)

1.  Go to [github.com/new](https://github.com/new) and create a repository.
2.  I have created a zip file of your project: **`project.zip`** in this folder.
3.  In your new GitHub repository, click **"uploading an existing file"**.
4.  Drag and drop the contents of your project (or unzip `project.zip` and upload the files) to GitHub.
