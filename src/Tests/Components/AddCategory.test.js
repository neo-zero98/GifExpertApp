import { shallow } from "enzyme"
import React from "react";
import { AddCategory } from "../../Components/AddCategory";
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( ()=> {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('Debe de cambiar la caja de texto', () => {
       const input = wrapper.find('input'); 
       const value = "hola";
       const p = wrapper.find('p');
       input.simulate('change', {target: {value}});
       expect(wrapper.find('p').text().trim()).toBe( value );
    });

    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} }); 

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar al setCategories y limpiar la caja de texto', () => {
        const value = "Naruto";
        wrapper.find('input').simulate('change',{ target: {value} });
        wrapper.find('form').simulate('submit', { preventDefault(){} }); 
        console.log(wrapper.find('input').prop('value'));
        expect(wrapper.find('input').prop('value')).toBe('');
    })
    
    
    
});
