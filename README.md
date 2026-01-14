# My Resume

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/tgsoverly/resume/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/tgsoverly/resume/tree/main)

Compile HTML and Latex files from templates and data.

I figured a resume for things in the computer field should at least demonstrate some ability to generate a document with some elegance and be repeatable and maintainable.

I very occasionally updated my resume and then had to generate it in at least a couple of formats and probably reinstall LaTeX, which on OS X is huge.  Ensuring the content of different file types matched was time-consuming.

# Goals

1. Make it easy to have the same information in multiple formats, because copy/pasting haunts me.
1. Automatically deploy the results somewhere for people to find. 

# Update Process

1. Make changes to data/templates
1. Push to GitHub.  This triggers a build on actions and a push to GitHub Pages.

# Build Locally

1. `npm install`
1. `grunt`

# Compiled Output

The compiled output is pushed to the following locations each time a change is made, and it builds properly in actions.

1. [CV.html](http://tgsoverly.github.io/resume/cv.html)
1. [CV.pdf](http://tgsoverly.github.io/resume/cv.pdf)
1. [Development.html](http://tgsoverly.github.io/resume/development.html)
1. [Development.pdf](http://tgsoverly.github.io/resume/development.pdf)

# TODOs

Still a work in progress because it really is just something that erks me and not something I need for a new job.

1. Websites to the contact data
