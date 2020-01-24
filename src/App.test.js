const initialState = {
  activeStage: 0,
  loading: false,
  error: false
}

const bookings = [
  {
    _id: 12345,
    roomNumber: 101,
    name: "Michael",
    lastName: "Douglas",
    otherPassengers: [
      "Katrina Douglas",
      "Micaiah Douglas",
      "Maya Douglas"
    ] 
  }
]


describe('initialState of App', () => {
  it('should be in the default "init" stage', () => {
    expect(initialState.activeStage).toEqual(0)
  })
})

describe('Bookings', () => {
  it('should return no data if booking reference does not match', () => {
    expect(bookings.filter(booking => booking._id === 123)).toEqual([])
  })

  it('should return data if booking reference matches', () => {
    expect(bookings.filter(booking => booking._id === 12345)).toEqual(bookings)
  })
})
