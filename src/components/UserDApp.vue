<template>
  <v-container grid-list-md text-xs-center>
    <h1> <img src="@/assets/ether_icon.png" class="ether-icon"> USER DAPP</h1>
    <hr class="mb-5">
    <v-layout row wrap>
      <v-flex xs8 offset-xs2>
        <v-form ref="form-mint">
          <v-text-field
            v-model="userId"
            required label="User Id"
            disabled
          >
          </v-text-field>
          <v-text-field
            v-model="balance"
            required
            label="Balance"
            disabled
          >
          </v-text-field>
          <v-text-field
            v-model="ticketPrice"
            required
            label="Ticket Price"
            disabled
          >
          </v-text-field>
          <v-text-field
            v-model="botCurrentCharge"
            required
            label="Bot Current Charge"
            disabled
          >
          </v-text-field>
          <v-btn block color="rgb(249, 104, 84)" @click="payFee">
            Pay Fee
          </v-btn>
        </v-form>
      </v-flex>
      <v-flex xs2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BOTToken from '@/contracts/bot_token';

export default {
  name: 'BotDApp',
  data() {
    return {
      userId: null,
      balance: 0,
      ticketPrice: 0,
      botCurrentCharge: 0,
    };
  },
  beforeCreate () {
    BOTToken.init();
    BOTToken.getSystemWallet();
  },
  methods: {
    payFee() {
    }
  }
};
</script>

<style scoped>
.ether-icon {
  width: 12px;
  height: 20px;
}
</style>
