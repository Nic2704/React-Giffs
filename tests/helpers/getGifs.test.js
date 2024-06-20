import{getGifs} from '../../src/helpers/getGifs'

describe('Pruebas en getGifs', () => {
  test('Debe de retornar un arreglo de Gifs', async() => {
    const gifs=await getGifs('Goku')
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
    })
  })
})
