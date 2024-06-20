import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en GifItem', () => {

    const title= 'Goku'
    const url= 'https://dragonball.com/goku.jpg'

  test('Debe hacer match con el snapchot', () => {
    const{ container}=render(<GifItem title={title} url={url}/>)
    expect( container ).toMatchSnapshot()
  })

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url}/>)
    const {src,alt}= screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(alt)
  })
  test('Debe de mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url}/>)
    expect(screen.getByText(title)).toBeTruthy()
  })
  
  
})
