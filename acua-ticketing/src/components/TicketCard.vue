<template>
  <div>
    <!-- Current Ticket -->

    <v-card min-height="317" hover v-if="check === true">
      <v-card-title class="headline">
        Ticket #{{ticket.tic_id}}
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Name:</v-list-tile-content>
              <v-list-tile-content class="align-end font-weight-bold">{{ ticket.first_name }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Phone Number:</v-list-tile-content>
              <v-list-tile-content class="align-end font-weight-bold">{{ ticket.phone }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Question:</v-list-tile-content>
              <v-list-tile-action>
                <v-btn flat icon color="#117FA7" @click="active = true">
                  <v-icon>
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>Strikes:</v-list-tile-content>
              <v-list-tile-content class="align-end font-weight-bold">{{ ticket.strikes }}</v-list-tile-content>
            </v-list-tile>
          </v-list>
      </v-card-text>
      <v-divider/>
      <v-card-actions>
        <v-btn flat color="error" @click="strikeUser(ticket.tic_id, ticket)">
          <span v-if="ticket.strikes < 2">Strike</span>
          <span v-else>Strike Out</span>
        </v-btn>
        <v-spacer/>
        <v-btn flat color="primary" @click="resolve(ticket.tic_id, ticket)">resolve</v-btn>
      </v-card-actions>
    </v-card>
    <!-- user's query -->
    <v-dialog v-model="active" width="500">
      <v-card>
        <v-card-title class="headline">
          Ticket #{{ queue.length > 0 ? ticket.number : -1 }} Question
        </v-card-title>
        <v-card-text>
          {{ queue.length > 0 ? ticket.query : '' }}
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="primary" @click="active = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Ticket } from '@/store/models'
import tickets from '@/store/modules/tickets'
import users from '@/store/modules/users'

@Component
export default class TicketCard extends Vue {
  public active: boolean = false
  private tickets = tickets // ticket state manager
  private users = users
  private strikes = 0


  public get check(): boolean {
    return this.tickets.check
  }

  public get queue(): Ticket[] {
    return this.tickets.tickets
  }

  public get ticket(): Ticket {
    return this.tickets.firstTicket
  }

  public strikeUser(id: number, ticket: Ticket): void {
    this.tickets.setLoader()

    // if(false) is temporary so it doesnt bug out when 'looking' for the strikes in the db. Since the strikes field
    // doesnt exist in the new schema, i made it so it always goes with the else statment only
    // if (resulting in Strike = Resolve) for now
    // HOWEVER, keep in mind that this method is only called when the user Strikes and is only Resolved when the
    // strikes passes 3.
    // But From the previous comments, this wont happen since we are not even keeping track of strikes at this point.
    // if (this.strikes < 2) {
    if (false) {
      // ticket.strikes++
      // ticket.index_ += 5
      this.tickets.strikeTicket({ id, ticket }).then((res) => {
        this.tickets.loadTickets()
        tickets.ticketCount(this.users.user)
        this.tickets.setLoader()
      })
    } else {
      // ticket.isComplete = true
      // ticket.time_serviced = "hi"
      // Move down the queue LOC

      this.tickets.resolve({ id, ticket }).then((res) => {
        this.tickets.loadTickets()
        tickets.ticketCount(this.users.user)
        this.tickets.setLoader()
      })
    }
  }

  public resolve(id: number, ticket: Ticket): void {

    ticket.time_serviced = this.serviced_timestamp()
    this.tickets.resolve({ id, ticket }).then((res) => {
      tickets.setFalse()
      this.tickets.loadTickets()
      tickets.ticketCount(this.users.user)
      // this.tickets.setLoader()
    })
  }

  private serviced_timestamp() {
    const currentDatetime = new Date()
    const date = `${currentDatetime.getMonth()}/${currentDatetime.getDate()}/${currentDatetime.getFullYear()} `
    const time = `${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`
    return date + time
  }
}
</script>

