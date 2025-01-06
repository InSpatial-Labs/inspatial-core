# 🚀 Contributing to InSpatial Core

First off, thank you for considering contributing to InSpatial! It's people like you that make open source such a great medium for collaboration and innovation 🎉

## 🌟 How Can I Contribute?

### 🐛 Reporting Bugs

1. **Use the GitHub issue tracker** - Check if the bug has already been reported.
2. **Check the closed issues** - Your issue might have been resolved in a newer version.
3. **Provide detailed information** - Include steps to reproduce, expected vs actual behavior, and your environment details.

### 💡 Suggesting Enhancements

1. **Use the GitHub issue tracker** - Check if the enhancement has already been suggested.
2. **Be clear and descriptive** - Explain why this enhancement would be useful to most users.
3. **Provide examples** - If applicable, share examples of how the feature would work.

### 🛠️ Pull Requests

1. **Fork the repo and create your branch** from `main`.
2. **Follow our coding conventions** - Check our style guide below.
3. **Make sure your code lints** - Run `deno lint` in the package you are changing before submitting.
4. **Write meaningful commit messages** - Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.
5. **Include tests** - New features and bug fixes should include tests. - use `deno test` to run tests do not use external test runners.

## 💻 Development Setup

1. Fork and clone the repository
2. Run `deno install` to install dependencies
3. Create a branch for your changes
4. Make your changes
5. Run tests with `deno test` 
6. Highlight the core package you are changing in your commit message e.g. `fix(dev): fix bug in @inspatial/kit package`
7. Push your branch and submit a pull request

Read [Deno's JSR documentation](https://jsr.io/docs) for best practices for contributing to a package.

## 🎨 Syntax and Style Guide

- Use TypeScript for all code
- ESM modules only: do not use CommonJS
- Use Deno APIs over Node.js APIs where possible
- Simple File Name: File names must be Windows and Unix compatible. This means that file names cannot contain characters like *, :, or ?. You may also not have multiple files with the same name, but different casing.
- No “slow types” - see [Slow Types](https://jsr.io/docs/about-slow-types) for more information.
- Always document your code by adding comments to the codebase - see [Writing Docs](https://jsr.io/docs/writing-docs) for more information.
- If you are writing shaders make sure to use WebGPU Shading Language (WGSL) or supersets like Three Shading Language (TSL) with backwards compatibility for WebGL 2.0 (GLSL) - there are helpers in the [@inspatial/util](https://inspatial.dev/) package to help with this.
- Follow functional and declarative programming patterns - see  [Patterns.dev](https://www.patterns.dev/) for more information.
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`)
- Structure files: exported component, subcomponents, helpers, static content, types
- Use [InSpatial Kit](https://inspatial.dev/kit) for constructing components and [InSpatial ISS](https://inspatial.dev/iss) for styling
- Use [Motion](https://motion.dev/) for animations and transitions


## 🚀 Release Channels

Choose the release channel that best fits your needs:

| Channel        | Description                           | Installation                          |
| -------------- | ------------------------------------- | ------------------------------------- |
| 🟢 **Stable**  | Production-ready release              | `deno install @inspatial/core`         |
| 🟡 **Preview** | Usable early access                   | `deno install @inspatial/core@preview` |
| 🔴 **Canary**  | Highly experimental, potentially unstable | `deno install @inspatial/core@canary`  |

### 🛠️ Quick Install Guide

## 🏆 Recognition

Contributors will be recognized in our [CONTRIBUTORS.md](CONTRIBUTORS.md) file. Thank you for your support!

## 📜 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🤔 Questions?

Don't hesitate to reach out if you have any questions. We're here to help!

Happy coding! 🎈
