<template>
  <Page>
    <ActionBar title="Ticket Processing" class="Action_Bar"/>
    <GridLayout columns="*,*,*" rows="*,*,*,*,*,*,*,*,*,*,*" class="cover">

      <Label text="First and last name:" row="0" col="1" class="text"/>
      <TextView v-model="name" row="1" col="1" class="input"/>

      <Label text="Phone number:" row="2" col="1" class="text"/>
      <TextView v-model="phone" row="3" col="1" class="input"/>

      <Label text="Email:" row="4" col="1" class="text"/>
      <TextView v-model="email" row="5" col="1" class="input"/>

      <Label text="What are you here for?" row="6" col="1" class="text"/>
      <TextView v-model="query" row="7" col="1" class="input"/>

      <Button @tap="submitTicket" text="Submit Ticket" class="button" row="9" col="1"/>
    </GridLayout>
  </Page>
</template>

<script>
import  { mapState, mapActions, mapMutations } from 'vuex'
import Home from './Home.vue'

export default {
  data () {
    return {
      phone: '',
      name: '',
      email:'',
      query:'',
      home: Home,
      limit: 0
    }
  },
  methods: {
    ...mapActions(['addTicket']),
    // this.setTicketInfo(object), where object contains phone, name, query, comment properties,
    submitTicket () {
      this.$navigateTo(this.home)
      this.addTicket({
        name: this.name,
        phone: this.phone,
        query: this.query,
        location: this.location
      })
    }
  },
  computed: {
    ...mapState(['userTicket', 'approvedTicket', 'location'])
  },
  watch: {
    approvedTicket(newVal, oldVal) {
      if (this.limit < 1) {
        if (newVal != null) {
          alert({
            title: "Ticket Submitted",
            message: "Hello " + newVal.name + ", you're ticket # is " + newVal.number
            + ". You will be served at window " + (newVal.window + 1) + ".",
            okButtonText: "OK"
          })
        } else {
          alert({
            title: "No service",
            message: "There are currently no employees serving tickets",
            okButtonText: "OK"
          })
        }
      }
      this.limit++
    }
  }
}
</script>

<style scoped>

.Action_Bar {
        background-color: #3f4041;
        color: #ffffff;
    }

.cover {
    background: linear-gradient(45deg, #3f4041, #3e88d1)
}

.button {
        background-color: #3f4041;
        border-radius: 25;
        color: white;
        font-size: 40%;
        font-weight: bold;
        padding-top: 7em;
        letter-spacing: 0;
}

.input {
        color: black;
        font-size: 30%;
        font-weight: bold;
}

.text {
        color: white;
        font-size: 30%;
        font-weight: bold;
}

</style>
