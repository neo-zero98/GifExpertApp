import { getGifs } from "../../Helpers/getGifs";

describe('Pruebas de getGifs Fetch', () => {
    test('debe de traer 10 elementos ', async() => {
       const gifs = await getGifs('Naruto');
       expect(gifs.length).toBe(3);
    });
    
})
