
# Initiate a MUI-react npm project

  * learn how to create a Vite-React project


## React npm project

  * [Installation](https://react.dev/learn/installation)

  * [Add to existing project](https://react.dev/learn/add-react-to-an-existing-project#using-react-for-a-part-of-your-existing-page)

### Using vite 

  * [Scaffolding your first Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

  1. Open project in your vscode. 
  2. In vscode terminal, type:  
```
npm create vite@latest week8App -- --template react
```

It will create a `week8App/` folder under your project folder, which by itself is also a project. The project is

  * A React-Vite project , with
  * a vite development environment.

After creation, it also said: Now run

```
  cd week8App
  npm install
  npm run dev
```

  * line 1: change terminal directory to `week8App/`.

  * line 2: install the project dependencies

  * line 3: run the developing result.

You should see

![react-vite result](images/vite-react.png)

# Material Design UI (MUI)

## [MUI installation](https://mui.com/material-ui/getting-started/installation/)

```
npm install @mui/material @emotion/react @emotion/styled
```

## Buttons component

### Usage of MUI

  * [Basic buttons](https://mui.com/material-ui/react-button/)

The usage is divided into two parts:

  * import the component.
  * write its jsx element code.

For example, suppose we want to use `<BottomNavigation>`, `<BottomNavigationAction>` elements as
```
<BottomNavigation showLabels>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>

```


## Navbar component

Suppose we want to create a `<Navbar>` jsx component that looks like:

  * [Bottom Navigation](https://mui.com/material-ui/react-bottom-navigation/#bottom-navigation)

  * Under somewhere in your `src/` folder create a `Navbar/` folder.
  * Inside `Navbar/` folder create a `index.jsx` file.

### Import errors

```
[plugin:vite:import-analysis] Failed to resolve import "@mui/icons-material/Restore" from "src/components/Navbar/index.jsx". Does the file exist?
```


### Export default

# Design components

In the past, we design component (as a jsx function) inside `App.jsx`. However, components should be saved in separate `.jsx` files and using folders to carefully categorize them. 

Below we refer to each component category's folder name.

## Layout

### File structures:

  * img/
  * index.jsx
  * index.css

### Figma

  * <https://www.figma.com/file/lMbFHBKni09R2YdpZMNR2T/week8?t=sa7L2ShHXh0pyc7y-6>

### CSS adjustment

Paste Figma CSS to `Layout/index.css`. However, move `.App`  css to App.css

Thare some modifications:

  * App.css: #root, .App

  * index.css: .navbar .main 

### file path

In web file system, `.` means:

  * starting from the folder of the file who uses `.` to look for `index.jsx`, if it is there that is consider the root folder. If not, go one folder up to look for `index.jsx`, if not continue to look for at one folder up until you see one `index.jsx`. The folder of the first `index.jsx` you see is the root folder for that file who uses `.`


### export function

If your components are to be used in other `.jsx` file, you need to add `export` to the front of `function`. 

If only one component is for cross-jsx use, you can put `export default` instead.

### import css and image

```
import './index.css'
import play from './img/play.svg'
import next from './img/next.svg'
import previous from  "./img/previous.svg"
```

### no-jsx js expression

jsx refers to those `<Component>`. If you need to use non-jsx/js expression **WITHIN** the jsx syntax, like a name call to a js object. You need to surround it by `{...}`.