import React from 'react'
import { shallow } from 'enzyme'
import { Counter, Label, Btn } from './index'


jest.mock('react', () => {
  const r = jest.requireActual('react')

  return ({
    ...r,
    useState: (defaultValue) => ([defaultValue, jest.fn()]),
    useCallback: (fn) => fn,
  })
})

describe('Counter', () => {
  let cmp
  let props

  beforeEach(() => {
    props = {
      onCounterChange: jest.fn()
    }

    cmp = shallow(<Counter {...props} />)
  })

  it('should render Label with default value', () => {
    const label = cmp.find(Label)

    expect(label.prop('text')).toBe(0)
  })

  it('should trigger onCounterChange when change value', () => {
    const btn = cmp.find(Btn)

    btn.prop('onClick')()

    expect(props.onCounterChange).toHaveBeenCalledTimes(1)
  })
})