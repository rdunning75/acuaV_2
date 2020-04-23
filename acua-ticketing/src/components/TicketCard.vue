<template>
  <div>
    <!-- Current Ticket -->
<v-card min-width="630">
  <v-card-text>
      <v-list-tile-action>
      <v-btn flat color="primary" class="headline" @click="next(ticket.user_id , ticket)">Next</v-btn>
      </v-list-tile-action>
    </v-card-text>
    <v-card min-height="317" min-width="630" align-center hover v-if="check === true">
      <v-card-title class="display-1">
        Ticket #{{ticket.tic_id}}
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-list dense>
            <v-list-tile>
              <v-list-tile-content class="headline">Name:</v-list-tile-content>
              <v-list-tile-content class="align-end font-weight-bold headline">{{ ticket.first_name }} {{ticket.last_name}}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content class="headline">Phone Number:</v-list-tile-content>
              <v-list-tile-content class="align-end font-weight-bold headline">{{ ticket.phone }}</v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content class="headline">Question:</v-list-tile-content>
              <v-list-tile-content class="align-end font-weight-bold headline">{{ticket.reason_of_visit}}</v-list-tile-content>
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
    </v-card>
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
        // tickets.ticketCount(this.users.user)
        this.tickets.setLoader()
      })
    } else {
      // ticket.isComplete = true
      // ticket.time_serviced = "hi"
      // Move down the queue LOC

      this.tickets.resolve({ id, ticket }).then((res) => {
        this.tickets.loadTickets()
        // tickets.ticketCount(this.users.user)
        this.tickets.setLoader()
      })
    }
  }

  public resolve(id: number, ticket: Ticket): void {
    ticket.time_serviced = this.serviced_timestamp()
    this.tickets.resolve({ id, ticket }).then((res) => {
      tickets.setFalse()
      this.tickets.loadTickets()
      // tickets.ticketCount(this.users.user)
      // this.tickets.setLoader()

    })
  }

  public next(id: number , ticket: Ticket): void {
    this.tickets.loadTickets()
    if (users.id == null) {
      ticket.user_id = 1
    } else {
      ticket.user_id = users.id
    }
    this.tickets.refresh({id, ticket }).then((res) => {
      tickets.setCheck()
      this.tickets.loadTickets()
      this.tickets.setLoader()
    })
    // this.tickets.loadTickets()
    tickets.setCheck()
  }

  private serviced_timestamp() {
    const currentDatetime = new Date()
    const date = `${currentDatetime.getMonth()}/${currentDatetime.getDate()}/${currentDatetime.getFullYear()} `
    const time = `${currentDatetime.getHours()}:${currentDatetime.getMinutes()}:${currentDatetime.getSeconds()}`
    return date + time
  }
}
</script>

