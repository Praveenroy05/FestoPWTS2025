
// When we are starting the project from scratch

// 1. Write the code in local
// 2. Create a repo inside version control (Github)
// 3. Initiate a git inside our local system
// 4. Link our local repo(.git) to the remote repo(Github)
// 5. Push the code to the remote repo(Github)
// 6. We have to create a Pull Request(PR)
// 7. Merge the PR to the main branch(master/release)


// When we are working on existing repo

// 1. Clone the repo inside our local system
// 2. Create a new branch in the local git - LoginPage (branchname)
// 3. Make changes in the local git - LoginPage (branchname)
// 4. Commit the changes in the local git - LoginPage (branchname)
    //1. git add . - Add all the changes to the local git
    //2. git commit -m "commit message" - Commit the changes in the local git
    //3. git push origin LoginPage - Push the changes to the remote repo
// 5. We have to create a Pull Request(PR)
// 6. Merge the PR to the main branch(master/release)
// 7. Delete the branch in the local git - LoginPage (branchname) - Optional
// 8. Delete the branch in the remote repo - LoginPage (branchname) - Optional


// When you again started working on some other feature

// 1. Inside the local system move to the main branch - [git checkout mainbranchname]
// 2. Pull the latest changes from the main branch to your local system. - git pull
// 3. Create a new branch in the local git - [git checkout -b newbranch]
// 4. Make changes in the local git - newbranch
// 5. Commit the changes in the local git - newbranch
// 6. Push the changes to the remote repo - newbranch
// 7. We have to create a Pull Request(PR)
// 8. Merge the PR to the main branch(master/release)

// git status - the changes have been made inside the local system
// git branch - Check the branch that you are currently working on
// git branch -a - Check all the branches that are available in the local system