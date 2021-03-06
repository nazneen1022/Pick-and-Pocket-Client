## Introduction

Hi 👋, I am Nazneen, and this is my portfolio project which is a web application named 'Pick & Pocket'. For now, I have implemented a MVP with few important features and other features will be worked and added in future.

👉 Click [here](https://pick-and-pocket.netlify.app/) for deployed Version v1.0 of this app.

## 👩🏻‍💻 PICK & POCKET 💰

This main idea of this project is about picking short-time works posted by the requesters, that can be accomplished within a day and pocket/earn real money besides helping them finish their work sooner. Also increase the communal bond 👫 of supporting eachother either with some work to share or earn some money in their free time.

With Pick and Pocket, you will have a platform to post your work for sharing or pick up some short-time works posted by others to make some money in your free time.

## Contents

- [App Demo](https://github.com/nazneen1022/Pick-and-Pocket-Client#App-Demo)
- [Technology Used](https://github.com/nazneen1022/Pick-and-Pocket-Client#technology-used)
- [Goals of this project](https://github.com/nazneen1022/Pick-and-Pocket-Client#goals-of-this-project)
- [User stories & Wireframe](https://github.com/nazneen1022/Pick-and-Pocket-Client#user-stories-and-wireframe)
- [Git Workflow](https://github.com/nazneen1022/Pick-and-Pocket-Client#git-workflow)
- [Server Repo](https://github.com/nazneen1022/Pick-and-Pocket-server)

## App Demo

![Home1](https://user-images.githubusercontent.com/63520290/86539723-38606200-beff-11ea-9cc1-58e8e1631327.png)
![Home2](https://user-images.githubusercontent.com/63520290/85929934-d11c2f80-b8b8-11ea-8b7c-3c1f535be5aa.png)
![Email](https://user-images.githubusercontent.com/63520290/86539759-7493c280-beff-11ea-8384-9ba0f94d105e.png)
![payment-feature](https://github.com/nazneen1022/Pick-and-Pocket-Client/blob/master/src/Images/Payment-Feature.gif)
![New-Work-PostForm](https://user-images.githubusercontent.com/63520290/86539867-5aa6af80-bf00-11ea-95cd-3947da76a0fe.png)
![push notifications-feature](https://github.com/nazneen1022/Pick-and-Pocket-Client/blob/master/src/Images/PushNotifications-feature.gif)

## Technology Used

- [React](https://github.com/nazneen1022/Pick-and-Pocket-Client/blob/master/src/App.js)
- [Redux](https://github.com/nazneen1022/Pick-and-Pocket-Client/tree/master/src/store)
- [Nodemailer](https://github.com/nazneen1022/Pick-and-Pocket-server/blob/master/routers/sendMail.js) ⭐️
- [Stripe](https://github.com/nazneen1022/Pick-and-Pocket-server/blob/master/routers/payment.js) ⭐️
- [Socket io](https://github.com/nazneen1022/Pick-and-Pocket-server/blob/master/routers/post.js) ⭐️
- [React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction)
- [Express](https://github.com/nazneen1022/Pick-and-Pocket-server/blob/master/index.js)
  - [Rest API](https://github.com/nazneen1022/Pick-and-Pocket-server/blob/master/routers/payment.js)
- [Sequelize](https://github.com/nazneen1022/Pick-and-Pocket-server/blob/master/models/post.js)

⭐️ New technologies learned during this project.

## Goals of this project

The goal of this project is to build a full-stack app using new technologies not gone through during the bootcamp. Learned and used these new tools by going through documentations.

- Practice full-stack development
- Usage of what we learned in the bootcamp
- Practice learning new technology independently
- Showcase development approach of using wireframes and user stories
- Practice disciplined git usage like proper commits & branching.

## User stories and Wireframe

- User Stories

  - As a person who has work that needs to get done I should be able to login to the app and I can post requesting a service, so I can get my work done by someone
  - As a user, I would like to see a dashboard. In this dashboard, I am able to see other users’ posts ao that I can see available works
  - As a person who has some work, I have my own dashboard where I can see only my posts and accept the work done by others, so that I can track the work completion.
  - As a person looking for work I want to respond to the available short time job(s) so that I can help and make some money
  - As a person looking for work I want my client to be able to pay me, so I can easily get rewarded
  - As a person looking for work I want to be able to receive a notification when a new job is posted, so that I can stay updated.

  This mvp is still a work in progress. Some features still need to be implemented and revised.

- Wireframe

  - [Pick & Pocket Wireframe](https://github.com/nazneen1022/Pick-and-Pocket-Client/blob/development/src/Pick-and-Pocket%20WireFrame.pdf)

## Git Workflow

In this project I try to use:

- Good commit messages
- Named branches
- Pull requests with summaries
- Used development branch without merging to the master all-time

👇 Click below links to view 👀 samples of pull requests

- [feat-push-notification](https://github.com/nazneen1022/Pick-and-Pocket-Client/pull/5)
- [feat-payment](https://github.com/nazneen1022/Pick-and-Pocket-Client/pull/4)
- [code review](https://github.com/nazneen1022/Pick-and-Pocket-Client/pull/12)

## Server Repo

- The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/nazneen1022/Pick-and-Pocket-server)

## How to Install this?

- clone the app
- cd into your project
- Install dependencies using `npm install`
- start development server using `npm run start`

❗️Note: I have used a `Stripe Checkout` for payment related feature, please create your own Stripe account and stripe publishable key 🗝 and add it to .env file using name REACT_APP_STRIPE_PUBLISHABLE_KEY = <YOUR_STRIPE_PUBLISHABLE_KEY>
