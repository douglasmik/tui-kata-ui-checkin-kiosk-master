// const bookingsJSON = require('../../bookings.json');

export const getBookings = async (bookingRef) => {
  const formattedBookingRef = bookingRef.replace(/\s/g, "").match(/\d+/g)
  const response = await fetch('/bookings.json')
  const data = await response.json();
  return data.filter(booking => booking._id === Number(formattedBookingRef))
}
