import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(HelloWorld)
  })

  it('Should mount', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('Should increment to 1', () => {
    wrapper.find('button').trigger('click')

    expect(wrapper.vm.count).toBe(1)
  })
})
