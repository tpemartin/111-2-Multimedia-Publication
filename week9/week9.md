# Component properties

Component functions can take input expressed as 

```
function Component({arg1, arg2, children, key}){

}
```

  * argument names can be arbitrary, except some like `children` and `key`.

## `children` property

If there is `children` property, the component function can be used as:
```
<Component>
...
</Component>
```
where `...` can be other jsx elements.

## most arguments

Most arguments are treated as element attributes. To create an element,
```
<Component arg1 = ... arg2 = ...>
</Component>
```
where `...` is the argument value to be assigned. If `...` is an JS expression, it must be surrounded by curly brackets `{}`, i.e. 
```
<Component arg1= {some js expression} arg2={some js expression}>
</Component>
```

## Custom Navbar

  * Build a footer navigation bar that allows developers to put in arbitrary icons.
  * learn how to import icons from Material UI (MUI)

Component functions:
```
export function NavbarCustom({children}) {
    return (
        <div className="navbar">
            {children}
        </div>

    )
}
export function NavbarItem({children}) {
    return (
        <div className="navbar-item">
            {children}
        </div>

    )
}
```

Usage

```
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';

<NavbarCustom>
    <NavbarItem>
        <PreviousIcon/>
    </NavbarItem>
    <NavbarItem>
        <PlayIcon/>
    </NavbarItem>
    <NavbarItem>
        <NextIcon/>
    </NavbarItem>
</NavbarCustom>
```

is the same as

```
<div className="navbar">
  <div className="navbar-item">
    <PreviousIcon/>
  </div>
  <div className="navbar-item">
    <PlayIcon/>
  </div>
  <div className="navbar-item">
     <NextIcon/>
  </div>
</div>
```
  

  * Icons are imported from MUI. Developers can put in their own design as well.

### MUI icons

  * Install MUI
  
  ```
  npm install @mui/material @emotion/react @emotion/styled
  ```
  


  * <https://mui.com/material-ui/material-icons/>


## Card

### Stamp

  * <https://codepen.io/orhanveli/pen/nEVqvv>

  * [mui-image](https://mui-image.surge.sh/)
  
  * [SVG filter](https://dev.to/photostockedit1/change-color-of-svgs-images-with-css-filter-53h5)

```
export default function Stamp({ imgSrc }) {
  return (
    <div className="stamp">
      <Image
        duration={0}
        src={imgSrc}
      />
    </div>

  )
}
```

Usage 

```
<Stamp imgSrc="https://cms-carrier.ntpu.edu.tw/uploads/8d03554e2e3a4f8dacbcad536cf70bfc.jpg">
```

### Card

```
export default function Card({ user }) {
  const { name, grade, imgSrc, wish } = user
  ...
}
```

Usage

```
const user = {
        name: "王小明",
        grade: "大一",
        imgSrc: "https://cms-carrier.ntpu.edu.tw/uploads/8d03554e2e3a4f8dacbcad536cf70bfc.jpg",
        wish: "New beginnings, new chapters; new life and new endeavors. My friend, I am really proud of you! It feels amazing to share this happiness and excitement with you. Congratulations on graduating!"
    }

<Card user = {user}/>
```

#### destructure an object

  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment>