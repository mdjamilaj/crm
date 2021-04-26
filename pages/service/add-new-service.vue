<template>
  <div>
    <v-row>
      <v-col xs="12" sm="6" md="6" class="mt-5">
        <v-text-field
          outlined
          dense
          rounded
          placeholder="Project Name"
          hide-details
        >
        </v-text-field>
      </v-col>
      <v-col xs="12" sm="6" md="6" class="mt-5">
        <div class="grey--text">
          <v-btn class="mx-2 btn-shadow small-border" fab small>
            <v-icon class="grey--text"> mdi-plus </v-icon>
          </v-btn>
          <span>Project Preferences</span>
        </div>
      </v-col>
    </v-row>
    <v-row>
        <v-col xs="6" sm="3" md="3">
            <v-card>
                <div>
                    <v-icon>mdi-check-circle-outline</v-icon>
                </div>
            </v-card>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>