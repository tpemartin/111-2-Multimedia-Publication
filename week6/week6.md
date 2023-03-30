---
title: "week 6"
output: html_document
date: "2023-03-30"
---


# Codesandbox

## Link to Github

-   store your codesandbox project in Github instead of in Codesandbox

### How to

1.  Open any of your codesandbox project.

2.  Change Github permission.

    ![](https://tpemartin.github.io/111-2-multimedia-publication/week6/images/change-permission.png)

3.  Follow the three steps in the below graph.

![](https://tpemartin.github.io/111-2-multimedia-publication/week6/images/link-github.png)

This will popup a new codesandbox github editor for your project which is not saved under your repo in Github with repo name specified in "2".

## Open a Github-linked project

To open a github-linked codesandbox project, you

1.  Copy your github repo link, say <https://github.com/tpemartin/week6-react>

2.  Do the following 4 steps:

![Open a Github project](https://tpemartin.github.io/111-2-multimedia-publication/week6/images/open-github-project.png)

# VScode and Node.js

-   Node.js: a runtime (an environment for development or execution) built on Javascript language for modern web world

    -   Chrome: V8.js

-   VScode (Visual Studio Code): an IDE for general usage. You can use it for any computer language if your set up properly.

## Project

In RStudio, a folder is considered a project if it consists of an `.Rproj` file which defines project structure. As in RStudio, VScode considers a folder as a project if it consists of an `package.json` file.

> Actually VScode calls it a **package** instead of a project. In R, package is a special type of project. However, in a general interpretation project and package are the same thing.

## Codesandbox

The platform emulates VScode in the cloud. Every template is to create a project. Therefore, the root normally consists of a `package.json` file.

-   [package.json example](https://codesandbox.io/s/week6-msuizn?file=/package.json)

## package.json

-   `"main"`: define the main program file. (The program to be executed for the app to start.)

    -   Also define the **scope** of our source programs

-   `"dependencies"`: packages needed for the app to work.

-   `"devDependencies"`: packages the developer of the current project also used, only for the convenience of development, but have no impact on how package functions.

In RStudio we can use `install.packages`, `remotes::install_github` , etc. to download a package and install it. In VScode, **download** and **installation** are two separate steps.

## Install a package

In VScode,

1.  After you download a package, you need to use **Open Folder ...** to open the folder as a **package** (aka as a **project**).

2.  Run in **Terminal**\
    `npm i`\
    where `npm` stands for Node.js project manager, and `i` means installation. This will install all packages listed in `"dependencies"` and `"devDependencies"`.

> That is another reason why you need to install Node.js.

## Example: week 5 project

-   [week 5 project](https://codesandbox.io/s/week5-s563u2)

# React App

## Codesandbox template

![React template](https://tpemartin.github.io/111-2-multimedia-publication/week6/images/react-template.png){width="600"}

## Entry program

First look at `package.json` to locate the entry program (aka **main** program)

-   `"main": "src/index.js"`

    -   the scope of the entry program is `src/` folder. Any path starting with `./` means start from `src/` folder.

## Element and Component

Now look at `index.js`. You will see the examples of React elements, like `<App/>` and `<StrictMode>.`

-   Element is a function call.

    -   `<App />` or `<StrictMode>…</StrictMode>` are function call, calling functions named `App` and `StrictMode`

Component is a function with its name starting with a "**Capital letter"**, such as one of the follow two function definitions in javascript:

-   `function App(){….}` (this way. you don't worry sequence of program execution too much)

-   `App = function(…){…}` (this way. you need to be aware of your programming sequence)

> `function Myfun(…){…}` in React is a component and will be called as `<Myfun/>`. But `function yourFun(…){…}` is a regular function and will be called `yourFun().`

You can allocate `App` component inside `App.js` file.

## index.js

At beginning of the file, there are a lot of `import…`, it is to import assets for `index.js` to use including those components defined elsewhere such as `App` component:

-   `import App from "./App";` import `App` component function from the location `./App.js` , and `.` means root which is where entry program sits.

## App.js

A React component function:

-   Has the first letter of its name in capital

-   Return a jsx tag (very similar to HTML tag, but slightly different):

```         
function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

is the same as

```         
App = function() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
```

but has different scoping results. The second way is the same as we do in R:

```{r}
App = function(){
  
  return(
    
  )
}
```

## jsx

An extension to js language. It lets you use html tag as part of your js program.

```         
 <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
```

-   Look like html, but not completely the same.
