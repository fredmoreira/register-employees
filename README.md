# Register Employees [![CircleCI](https://circleci.com/gh/fredmoreira/register-employees.svg?style=svg)](https://circleci.com/gh/fredmoreira/register-employees)

## Register-Employees
A simple API REST for experiencing API testing frameworks, but use in talks and conferences as well.

## Requirements

* MongoDB
* Node & Npm


## Install && Run

It follows one step by step showing how to get the API running.

### Clone repository

```bash
git clone https://github.com/fredmoreira/phone-book
```

### Install 

```bash
npm i
```

**If you don't have the MongoDB database installed on your local machine, remember to run it via command line or another way before running the command below.**

```bash
npm start
```

## Runing the simple tests

```bash
npm test
```

### Lint

```bash
npm run code:lint
```

### Prettier

```bash
npm run code:prettier
```

The *precommit* is done by *git hooks* by package [husky](https://github.com/typicode/husky).

Therefore, whenever a *commit* is done, the following script will be executed:

```bash
npm run code:lint && npm run code:prettier
```

Any improvement will always be welcome.

:)
