export const getGifs = async(category)=> {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=PAomstU2d7F5Rds7O70utgaoM5e4pTGo&q=${encodeURI(category)}&limit=3`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    return gifs;
}