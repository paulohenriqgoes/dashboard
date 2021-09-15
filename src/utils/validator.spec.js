import {
  validateEmptyAndEmail,
  validateEmptyAndLength3
} from './validators'

describe('Validator utils', () => {
  describe('validateEmptyAndLength3', () => {
    it('Should error be value is required', () => {
      expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
    })

    it('Should error be value is less then 3', () => {
      expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
    })

    it('Should be corret value', () => {
      expect(validateEmptyAndLength3('123')).toBe(true)
    })
  })

  describe('validateEmptyAndEmail', () => {
    it('Should error be value is required', () => {
      expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
    })

    it('Should error be invalid email', () => {
      expect(validateEmptyAndEmail('email@')).toBe('*Insira um email válido')
    })

    it('Should be valid email', () => {
      expect(validateEmptyAndEmail('email@email.email')).toBe(true)
    })
  })
})
