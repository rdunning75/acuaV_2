<template>
  <v-card>
    <v-card-text>
      <v-list-tile-action>
      <v-btn flat color="primary" @click="resolve()">Next</v-btn>
      </v-list-tile-action>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { Ticket } from '@/store/models'
import tickets from '@/store/modules/tickets'
import users from '@/store/modules/users'
import TicketCard from './TicketCard.vue'

@Component
export default class TicketLimit extends Vue {
  // public limit: number = 4
  private tickets = tickets // ticket state manager

  private users = users

    public get window(): number | null {
    return this.users.window === null ? null : this.users.window + 1
  }

  public get ticket(): Ticket {
    return this.tickets.firstTicket
  }

  public resolve(): void {
    tickets.setCheck()
  }
}
</script>

