# My Resume

[![Build Status](https://travis-ci.org/tgsoverly/resume.svg?branch=master)](https://travis-ci.org/tgsoverly/resume)

Compile HTML and Latex files from templates and data.  

I figured a resume for things in the computer field should at least demonstrate some ability to generate a document with some elegance and be repeatable and maintainable.  

I very occationally updated my resume and then had to generate it a at least a couple formats and probably reinstall latex, which on OS X is huge.  Making sure they matched was time consuming.

Compiled Output:

1. [HTML](http://tgsoverly.github.io/resume/cv.html)
1. [PDF](http://tgsoverly.github.io/resume/cv.pdf)

# Goals

1. Make it easy to have the same information in multiple formats, because copy/pasting haunts me.
1. Automatically deploy the results some place for people to find, if it fails to deploy I get a travis failure.

# Update Process

1. Make changes to data/templates
1. Push to github.  This triggers a build on travis and a push to github pages.

# Build

1. `npm install`
1. `grunt`

# TODOs

Still a work in progress because it really is just something that erks me and not something I need for a new job.

1. Make the HTML look better
1. Websites to the contact data
