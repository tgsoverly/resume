#!/bin/bash

# This script was modified from http://www.steveklabnik.com/automatically_update_github_pages_with_travis_example/
# Saved me lots of time, thanks Steve!
set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd dist

git init
git config user.name "Timothy Overly"
git config user.email "timothy@overly.me"

git remote add upstream "https://$GH_TOKEN@github.com/tgsoverly/resume.git"
git fetch upstream
git reset upstream/gh-pages

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages
