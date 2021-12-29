import bcrypt from 'bcrypt'
import { BcrypterAdapter } from './bcrypt-adapter'

describe('Bcrypt Adapter', () => {
  test('Should call Bcrypt with correct values', async () => {
    const salt = 12
    const sut = new BcrypterAdapter(salt)
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenLastCalledWith('any_value', salt) 
  })
})
