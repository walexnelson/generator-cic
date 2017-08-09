# generator-ngpack

An opinionated Angular 1.5+ template with sub generators.

## Technologies

* Webpack
* ES6 via Babel
* Angular 1.5x

## Features

* Unit Testing: karma, mocha, chai
* Code linting: eslint
* Minification
* Webpack Dev Server
* Live Reload (if you have your own server)

## Usage

```
npm install yo generator-ngpack -g
```

### App Generator

Initiate the generator

```
yo ngpack [options]
```

**Options**
* --skip-install

### Sub Generators

All of these sub generators will lay down a new module in the current working directory by default, unless a relative path is provided.

#### Component

```
yo ngpack:component name [path]
```

**options**

* --simple: don't add separate css and html files

#### Directive

```
yo ngpack:directive name [path] [options]
```

**options**

* --simple: don't add separate css and html files

#### Factory

```
yo ngpack:factory name [path]
```

#### Filter

```
yo ngpack:filter name [path]
```

### Route

Uses component-based routing

```
yo ngpack:route name [path]
```
