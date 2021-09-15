import useStore from '../hooks/useStore'
import {
  setCurrentUser,
  resetUserStore,
  setApiKey,
  cleanCurrentUser
} from './user'

describe('UserStore', () => {
  afterEach(() => {
    resetUserStore()
  })

  it('shoud be set currentUser on store', () => {
    const store = useStore('User')
    setCurrentUser({ name: 'Paulinho' })

    expect(store.currentUser.name).toBe('Paulinho')
  })

  it('shoud be set ApiKey on currentUser', () => {
    const store = useStore('User')
    setApiKey('123.123.123')

    expect(store.currentUser.apiKey).toBe('123.123.123')
  })

  it('shoud be clean currentUser on store', () => {
    const store = useStore('User')
    setCurrentUser({ name: 'Paulinho' })

    expect(store.currentUser.name).toBe('Paulinho')

    cleanCurrentUser()
    expect(store.currentUser.name).toBeUndefined()
  })
})
