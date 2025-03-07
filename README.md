<img alt="Links" src="public/images/readme.banner.jpg" />

<h1 align="center">
    Linkly
</h1>

<p align="center">
    Fast and account-free URL Shortener API, just shorten a link and generate a token to manage!
</p>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,ts,git,docker" />
  </a>
</p>

## Content Table

- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Conventional Commits](#conventional-commits)
- [License](#license)
- [Contact](#contact)

## Requirements

- `NodeJS v20.x`
- `npm v10.x`
- `Docker >= v28.0.0`

## Getting Started

Follow the step-by-step instructions to set up and run the project:

1. Clone the repository:

    ```bash
    git clone https://github.com/Victor101106/Linkyn.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure environment variables:

    - Copy `.env.example` file and rename it to `.env`:

        ```bash
        cp .env.example .env
        ```

    - Update the `.env` file with the required values. Refer to the [Environment Variables](#environment-variables) for details.

4. Run the project in development mode:

    ```bash
    npm run start:dev
    ```

## Environment Variables

To run the project correctly, you must set the required environment variables. Create a `.env` file in the root directory based on the `.env.example` file. Below is a description of the required variables:

| Variable | Description                           | Example Value |
|----------|---------------------------------------|---------------|
| `PORT`   | The port where the server will listen | `3030`        |

## Conventional Commits

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification to maintain a clean and consistent commit history.

### Commitizen: How to Use

1. Stage your changes:

    ```bash
    git add [<pathspec>...]
    ```

2. Commit using `Commitizen`:

    ```bash
    npm run git:commit
    ```

3. Follow the interactive prompts.
    `Commitizen` will guide you through crafting a proper commit message.

### Message Structure

The commit message should be structured as follows:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Example:

```bash
feat(auth): add login functionality
```

## License

Distributed under the GPL v3.0 license. See [LICENSE](LICENSE.md) for more information.

## Contact

Victor Gabriel • [Github](https://github.com/Victor101106/) • victorgabriel101106+github@gmail.com
