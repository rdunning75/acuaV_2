<template>
  <div>
    <TicketQueue/>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TicketQueue from '@/components/TicketQueue.vue'
import tickets from '@/store/modules/tickets'
import users from '@/store/modules/users'

@Component({
  components: {
    TicketQueue,
  }
})
export default class Manager extends Vue {
  public timer: number = 0
  private tickets  = tickets
  private users = users
  private polling: number | undefined = undefined
  private countdown: number | undefined = undefined

  public get loader(): boolean {
    return tickets.ticketLoader;
  }

  public mounted(): void {
    tickets.loadTickets()
    // tickets.ticketCount(this.users.user)
    this.pollData()
  }

  public beforeDestroy(): void {
    clearInterval(this.polling)
    clearInterval(this.countdown)
  }

  private pollData(): void {
    this.polling = setInterval(() => {
      // tickets.ticketCount(this.users.user)

      /* if (tickets.tickets.length < 12) {
        tickets.loadTickets()
      } */
    }, 11000)

}
}
</script>
