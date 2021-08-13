import { shallow } from "enzyme";
import GifGrid from "../../Components/GifGrid";
import { useFetchGifs } from "../../Hooks/useFetchGifs";
jest.mock('../../Hooks/useFetchGifs');

describe('Pruebas de <GifGrid />', () => {
    const category = "Goku";

   test('toMatchSnapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot(); 
   });

   test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://api.yolo.jpg',
            title: 'Yolo'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot(); 
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
   });
   
    
});
