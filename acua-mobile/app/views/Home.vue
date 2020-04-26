<template>
  <Page >
    <ActionBar ios.position="left" class="Action_Bar">
      <Label text="Welcome" fontSize="20" verticalAlignment="center"/>
      <NavigationButton visibility="collapsed"></NavigationButton>
    </ActionBar>

    <StackLayout backgroundColor="#b21a82">

      <GridLayout class="layout cover" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*">
        <Image row="1" col="0" rowSpan="7" colSpan="2" src="~/assets/images/background-yellow-dog.png"></Image>
        <Image row="0" col="2" colSpan="3" rowSpan="3" src="~/assets/images/Final Logo White.png"></Image>
        <Label row="3" col="2" colSpan="3" text="Welcome!" class="textTitle1"/>
        <Label row="4" col="2" colSpan="3" rowSpan="2" text="No wait for kennel visits. Go on in!" class="text"/>
        <Label row="5" col="2" colSpan="3" text="Otherwise, Click Below to Create a ticket" class="text"/>

        
        <CategoryButton verticalAlignment="center"  margin="5" row="6" col="2" colSpan="3" rowSpan="2" src="~/assets/images/hoursicon.png" 
        :icon="'fa-map-marker' | fonticon" :title="titles[4]" :action="toQRScanner" class="fa homepage-blue HomeButton" textWrap="true"/>
       
      </GridLayout>

    </StackLayout>
    
  </Page>
  
</template>

<script>
import CategoryButton from "@/components/buttons/CategoryButton.vue"
import Faq from "./Faq.vue"
import Location from "./Location.vue"
import QRScanner from "./TicketOptions.vue"
import Adoption from "./Adoption.vue"
import ServiceRequest from "./ServiceRequest.vue"
import { mapState, mapActions, mapMutations } from "vuex"

export default {
  data() {
    return {
      actionBar: "Welcome to Downey",
      msg: "Hello World!",
      titles: [
        "Adopt an Animal!",
        "Services & Fees",
        "Service Request",
        "FAQ",
        "Create a Ticket",
        "Find Our Location"
      ],
      textWrap: false,
      results: [],
      faq: Faq,
      location: Location,
      qrScanner: QRScanner,
      adoption: Adoption,
      serviceRequest: ServiceRequest,

    };
  },

  computed: mapState(['approvedTicket']),

  methods: {
    ...mapActions(['checkTicket']),
    ...mapMutations(['SET_TICKET']),
    toLocationList() {
      this.$navigateTo(this.location, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    toFaq() {
      this.$navigateTo(this.faq, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    toQRScanner () {
        this.$navigateTo(this.qrScanner, {
          animated: true,
          transition: {
            name: "slide",
            duration: 380,
            curve: "easeIn"
          }
        });

    },
    toAdoption () {
      this.$navigateTo(this.adoption, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },
    toServiceRequest () {
      this.$navigateTo(this.serviceRequest, {
        animated: true,
        transition: {
          name: "slide",
          duration: 380,
          curve: "easeIn"
        }
      });
    },

  },



  components: {
    CategoryButton,
    Faq
  }
};
</script>

<style scoped lang ="scss">
@import "../AnimalCenter";

.Action_Bar {
  background-color: #3f4041;
  color: #ffffff;
}

.S_Bar {
  color: #050505;
}

.S_Button {
  background-image: url("~/assets/images/NativeScript-Vue.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.cover {
    background: linear-gradient(45deg, #3f4041, #3e88d1)
}

.homepage-blue {
  color: $homepage-blue;
}

.Action_Text {
  margin-right: 0;
}

.HomeButton {
  background: linear-gradient(135deg, #d3d3d3 5%, #ffffff);
  border-radius: 25;
  font-size: 50%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
}

.layout {
  background-color: #eeeeee;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #252525;
}

.text {
  color: white;
  font-size: 20%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
  text-align: center;
}
.textTitle {
  color: white;
  font-size: 80%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
  text-align: center;
}

.textTitle1 {
  color: white;
  font-size: 100%;
  font-weight: bold;
  padding-top: 7em;
  letter-spacing: 0;
  text-align: center;
}

</style>

