#!/bin/bash

# crude script to automate the steps needed to update prod with local changes.
# it's only awkward because github requires that all source files are in root.
# see: https://help.github.com/articles/generic-jekyll-build-failures/#source-setting

# stash the changes we don't want to commit
git stash save -u "stashing local modifications in preparation for commit to master" 
# copy all contents of /src to root
cp -a src/. .
# these are the changes we want to commit. stash them.
git stash save -u "changes for master"
# now checkout master and add changes
git checkout master && git stash pop
# add, commit, push
git add . && git commit -m "latest changes" && git push origin master
git checkout source # check the original branch
git stash pop