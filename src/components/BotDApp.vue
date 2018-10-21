<template>
  <v-container grid-list-md text-xs-center>
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
          <v-btn block color="rgb(249, 104, 84)">
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
            v-model="burnnNumberToken"
            required
            label="Number Tokens"
          >
          </v-text-field>
          <v-btn block color="rgb(249, 104, 84)">
            Burn
          </v-btn>
        </v-form>
      </v-flex>

      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">Current Charge: {{currentCharge}}</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">Total Charge: {{totalCharge}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BotDApp',
  data() {
    return {
      msg: 'Welcome to Your BOT App',
      mintId: 0,
      mintNumberToken: 0,
      burnId: 0,
      burnnNumberToken: 0,
      currentCharge: 0,
      totalCharge: 1000000,
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
