export const getGifs= async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Yn1XPNF6OsNXZvWTQJj3CTMIJbOH2mZw&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data}= await resp.json()

    const gifs = data.map( img =>({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
    }))

    return gifs

}

