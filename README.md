# Tab contents:
0. [App Home](https://video-sharing-blush.vercel.app/signin)
1. [Features](#features)
2. [Local Development](#local-development)
3. [Docker Development](#docker-development)
4. [How to run test](#how-to-run-test)
5. [Backend API](#backend-API)

# Features:
1. Sign in/ Sign up
2. List videos sharing
3. Sharing a video
4. Notify a new video sharing
5. Like/Unlike a video

# Local Development:
1. [Prerequisites](#prerequisites)
2. [Scripts](#scripts)

## Prerequisites:
1. Ruby >= 3.2.2
2. Rails >= 7.0.4.3
3. Node >= 18.15.0
4. NextJS >= 14
5. Postgresql >= 14.7

## Scripts:
    # Setting up database:
    bin/setup

    # Up and running:
    bin/rails s -b 0.0.0.0

    # NEXT app
    npm install && PORT=9000 npm run dev
# Docker Development:
1. [Prerequisites](#prerequisites-1)
2. [Scripts](#scripts-1)

## Prerequisites:
1. Docker
2. Docker Compose

## Scripts:
    # Up and running:
    docker compose up

# How to run test:
## With local machine:
    # Run unit test
    bundle exec rspec
## With docker:
    # Run unit test
    docker compose run backend bundle exec rspec

# User document:

## Brief:
- You can switch between Sign In or Sign Up pages
- You can sign up without confirm your email address
- Home page list all of sharing videos at once

# Further improvement - future features:
1. Paginate - Infinity scroll
2. Like/Unlike
3. User's sharing videos

# Backend API
- BASE_URL: https://video-sharing-sqba.onrender.com
- API lists:
  - Signin: POST `/signin`
  - Signup: POST `/signup`
  - Signout: DELETE `/signout`
  - Share Video: POST `/videos`
  - List Videos: GET `/videos`
  - Vote a video: POST `/videos/{video_id}/vote`
  - Get Current user: GET `/current_user`
