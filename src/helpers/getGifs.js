export const getGifs = async (category, setImages) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=iuUucsTudyYVv9sNZVFP7LunnNbDtEud`;
    const peticion = await fetch(url);
    const { data } = await peticion.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return (gifs);
}