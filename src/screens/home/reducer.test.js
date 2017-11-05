import home, { initialState } from './reducer'
import * as actions from './screens/HomeMainScreen/actions'

it('fetch popular photos', () => {
  expect(home(initialState, actions.fetchPhotosGrid())).toMatchSnapshot()
})

it('fetch user', () => {
  expect(home(initialState, actions.fetchUser())).toMatchSnapshot()
})
