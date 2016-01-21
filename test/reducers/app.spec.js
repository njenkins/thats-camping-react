import expect from 'expect'
import reducer from '../../reducers/app'
import * as types from '../../constants/ActionTypes'

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({campsites: [], parks: [], position: null})
  })

  it('should handle UPDATE_POSITION', () => {
    expect(
      reducer({campsites: [], parks: [], position: null}, {
        type: types.UPDATE_POSITION,
        position: {lat: 3.0, lng: 4.0}
      })
    ).toEqual({campsites: [], parks: [], position: {lat: 3.0, lng: 4.0}})
  })
})
