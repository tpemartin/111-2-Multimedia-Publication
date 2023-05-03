# Layout

  * `src/components/Layout3`

```
export function Gallery({children}){
    return(
        <Grid2 container spacing={2} justifyContent="center">
            {children}
        </Grid2>
    )
}
export function GalleryItem({children}){
    return(
        <Grid2 item xs={12} sm={'auto'} md={6} lg={4} xl={3}>
            {children}
        </Grid2>
    )
}
```

  * `position: fixed;` for .navbar