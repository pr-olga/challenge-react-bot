import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import Salutation from '../Salutation'

configure({ adapter: new Adapter() })

test('render Salutation component ', () => {
  const component = shallow(<Salutation />)
  expect(component.text()).toEqual(
    'Hello blala,Imagine, a customer of your company would have a conversation with you and ask you some questions. Which questions/reactions are most likely to occur and what answers would you prefer? Please choose the most appropriate intens by just clicking on them. Thank you!',
  )
})
