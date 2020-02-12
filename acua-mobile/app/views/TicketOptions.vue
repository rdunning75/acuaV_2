
<!-- Page Controlls the Main view of ticket selction. Changeing templet will change the text under the options in the
      scroll bar.
            List Picker:
                creates the text wheel, which is populated by the object returned by the script
            Label:
                just a way to make plain text on app.
            StackLayout:
                allows you o populate the bottom portion of -->



<template>
    <Page>
        <ActionBar title="Ticket Reason" class="Action_Bar" />
        <GridLayout columns="*,2*" rows="*, *" class="cover">
            
            <ScrollView orientation="vertical" row="0" col="0" rowSpan="2" >
                <StackLayout orientation="vertical">

                    <!-- Adoption Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/animals.icon.png" 
                     v-if="isAdoption" :title="choices[0]" :action="adoption" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/animals.icon.png" 
                     v-else :title="choices[0]" :action="adoption" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Stray Intake Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/services.icon.png" 
                     v-if="isStrayIntake" :title="choices[1]" :action="strayIntake" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/services.icon.png" 
                     v-else :title="choices[1]" :action="strayIntake" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- New Pet License Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/license.icon.png" 
                     v-if="isNewPetLicense" :title="choices[2]" :action="newPetLicense" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/license.icon.png" 
                     v-else :title="choices[2]" :action="newPetLicense" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Renew Pet License Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/badge1.png" 
                     v-if="isRenewPetLicense" :title="choices[3]" :action="renewPetLicense" class="fa homepage-blue ButtonSelected" textWrap="true"/>
                    
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/badge1.png" 
                     v-else :title="choices[3]" :action="renewPetLicense" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Microchip Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/doggo.png" 
                     v-if="isMicrochip" :title="choices[4]" :action="microchip" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/doggo.png" 
                     v-else :title="choices[4]" :action="microchip" class="fa homepage-blue Button" textWrap="true"/>
                    
                    <!-- Return To Owner Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/cat.button.jpg" 
                     v-if="isReturnToOwner " :title="choices[5]" :action="returnToOwner" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/cat.button.jpg" 
                     v-else :title="choices[5]" :action="returnToOwner" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Service Request Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/phoneicon.png" 
                     v-if="isServiceRequest " :title="choices[6]" :action="serviceRequest" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/phoneicon.png" 
                     v-else :title="choices[6]" :action="serviceRequest" class="fa homepage-blue Button" textWrap="true"/>

                </StackLayout>
            </ScrollView>

            <StackLayout orientation="vertical" col="1" v-show="isHome">
                <Label text="Home Information" class="infoText"/>
            </StackLayout>
            <StackLayout orientation="vertical" col="1" v-show="isAdoption">
                <Label text="Adoption Information" class="infoText"/>
                <Button text="Next >>" class="button" @tap="createTicket"/>
            </StackLayout>
            <StackLayout orientation="vertical" col="1" v-show="isStrayIntake">
                <Label text="Stray Intake Information" class="infoText"/>
                <Button text="Next >>" class="button" @tap="createTicket"/>
            </StackLayout>
            <StackLayout orientation="vertical" col="1" v-show="isNewPetLicense">
                <Label text="New Pet License Information" class="infoText"/>
                <Button text="Next >>" class="button" @tap="createTicket"/>
            </StackLayout>
              <StackLayout orientation="vertical" col="1" v-show="isRenewPetLicense">
                <Label text="Renew Pet License Information" class="infoText"/>
                <Button text="Next >>" class="button" @tap="createTicket"/>
            </StackLayout>
              <StackLayout orientation="vertical" col="1" v-show="isMicrochip">
                <Label text="Microchip Information" class="infoText"/>
                <Button text="Next >>" class="button" @tap="createTicket"/>
            </StackLayout>
              <StackLayout orientation="vertical" col="1" v-show="isReturnToOwner">
                <Label text="Return to Owner Information" class="infoText"/>
                <Button text="Next >>" class="button" @tap="createTicket"/>
            </StackLayout>
              <StackLayout orientation="vertical" col="1" v-show="isServiceRequest">
                <Label text="Service Request Information" class="infoText"/>
                <Button text="Next >>" class="button" @tap="createTicket"/>
            </StackLayout>

        </GridLayout>
    </Page>
