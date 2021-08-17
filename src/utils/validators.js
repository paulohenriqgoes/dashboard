const REQUIRED = '*Este campo é obrigatório'

export function validateEmptyAndLength3 (value) {
  if (!value) {
    return REQUIRED
  }

  if (value.length < 3) {
    return '*Este campo precisa de no mínimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return REQUIRED
  }

  const isValid = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(value)

  if (!isValid) {
    return '*Insira um email válido'
  }

  return true
}
