import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import HeaderLogged from '.'
import { routes } from '../../router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('<HeaderLogged />', () => {
  it('should render home correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should logoutLabel contain ... when user is not logged', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.get('#logout-button')

    expect(buttonLogout.text()).toBe('...')
  })

  it('should logoutLabel contain user name when user logged', async () => {
    router.push('/')
    await router.isReady()
    mockStore.currentUser.name = 'Foo'
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    })

    const buttonLogout = wrapper.get('#logout-button')

    expect(buttonLogout.text()).toBe('Foo (sair)')
  })
})
