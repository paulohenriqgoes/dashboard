import mockAxios from 'axios'
import AuthService from './auth'

jest.mock('axios')

describe('AuthServices', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return o token', async () => {
    const token = '123.1231.1231'

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: { token } })
    })

    const response = await AuthService(mockAxios).login({
      email: 'email@email',
      password: '123'
    })

    expect(response.data).toHaveProperty('token')
  })

  it('should return user on register', async () => {
    const user = {
      name: 'Paulo',
      password: '123',
      email: 'paulo@paulo.com'
    }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ data: user })
    })

    const response = await AuthService(mockAxios).register(user)

    expect(response.data).toHaveProperty('name')
    expect(response.data).toHaveProperty('password')
    expect(response.data).toHaveProperty('email')
    expect(response).toMatchSnapshot()
  })

  it('should throw error when not found', async () => {
    const error = { status: 404, statusText: 'Not Found' }

    mockAxios.post.mockImplementationOnce(() => {
      return Promise.resolve({ request: error })
    })

    const response = await AuthService(mockAxios).login({
      email: 'foo@bar',
      password: '123'
    })

    expect(response.errors).toHaveProperty('status')
    expect(response.errors).toHaveProperty('statusText')
  })
})
