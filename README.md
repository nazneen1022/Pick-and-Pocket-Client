## 👩🏻‍💻 Pick and Pocket 💰

This main idea of this project is about picking short-time works posted by the requesters, that can be accomplished within a day and pocket/earn real money besides helping them finish their work sooner. Also increase the communal bond 👫 of supporting eachother either with some work to share or earn some money in their free time.

With Pick and Pocket, you will have a platform to post your work for sharing or pick up some short-time works posted by others to make some money in your free time.

## Contents

- [App Demo](https://github.com/nazneen1022/Pick-and-Pocket-Client#App-Demo)
- [Technology Used](https://github.com/nazneen1022/Pick-and-Pocket-Client#technology-used)
- [Goals of this project](https://github.com/nazneen1022/Pick-and-Pocket-Client#goals-of-this-project)
- [User stories and Wireframe](https://github.com/nazneen1022/Pick-and-Pocket-Client#user-stories-and-wireframe)
- [Git Workflow](https://github.com/nazneen1022/Pick-and-Pocket-Client#git-workflow)
- [Server Repo](https://github.com/nazneen1022/Pick-and-Pocket-server)

## App Demo

- GIF representing my app

![image](https://user-images.githubusercontent.com/63520290/85857312-e3637400-b7b9-11ea-805f-7f250db50ad2.png)

- App screenshots (v1.0)

![image](https://user-images.githubusercontent.com/63520290/85855894-456eaa00-b7b7-11ea-9d47-389458ac1abc.png)
![image](https://user-images.githubusercontent.com/63520290/85855985-6cc57700-b7b7-11ea-96bd-f5da9c6ba8f6.png)
![image](https://user-images.githubusercontent.com/63520290/85856548-80251200-b7b8-11ea-9716-efcd3a775cd3.png)
![image](https://user-images.githubusercontent.com/63520290/85856302-10af2280-b7b8-11ea-925e-fc098cfbe698.png)
![image](https://user-images.githubusercontent.com/63520290/85857002-4d2f4e00-b7b9-11ea-8a0d-ca5dd43ac25e.png)

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

## User stories & Wireframe

- User Stories

  - As a person who has work that needs to get done I should be able to login to the app and I can post requesting a service, so I can get my work done by someone
  - As a user, I would like to see a dashboard. In this dashboard, I am able to see other users’ posts ao that I can see available works
  - As a person who has some work, I have my own dashboard where I can see only my posts and accept the work done by others, so that I can track the work completion.
  - As a person looking for work I want to respond to the available short time job(s) so that I can help and make some money
  - As a person looking for work I want my client to be able to pay me, so I can easily get rewarded
  - As a person looking for work I want to be able to receive a notification when a new job is posted, so that I can stay updated - Work in progress

  This mvp is still a work in progress. Some features still need to be implemented and revised. If you have any suggestions, please let me know here.

- Wireframe

  - [Pick and Pocket Wireframe](https://github.com/nazneen1022/Pick-and-Pocket-Client/blob/development/src/Pick-and-Pocket%20WireFrame.pdf)

## Git Workflow

- In this project I try to use:

- Good commit messages
- Named branches
- Pull requests with summaries
- Used development branch without merging to the master all-time

👇 Click below links to view 👀 samples of pull requests

- [feat-push-notification](https://github.com/nazneen1022/Pick-and-Pocket-Client/pull/5)
- [feat-payment](https://github.com/nazneen1022/Pick-and-Pocket-Client/pull/4)

## Server Repo

- The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/nazneen1022/Pick-and-Pocket-server)
