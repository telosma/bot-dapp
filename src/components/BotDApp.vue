<template>
  <v-container grid-list-md text-xs-center>
    <h1> <img src="@/assets/ether_icon.png" class="ether-icon"> BOT Owner DAPP</h1>
    <hr class="mb-5">
    <v-layout row wrap>
      <v-flex xs5>
        <v-form ref="form-mint">
          <v-text-field
            v-model="mintId"
            required label="id"
          >
          </v-text-field>
          <v-text-field
            v-model="mintNumberToken"
            required
            label="Number Tokens"
          >
          </v-text-field>
          <span>${{formatReadableAmount(this.mintNumberToken*this.exchangeRate)}}</span>
          <v-btn block color="rgb(249, 104, 84)" @click="actionMint">
            Mint
          </v-btn>
        </v-form>
      </v-flex>
      <v-flex xs2>
      </v-flex>
      <v-flex xs5>
        <v-form ref="form-burn">
          <v-text-field
            v-model="burnId"
            required label="id"
          >
          </v-text-field>
          <v-text-field
            v-model="burnNumberToken"
            required
            label="Number Tokens"
          >
          </v-text-field>
          <span>${{formatReadableAmount(this.burnNumberToken*this.exchangeRate)}}</span>
          <v-btn block color="rgb(249, 104, 84)" @click="actionBurn">
            Burn
          </v-btn>
        </v-form>
      </v-flex>

      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0 mt-5">Current Charge: {{this.formatCurrentCharge}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">Total Charge: {{this.formatTotalCharge}}</v-card-text>
        </v-card>
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
      msg: 'Welcome to Your BOT App',
      mintId: 0,
      mintNumberToken: 0,
      burnId: 0,
      burnNumberToken: 0,
      currentCharge: 3004250000,
      totalCharge: 9687543205649,
      exchangeRate: 2000,
    };
  },
  computed: {
    formatCurrentCharge() {
      let val = (this.currentCharge/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    formatTotalCharge() {
      let val = (this.totalCharge/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    burnAmount() {

    },
    mintAmount() {

    },
  },
  beforeCreate () {
    BOTToken.init();
    BOTToken.getSystemWallet();
  },
  created() {
    // TO DO: get exchange rate
  },
  methods: {
    actionMint () {
      let _mintId = this.mintId;
      let _mintNumberToken = this.mintNumberToken;
      console.log("mint token");
      if (!_mintId || !_mintNumberToken) {
        window.alert("fill enought Mint information");
        return;
      }
      BOTToken.mintToken(_mintId, _mintNumberToken);
    },
    actionBurn () {
      let _burnId = this.burnId;
      let _burnNumberToken = this.burnNumberToken;
      console.log("burn token");
      if (!_burnId || !_burnNumberToken) {
        window.alert("fill enought Burn information");
        return;
      }
      BOTToken.burnToken(_burnId, _burnNumberToken);
    },
    formatReadableAmount(value) {
      let val = (value/1).toFixed(2).replace('.', ',')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
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
