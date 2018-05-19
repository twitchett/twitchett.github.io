#!/bin/bash

# crude script to automate the steps needed to update prod with local changes.
# it's only awkward because github requires that all source files are in root.
# see: https://help.github.com/articles/generic-jekyll-build-failures/#source-setting

script="deploy"

# set commitMsg to first arg if passed, otherwise set to default value
commitMsg=${1:-"latest changes"}

# stash untracked
git stash save -u "stashing local modifications in preparation for deploy" 
echo "$script: Saved local modifications"

# build site
rm -rf .site && npm run build-prod

# on master, remove all tracked files and then tracked directories
git checkout master
git ls-files -z | xargs -0 rm -f
git ls-tree --name-only -d -r -z HEAD | sort -rz | xargs -0 rmdir 
echo "$script: Cleaned master"

# keep gitignore
git checkout .gitignore

# copy built files into root and stage them
cp -a .site/* .
git add . && git reset -- .site
echo "$script: Prepared files for commit"

# commit, push
git commit -m "$commitMsg" && git push origin master
echo "$script: Pushed to $(git rev-parse --abbrev-ref HEAD)"

# restore working state
git checkout source && git stash pop
rm -rf .site
echo "$script: Done!"