</template>

<script>
    import Home from './Home.vue'
    import TicketForm from './TicketForm.vue'
    import CategoryButton from "@/components/buttons/CategoryButton.vue"

    export default {
        data() {
            return {
                choices: [
                    'Adoption ',
                    'Stray Intake',
                    'New Pet License',
                    'Renew Pet License',
                    'Microchip',
                    'Return to Owner',
                    'Service Request',
                    'other'
                ],
                otherText: '',
                selectedIndex: 0,
                isHome: true,
                isAdoption: false,
                isStrayIntake: false,
                isNewPetLicense: false,
                isRenewPetLicense: false,
                isMicrochip: false,
                isReturnToOwner: false,
                isServiceRequest: false,
                ticketForm: TicketForm,
            }
        },
        methods: {
            toHome() {
                this.$navigateTo(this.home)
            },
            createTicket() {
                this.$navigateTo(this.ticketForm, {props: {query: this.otherText}})
            },
            selectedIndexChanged() {
                if (this.selectedIndex >= 1)
                    this.isTicket = true
                else
                    this.isTicket = false
            },
            home(){
                this.isHome = true;
                this.isAdoption = false;
                this.isStrayIntake = false;
                this.isNewPetLicense = false;
                this.isRenewPetLicense = false;
                this.isMicrochip = false;
                this.isReturnToOwner = false
                this.isServiceRequest = false;
            },
            adoption(){
                this.isHome = false;
                this.isAdoption = true;
                this.isStrayIntake = false;
                this.isNewPetLicense = false;
                this.isRenewPetLicense = false;
                this.isMicrochip = false;
                this.isReturnToOwner = false
                this.isServiceRequest = false;
            },
            strayIntake(){
                this.isHome = false;
                this.isAdoption = false;
                this.isStrayIntake = true;
                this.isNewPetLicense = false;
                this.isRenewPetLicense = false;
                this.isMicrochip = false;
                this.isReturnToOwner = false
                this.isServiceRequest = false;
            },
            newPetLicense() {
                this.isHome = false;
                this.isAdoption = false;
                this.isStrayIntake = false;
                this.isNewPetLicense = true;
                this.isRenewPetLicense = false;
                this.isMicrochip = false;
                this.isReturnToOwner = false
                this.isServiceRequest = false;
            },
            renewPetLicense(){
                this.isHome = false;
                this.isAdoption = false;
                this.isStrayIntake = false;
                this.isNewPetLicense = false;
                this.isRenewPetLicense = true;
                this.isMicrochip = false;
                this.isReturnToOwner = false
                this.isServiceRequest = false;;
            },
            microchip(){
                this.isHome = false;
                this.isAdoption = false;
                this.isStrayIntake = false;
                this.isNewPetLicense = false;
                this.isRenewPetLicense = false;
                this.isMicrochip = true;
                this.isReturnToOwner = false
                this.isServiceRequest = false;
            },
            returnToOwner(){
                this.isHome = false;
                this.isAdoption = false;
                this.isStrayIntake = false;
                this.isNewPetLicense = false;
                this.isRenewPetLicense = false;
                this.isMicrochip = false;
                this.isReturnToOwner = true
                this.isServiceRequest = false;
            },
            serviceRequest(){
                this.isHome = false;
                this.isAdoption = false;
                this.isStrayIntake = false;
                this.isNewPetLicense = false;
                this.isRenewPetLicense = false;
                this.isMicrochip = false;
                this.isReturnToOwner = false
                this.isServiceRequest = true;
            }
        },
        props: {
            site: String
        },
        components: {
            CategoryButton
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
        background-color: black;
        border-radius: 25;
        font-size: 40%;
        font-weight: bold;
        padding-top: 7em;
        letter-spacing: 0;
    }

    .Button {
        background: linear-gradient(135deg, #d3d3d3 5%, #ffffff);
        border-radius: 25;
        font-size: 40%;
        font-weight: bold;
        padding-top: 7em;
        letter-spacing: 0;
    }

    .ButtonSelected {
        color: white;
        border-radius: 25;
        font-size: 40%;
        font-weight: bold;
        padding-top: 7em;
        letter-spacing: 0;
    }

    .infoText {
        font-size: 40%;
        text-align: center;
    }

</style>
