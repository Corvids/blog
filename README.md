# [jenniferjoo.com](jenniferjoo.com)

This repo holds my personal blog/portfolio, scaffolded from the [Gatsby](https://www.gatsbyjs.org) website framework.

## 🧶 Installing Dependencies

To start developing, you'll need to have [Node.js](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) installed on your machine.

To install the neccesary dependencies for this project, run:

```shell
yarn install
```

You will also need firebase tools, which you can add using:

```shell
yarn global add firebase-tools
```

## 👩‍💻 Develop

To develop the project, run:

```shell
gatsby develop
```

and navigate to `http://localhost:8000/` in your favorite web browser.

## 🚀 Deploying to Firebase

Assuming you have an existing firebase project, prepare the blog for deployment by running:

```shell
gatsby build
```

And then deploy to firebase by running:

```shell
firebase deploy
```

## 🔍 Querying GraphQL

While running the blog, go to

```shell
http://localhost:8000/___graphql
```

## 🐛 Common issues/bugs

If you're getting the error while running the project on a windows machine:

```markdown
GraphQL Error There was an error while compiling your site's GraphQL queries.

Error: RelayParser: Encountered duplicate defintitions for one or more documents: each document must have a unique name. Duplicated documents:
```

Check the casing of your CLI filepath and target filepath, e.g. if the blog-post filepath is `src\templates\blogTemplate.js` but the CLI filepath is `src\Templates\blogTemplate.js`, the GraphQL query will fail to compile.
