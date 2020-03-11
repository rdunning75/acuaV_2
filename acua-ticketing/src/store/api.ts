import axios from 'axios'
import { Ticket, UserSubmit, User} from './models'

export const api = axios.create({
  baseURL: 'http://localhost:3000/' // points to loopback server wherever hosted
})

/**
 * Ticket API calls
 */

export async function fetchTickets(user: any): Promise<Ticket[]> {
  const order: string = 'filter[order]=tic_id ASC'

  // const where: string = `filter[where][and][0][location]=${user.location}`
  // + `&filter[where][and][2][isComplete]=false`
  // const limit: string = 'filter[limit]=12'
  const where: string = `filter[where][time_serviced]=not serviced`
  //  + '&filter[where][and][1][user_id]!=1'
  // + `&filter[where][and][2][isComplete]=false`
  // const response = await api.get(`/tickethistories?${order}&${where}&${limit}`)
  const response = await api.get(`/tickethistories?${where}&${order}`)
  // const response = await api.get(`/tickethistories`)

  return response.data as Ticket[]
}

export async function fetchTotal(user: any): Promise<number> {

  const where: string = `filter[where]`
  const response = await api.get(`/tickethistories/count?${where}`)
 /* export async function fetchTotal(user: any): Promise<number> {
  // const where: string = `where[and][0][location]=${user.location}`
  // + `&where[and][2][isComplete]=false`
  const where: string = `filter[where][time_serviced]=not serviced`
  const response = await api.get(`/tickets/count?${where}`)
  // const response = await api.get(`/tickethistories/count`)
  return response.data.count as number*/
} 

export async function updateTicket(id: number, update: any): Promise<void> {
  await api.patch(`tickethistories/${id}`, update)
  // call get
}

export async function strikeTicket(id: number, ticket: Ticket): Promise<void> {
  await api.put(`tickethistories/${id}`, ticket)
}


/**
 * User API calls
 */

export async function loginUser(userSubmit: UserSubmit): Promise<User> {
  const response = await api.patch('/users/login', userSubmit)

  return response.data as User
}

export async function logoutUser(user: any): Promise<void> {
  await api.patch('/users/logout', user)
}
