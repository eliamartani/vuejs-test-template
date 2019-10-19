import { shallowMount } from '@vue/test-utils'
import Cats from '@/components/Cats'
import flushPromises from 'flush-promises'

describe('Cats.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Cats, {
      mocks: {
        $http: {
          get: async () => new Promise((resolve) => {
            resolve({
              data: [
                {
                  url: 'http://google.com',
                  id: 1
                },
                {
                  url: 'http://google.com',
                  id: 2
                }
              ]
            })
          })
        }
      }
    })
  })

  it('Should mount', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('Should await', async () => {
    await flushPromises()

    expect(wrapper.vm.list.length).toBe(2)
    expect(wrapper.vm.list[0].id).toBe(1)
    expect(wrapper.vm.list[0].url).toContain('google')
  })

  it('Should title be visible', () => {
    expect(wrapper.find('h1').text()).toEqual('Testing component')
  })

  it('Should contain image with alt 1', () => {
    expect(wrapper.find('ul > li > img').attributes().alt).toEqual('1')
  })
})