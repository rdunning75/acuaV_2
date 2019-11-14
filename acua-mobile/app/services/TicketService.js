const httpModule = require('tns-core-modules/http')

export default {
  addTicket (ticket) {
    return httpModule.request({
      // url: `http://[::1]:3000/tickets`,
      // url:`https://acuateam.herokuapp.com/tickets`,
      url: 'https://acuaserver.herokuapp.com/tickets',
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      content: JSON.stringify(ticket)
    })
  },

  checkTicket (ticketId) {
    return httpModule.getJSON(
        `http://[::1]:3000/tickets/${ticketId}`
        // `https://acuateam.herokuapp.com/tickets/${ticketId}`

  )}
}
