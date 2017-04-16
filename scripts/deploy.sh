#!/bin/bash

# crude script to automate the steps needed to update prod with local changes.
# it's only awkward because github requires that all source files are in root.
# see: https://help.github.com/articles/generic-jekyll-build-failures/#source-setting

# stash untracked
git stash save -u "stashing local modifications in preparation for deploy" 
git checkout master
# remove all git tracked files
git ls-files -z | xargs -0 rm -f
# remove all git tracked dirs
git ls-tree --name-only -d -r -z HEAD | sort -rz | xargs -0 rmdir 
# now we have a clean branch
# copy across everything from source branch
git checkout source -- .
# copy the contents of /src to root
cp -a src/. .
# add, commit, push
git add . && git commit -m "latest changes" && git push origin master
git checkout source git stash pop
