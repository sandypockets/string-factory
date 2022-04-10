---
sidebar_position: 6
sidebar_label: "Contributing"
---

# Contributing to `string-factory`

The following is a set of guidelines for contributing to `string-factory`. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](code-of-conduct). By participating, you are expected to uphold this code. Please report unacceptable behavior to [hello@sandypockets.dev](mailto:hello@sandypockets.dev).

## How Can I Contribute?

#### How Do I Submit A Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). Create an issue, and provide the following information by filling in the questions in the issue template.

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. 
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, (or examples in StackBlitz or CodeSandbox), which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements
When you are creating an enhancement suggestion, please include as many details as possible, including the steps that you imagine you would take if the feature you're requesting existed.

### Pull Requests

The maintainers must be satisfied prior to having your pull request reviewed, and the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less

### JavaScript Styleguide

All JavaScript code is linted with [Prettier](https://prettier.io/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible

## Automating the development process
If you're writing new functions for the library, then you can use a the `createNewFunctionFiles` script to generate a new function file and test file. To run the script, run the following command, replacing `myNewFunctionName` with the actual name of the function you're creating: 

```shell
yarn new myNewFunctionName
```

This will generate a new directory with a new function file and test file.

```shell
src/myNewFunctionName/myNewFunctionName.js
src/myNewFunctionName/myNewFunctionName.test.js
```

It will also generate an export statement in the `src/index.js` file, and create a new documentation entry in the `docs/myNewFunctionName.md` file.

### Testing your new function
When your function code and tests are written, run `yarn test`. This will lint your code, run the build script, then run your tests. If you have any errors, you can fix them and re-run the tests by once again running `yarn test`. Once all test are passing, submit your pull request.