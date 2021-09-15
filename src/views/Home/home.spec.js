import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import Home from '.'
import { routes } from '../../router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

describe('<Home />', () => {
  it('should render home correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should class contain bg-brand-gray', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('div').classes()).toContain('bg-brand-gray')
  })

  it('should be tag "p" render correct text', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(Home, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('p').text()).toBe('feedbacker © 2021')
  })
})
