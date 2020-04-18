import axios from 'axios'
// import {Socket} from "socket.io";
import {Ticket, UserSubmit, User} from './models'
import VueSocketIOExt from "modules/vue-socket.io-extended";
import { Socket } from 'vue-socket.io-extended';

export const api = axios.create(
    {
        baseURL: 'http://localhost:3000/',
        withCredentials: false,
    });

// points to loopback server wherever hosted


/**
 * Ticket API calls
 */

export async function fetchTickets(user: any): Promise<Ticket[]> {
    const order: string = 'filter[order]=tic_id ASC'
    const where: string = `filter[where][time_serviced]=not serviced`
    const response = await api.get(`/tickethistories?${where}&${order}`)
    return response.data as Ticket[]
}

export async function fetchTotal(user: any): Promise<number> {
    const where: string = `filter[where]`
    const response = await api.get(`/tickethistories/count?${where}`)
    return response.data.count as number
}

export async function updateTicket(id: number, update: any): Promise<void> {
    await api.patch(`tickethistories/${id}`, update)
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
