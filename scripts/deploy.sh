#!/bin/bash

# crude script to automate the steps needed to update prod with local changes.
# it's only awkward because github requires that all source files are in root.
# see: https://help.github.com/articles/generic-jekyll-build-failures/#source-setting

script="deploy"

# stash untracked
git stash save -u "stashing local modifications in preparation for deploy" 
echo "$script: Saved local modifications"

# on master, remove all tracked files and then directories
git checkout master
git ls-files -z | xargs -0 rm -f
git ls-tree --name-only -d -r -z HEAD | sort -rz | xargs -0 rmdir 
echo "$script: Cleaned master"

# now we have a clean branch
# copy across everything from source branch
git checkout source -- .
# move src contents to root, delete src
mv src/* . && rm -r src
echo "$script: Prepared files for commit"

# add, commit, push
git add . && git commit -m "latest changes" && git push origin master
echo "$script: Pushed to master"

# restore working state
git checkout source &&  git stash pop
echo "$script: Done!"
