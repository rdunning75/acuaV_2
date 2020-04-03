
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

                    <!-- Intake Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/boneOutline.png" 
                     v-if="isIntake" :title="choices[1]" :action="intake" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/boneOutline.png" 
                     v-else :title="choices[1]" :action="intake" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Pet License Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/license.icon.png" 
                     v-if="isPetLicense" :title="choices[2]" :action="petLicense" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/license.icon.png" 
                     v-else :title="choices[2]" :action="petLicense" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Microchip Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/doggo.png" 
                     v-if="isMicrochip" :title="choices[3]" :action="microchip" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/doggo.png" 
                     v-else :title="choices[3]" :action="microchip" class="fa homepage-blue Button" textWrap="true"/>
                    
                    <!-- Service Request Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/services.icon.png" 
                     v-if="isServiceRequest " :title="choices[4]" :action="serviceRequest" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/services.icon.png" 
                     v-else :title="choices[4]" :action="serviceRequest" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Show Documentation Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/badge1.png" 
                     v-if="isShowDocumentation " :title="choices[5]" :action="showDocumentation" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/badge1.png" 
                     v-else :title="choices[5]" :action="showDocumentation" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Disposal Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/phoneicon.png" 
                     v-if="isDisposal " :title="choices[6]" :action="disposal" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/phoneicon.png" 
                     v-else :title="choices[6]" :action="disposal" class="fa homepage-blue Button" textWrap="true"/>

                    <!-- Donate Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/moneyOutline.png" 
                     v-if="isDonate " :title="choices[7]" :action="donate" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/moneyOutline.png" 
                     v-else :title="choices[7]" :action="donate" class="fa homepage-blue Button" textWrap="true"/>
                     
                    <!-- Other Button -->
                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/achouse.png" 
                     v-if="isOther " :title="choices[8]" :action="other" class="fa homepage-blue ButtonSelected" textWrap="true"/>

                    <CategoryButton verticalAlignment="center"  margin="5" src="~/assets/images/achouse.png" 
                     v-else :title="choices[8]" :action="other" class="fa homepage-blue Button" textWrap="true"/>
                     

                </StackLayout>
            </ScrollView>


            <!-- Get Started tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,2*" rows="auto,auto,auto,auto,auto" v-show="isHome">
                <Label text="Get Started" class="titleText" col="1" row="1"/>
                <TextView text="Please select the" class="infoText" col="1" row="2"/> 
                <TextView text="reason for your visit" class="infoText" col="1" row="3"/>
                <Image src="~/assets/images/arrowUpLeft.png" col="0" row="1"/>
                <Image src="~/assets/images/arrowDownLeft.png" col="0" row="3"/>
            </GridLayout>

            <!--Adoption Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,8*,*" v-show="isAdoption">
                <Label text="Adoption Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" 
                 class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="2" colSpan="3" @tap="createTicket('Adoption')"/>
            </GridLayout>
            <!--Intake Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,8*,*" v-show="isIntake">
                <Label text="Intake Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" 
                 class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="2" colSpan="3" @tap="createTicket('Intake')"/>
            </GridLayout>
            <!--Pet License Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*,*" v-show="isPetLicense">
                <Label text="Pet License Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="8" colSpan="3" @tap="createTicket('Pet License')"/>
            </GridLayout>
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*,*" v-show="isMicrochip">
                <Label text="Microchip Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="8" colSpan="3" @tap="createTicket('Microchip')"/>
            </GridLayout>
            <!--Service Request Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*,*" v-show="isServiceRequest">
                <Label text="Service Request Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="8" colSpan="3" @tap="createTicket('Service Request')"/>
            </GridLayout>
            <!--Documentation Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*,*" v-show="isShowDocumentation">
                <Label text="Show Documentation Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="8" colSpan="3" @tap="createTicket('Show Documentation')"/>
            </GridLayout>
            <!--Disposal Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*,*" v-show="isDisposal">
                <Label text="Disposal Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="8" colSpan="3" @tap="createTicket('Disposal')"/>
            </GridLayout>
            <!--Donate Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*,*" v-show="isDonate">
                <Label text="Donate Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="8" colSpan="3" @tap="createTicket('Donate')"/>
            </GridLayout>
            <!--Other Info Tab -->
            <GridLayout orientation="vertical" col="1" rowSpan="2" columns="*,*,*,*,*" rows="*,*,*,*,*,*,*,*,*,*" v-show="isOther">
                <Label text="Other Information" row="0" col="1" colSpan="3" class="infoText"/>
                <TextView editable="false" :text="'Continue if you \n have any of these \n -first \n -second \n -third'" class="infoText" col="1" colSpan="3" row="1" rowSpan="6"/>
                <Button text="Next >>" class="button" col="1" row="8" colSpan="3" @tap="createTicket('Other')"/>
            </GridLayout>


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
                    'Adoption',
                    'Intake',
                    'Pet Licenses',
                    'Microchip',
                    'Service Request',
                    'Documentation',
                    'Disposal',
                    'Donate',
                    'Other'
                ],
                otherText: '',
                selectedIndex: 0,
                isHome: true,
                isAdoption: false,
                isIntake: false,
                isPetLicense: false,
                isMicrochip: false,
                isServiceRequest: false,
                isShowDocumentation: false,
                isDisposal: false,
                isDonate: false,
                isOther: false,
                ticketForm: TicketForm,
            }
        },
        methods: {
            toHome() {
                this.$navigateTo(this.home)
            },
            createTicket(reasonForVisit) {
                this.$navigateTo(this.ticketForm, {props: {reasonForVisit: reasonForVisit}})
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
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            adoption(){
                this.isHome = false;
                this.isAdoption = true;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            intake(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = true;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            petLicense() {
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = true;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            renewPetLicense(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            microchip(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = true;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },
            serviceRequest(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = true;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },

            showDocumentation(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = true;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = false;
            },

            disposal(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = true;
                this.isDonate = false;
                this.isOther = false;
            },

            donate(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = true;
                this.isOther = false;
            },

            other(){
                this.isHome = false;
                this.isAdoption = false;
                this.isIntake = false;
                this.isPetLicense = false;
                this.isMicrochip = false;
                this.isServiceRequest = false;
                this.isShowDocumentation = false;
                this.isDisposal = false;
                this.isDonate = false;
                this.isOther = true;
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
        background-color: transparent;
        font-size: 40%;
        text-align: center;
    }
    .titleText {
        background-color: transparent;
        font-size: 60%;
        color: white;
        text-align: center;
    }

</style>
