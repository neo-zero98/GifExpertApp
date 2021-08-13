import { shallow } from "enzyme";
import { GifExpertApp } from "../../Components/GifExpertApp";
import '@testing-library/jest-dom';

describe('Pruebas de <GifExpertApp />', () => {
    
    test('toMatchSnapshot', () => {
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['Naruto', 'One Punch Man'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });    
});
