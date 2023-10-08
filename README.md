# rn-inspector-modules

An experimental library to Inspect and analyze Node modules in your React Native project.
not yet tested in Windows and Linux

# INSTALLATION

### NPM

```
npm i rn-inspector-modules
```

OR

### YARN

```

yarn add rn-inspector-modules
```

# CONFIGURATION

### MANUAL

```
1. Move your terminal into node_modules/rn_inspector_modules
2. run default script below
```

### INJECTION

1. add your custom script into your project package.json

`note : 
custom script cannot be named with the same name or method that availabe in the yarn or npm
`

```
"your_custom_script": "yarn --cwd node_modules/rn-inspector-modules run"

such as below

"scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "analyze": "yarn --cwd node_modules/rn-inspector-modules run"
  },
```

2. After that you can combine your custom script with default script below

```
Example :

yarn analyze execs-all

yarn analyze execs-dependencies


...

```

# USAGE

in your terminal root project

NPM

```
npm run { default command }
```

YARN

```
yarn { default command }

```

## DEFAULT COMMANDS

In this project, you can use the following scripts:

### `execs-all`

Run the script to get all node modules without it size. This script can be executed using the following command:

```bash
yarn  execs-all
```

### `execs-dependencies`

Run the script to do get module size from your dependencies. You can execute this script using the following command:

```bash
yarn execs-dependencies
```

### `execs-dev--dependencies`

Run the script to do get module size from your development dependencies. You can execute this script using the following command:

```bash
yarn execs-dev--dependencies
```

### `execs-table--all`

Execute the script to generate a table for all modules inside of node_modules with it size. Run this script using the following command:

```bash
yarn  execs-table--all
```

### `execs-table--deps`

Generate a table for displaying modules that installed as dependencies with it size by running this script. You can execute it with the following command:

```bash
yarn execs-table--deps
```

### `execs-table--devDependencies`

Generate a table for displaying modules that installed as dependencies with it size by running this script. You can execute it with the following command:

```bash
yarn execs-table--devDependencies
```

### execs-devs--cli-deps

Run the script to display dependencies in another terminal. Execute this script with the following command:

```bash
yarn  execs-devs--cli-deps
```

### execs-devs--cli-devDependencies

Display devDependencies in another terminal by running this script. You can execute it using this command:

```bash
npm execs-devs--cli-devDependencies
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
