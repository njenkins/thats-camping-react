import expect from 'expect'
import * as actions from '../../actions/ParksActions'
import * as types from '../../constants/ActionTypes'

describe('parks actions', () => {
  it('addParks', () => {
    const park = {
      id: 1,
      shortName: "Blue Mountains NP",
      longName: "Blue Mountains National Park"
    }
    const expectedAction = {
      type: types.ADD_PARKS,
      parks: [park]
    }
    expect(actions.addParks([park])).toEqual(expectedAction)
  })
})
