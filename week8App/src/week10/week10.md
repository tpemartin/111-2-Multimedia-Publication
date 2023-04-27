# data.json

Users data that we will get from doing some https visit of our app backend database entry point.

  * <https://script.google.com/macros/s/AKfycbxbI5-XmdmEbm9H2O5Qz40mt0_omqy4sHJhUzsch3r5IPzENGSXE2eW__GKddNS-kF7/exec>

The database is created by a google form database aka its associated spreadsheet:

   * <https://docs.google.com/forms/d/e/1FAIpQLSf2uefS9Q6o16R35FbHbvjZbBlkMysjLdQw6nMzYJ2mkF4sdA/viewform>

# Users

## dataJson

```
import dataJson from "./data.json"
```

  * Use `console.log()` to show `dataJson` values in  console info. Then
  * Right click on the console info and choose **store object as global variable**. (`temp1` will be created.)
  * Array of arrays.

```
users = temp1
// create an object
pos = Object()
users[0].map(
    (e,i)=>{
        pos[e]=i
    }
)
pos.imgSrc = pos.ThumbnailLink
pos.name = pos.Name
pos.grade = pos.Grade
pos.wish = pos.Wish
```

  * [React rendering list](https://react.dev/learn#rendering-lists)
  
## users

Array of objects

We can generate three cards:
```
<Card user={users[0]} />
<Card user={users[1]} />
<Card user={users[2]} />
```

## Array.map 

  * <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map>

```
var example = ["a", "b", "c"]
example.map(
    function(e, i){
       return "This is "+e
    }
)
```

```{r}

example |>
  purrr::map(
    function(e){
        return(paste0("This is ", e))
    }
  )
```