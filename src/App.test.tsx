import React from 'react'
import App from './App'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Home from './pages/Home'

configure({ adapter: new Adapter() })

test('render App component with no content', () => {
  const component = shallow(<App />)
  expect(component.text()).toEqual('')
})

test('render Home Component inside App', () => {
  const component = shallow(<App />)
  expect(component.containsMatchingElement(<Home />)).toEqual(true)
})
