# Bubble
This repository is for the development of a new social app prototype.

# Set Up
1. Install npm https://docs.expo.dev/get-started/installation/
2. Install expo https://docs.expo.dev/get-started/installation/

# To Run the App
1. Pull from GitHub
2. Run `npm install` to update the `node_module` folder
3. Run `expo start` to initialize the Expo CLI
4. Use QR code to run on Expo Go App, or type `i`, `a`, `w` to run simulation for iOs, Android, or web

# Node Module Error
1. Delete the `node_modules` folder
2. Run `npm install` to reinstall the `node_modules` folder

# Git Dev Flow
To get started:

- Clone this repo locally
- Branch out from the `main` branch (`fix/*`, `feat/*`, `temp/*`)
- Implement update, commit your code
- Push your commits and open a pull request towards the `main` branch
- Follow the rules below

## Contributing code
- All code repositories should use Git
- Each Git repository should have one trunk (aka main, master) branch
- Pushing commits directly towards trunk branch is prohibited with branch policies. Force pushes are not allowed at all except for branches created by author.
- To make changes:
  - Clone repository locally
  - Branch out from trunk branch
- Make as many commits as needed.  Push frequently.
- Write comments. Strive for WHY and HOW, not WHAT:
  - Good comments don't replace bad code
  - Prefer clear to "smart" code. Good code is easy to understand and debug.
  - If writing a clear comment is difficult, then maybe the problem is in the code itself.
  - Main purpose of comments is to clear confusion
- Strive for:
  - Good change descriptions (See Commit Message conventions below)
  - Small code changes (See Code Changes conventions below)
  - Plan on handling code reviewer comments
- Before opening a pull request:
  - Try to **squash commits** that are related to each other (check on Commit Message conventions below). For example, when working on a bug fix there might be multiple commits attempting to make the same issue, squashing those commits together would make it easier for code reviewers to see what happened in this pull request.
  - Run
  ```
  git rebase main -i
  git push --force-with-lease 
  ```
  to update latest main branch code on your feat branch and rewirte your own remote branch with your rebased updated local feat branch and make PR (with squashed commits) to main.

  - It's preferable to run the code formatting checks (format, lint, policy checks, etc…) locally before opening the PR. The reason being that sometimes many of these issues are easily fixable when you're still on the same issue rather having moved on to something else. Check the project README for how to run.
- Once ready, open the pull request.
  - For best practices on the code review process, please consult The Standard of Code Review | eng-practices (google.github.io)
  - Request one Required Review and one Optional Review from different people. The PR won't be mergeable without the approval of the Required Review.
  - The main reason for the code review process is to facilitate/enforce knowledge sharing while features/updates are being developed.

## Branch Naming
- Use short, actionable description of what the task is about. Avoid long/descriptive branch names.
- Try to keep a consistent pattern for branch names
- Prepend related ticket number to the branch name
- Start the branch name with a group-word:
  - feat: feature that's being added or expanded
  - fix: bug fixes
  - temp: throwaway branches for experimentation
- Use a slash (/) as a separator after the group name, then use hyphens for multiple words
- Examples:
  - Encouraged: 
	  - feat/gateway-connector
	  - bug/jira-auth
	  - temp/update-lib-versions
  - Discouraged:
	  - test-fix
	  - update-libs
	  - trying-to-fix-the-thing-that-keeps-breaking

## Code Change
- Aim to make code contributed easier for:
  - Quick code reviews
  - Thorough code review
  - Less likely to introduce bugs
  - Less wasted time if changes get rejected
  - Easier to merge (less or no conflicts)
  - Easier to design well
  - Less blocking
  - Simpler to roll back
- Encouraged practices:
  - Make PRs that address just one thing. When in doubt, it's better to err on the side of a too-small PR rather than a too-big one.
  - Include as much details as possible for code reviewer to be able to review the PR easily. Think of what you'd like to see in a PR if you are the one doing the code review. Assume code reviewer has no context and additional links or written information will be helpful in getting clarity.
- Sometimes, large PRs are ok, for example:
  - Automatic changes done by a code formatting tool
  - Deletions of files, modules
- Refactor code in a separate PR. For example, when fixing a bug in an class, it's best not to rename the class in the same change as it'll be more difficult to understand the context by the reviewer. Sometimes, small cleanups (such as variable naming and scope changes) can be included in a feature PR, it's up to the judgment of the contributor to make the call.
- Keep test changes, additions and removals in the same PR as the code that was changed.
- In case there's a need to have multiple PRs merged right after each other, make sure that neither one of the PRs breaks the build. Consider that unintended consequences could happen along the way of merging and breaking the build pipeline might slow your team down or prevent them from running/merging their code.