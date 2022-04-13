import React from 'react'
import App from './App';
import { shallow, mount } from 'enzyme';


describe('App', () => {
  it('shallow', () => {
    const cmp = shallow(<App />)

    expect(cmp).toMatchSnapshot()
  })

  it('mount', () => {
    const cmp = mount(<App />)

    const link = cmp.find('a')
    expect(link.prop('href')).toBe('https://reactjs.org')
    expect(cmp).toMatchSnapshot()
  })
})

// test('renders learn react link', () => {
//   const cmp = shallow(<App />)

//   const link = cmp.find('a')
//   // link.prop()
//   // link.props()

//   expect(cmp).toMatchSnapshot()
//   // expect(link.length).toBe(1)
//   // expect(link.prop('href')).toBe('https://reactjs.org')
//   // expect(link.text()).toBe('Learn React')
//   // expect(link.props()).toEqual({})
// });

