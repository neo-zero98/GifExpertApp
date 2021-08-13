import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../Components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {
    const img = {
        url: '',
        title: ''
    }
    const wrapper = shallow(<GifGridItem img={img} />); 
    test('debe mostrar el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    }); 

    test('Debe de tener un titulo con el parrafo', () => {
       const p = wrapper.find('p');
       expect(p.text().trim()).toBe(img.title);
    });

    test('Debe tener la imagen igual a la url y alt de los promps', () => {
        const imagen = wrapper.find('img');
        expect(imagen.prop('src')).toBe(img.url);
        // expect(imagen.prop('alt')).toBe(img.title);
    });

    test('debe de tener la clase card', () => {
       const div = wrapper.find('div'); 
       expect(div.prop('className')).toBe('card');
        // console.log(div.prop('className);
    });
    
    
    
});
