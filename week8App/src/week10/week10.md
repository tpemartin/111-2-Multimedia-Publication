# data.json

Users data that we will get from doing some https visit of our app backend database entry point.

  * <https://script.google.com/macros/s/AKfycbxbI5-XmdmEbm9H2O5Qz40mt0_omqy4sHJhUzsch3r5IPzENGSXE2eW__GKddNS-kF7/exec>

The database is created by a google form database aka its associated spreadsheet:

   * <https://docs.google.com/forms/d/e/1FAIpQLSf2uefS9Q6o16R35FbHbvjZbBlkMysjLdQw6nMzYJ2mkF4sdA/viewform>

# Users

```
import users from "./data.json"
```

  * Use `console.log()` to show `users` values in  console info. Then
  * Right click on the console info and choose **store object as global variable**. (`temp1` will be created.)

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