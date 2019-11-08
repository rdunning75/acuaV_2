<template>
  <v-navigation-drawer
    permanent
    fixed
    right
    clipped
    app
  >
    <v-list dense>
      <v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title class="title text-xs-center">Window {{window}} Queue</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense v-for="(ticket, i) in queue" :key="i">
      <v-list-tile v-if="i === 0">
        <v-list-tile-action>
          <v-icon>local_play</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Ticket #{{ticket.number}} (Current)</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile v-else>
        <v-list-tile-action>
          <v-icon>local_play</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Ticket #{{ticket.number}}</v-list-tile-title>
          <v-list-tile-sub-title>Name: {{ticket.name}}</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-list dense v-if="queue.length === 0">
      <v-list-tile-content>
        <v-list-tile-title class="text-xs-center">No Tickets</v-list-tile-title>
      </v-list-tile-content>
    </v-list>
    <v-list dense v-if="queue.length > 0 && remaining > 0">
      <v-subheader>+ {{remaining}} more</v-subheader>
    </v-list>
    <v-list-tile-action>
      <v-btn flat color="primary" @click="resolve(ticket.id, ticket)">Next</v-btn>
    </v-list-tile-action>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Ticket } from '@/store/models'
import tickets from '@/store/modules/tickets'
import users from '@/store/modules/users'

@Component
export default class TicketQueue extends Vue {
  private tickets = tickets // ticket state manager
  private users = users

  public get queue(): Ticket[] {
    return this.tickets.tickets
  }

  public get ticket(): Ticket {
    return this.tickets.firstTicket
  }

  public get remaining(): number {
    return this.tickets.count - this.tickets.limit
  }

  public get window(): number | null {
    return this.users.window === null ? null : this.users.window + 1
  }

    public resolve(id: number, ticket: Ticket): void {
    this.tickets.setLoader()

    ticket.isComplete = true
    this.tickets.resolve({ id, ticket }).then((res) => {
      this.tickets.loadTickets()
      tickets.ticketCount(this.users.user)
      this.tickets.setLoader()
    })
  }
}
</script>

