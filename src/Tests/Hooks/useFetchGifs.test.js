import {renderHook} from '@testing-library/react-hooks'
import { useFetchGifs } from '../../Hooks/useFetchGifs';

describe('Pruebas del hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async () => {
       const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('Goku'));
       const {data, loading} = result.current;
       await waitForNextUpdate();

       expect(data).toEqual([]);
       expect(loading).toBe(true);
    }); 

    test('Debe mostrar un arreglo de imgs y el loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('Goku'));
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
    

});
