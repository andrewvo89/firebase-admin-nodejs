# Firebase Admin NodeJS Helper

## Table of Contents

- [About](#about)
- [Getting Started](#-getting-started)
- [Usage](#usage)

## About

A small helper tool to quickly read and write from a Firebase Firestore database.

## Getting Started

Add a .env file in the root file with the following attributes.
```
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

You must add your key into double qoutes to allow expanded new lines option according with dotenv documentation.\
You can check that option at Rules section in dotenv github.\
https://github.com/motdotla/dotenv#rules  

### Prerequisites

Have NodeJS installed globally on your machine.

### Installing

Install node module dependencies.

```
yarn install
```

or

```
npm install
```

## Usage

1. Navigate to the root directory of this project in terminal.
2. Edit the run() inside index.js function with your read/write code.

3. Run the NodeJS Server.
```
node index.js
```