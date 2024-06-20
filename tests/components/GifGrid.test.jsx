import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock( "../../src/hooks/useFetchGifs")

describe('Pruebas en GifGrid', () => {

    const category= 'Goku'
    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })
    
    test('Debe de mostrar items cuando se carga las imagenes useFetchGifs', () => {
        
        const gifs=[{
            id:'ABC',
            title:'Goku',
            url:'https://localhost/goku.jpg'
        },
        {
            id:'CBA',
            title:'Vegetta',
            url:'https://localhost/vegetta.jpg'
        }]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)

    })
    
})
