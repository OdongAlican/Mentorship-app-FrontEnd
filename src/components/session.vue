<template>
  <div class="sessions">
    <h1 class="subheading grey--text">Sessions</h1>
    <v-container class="my-5">
      <v-layout column wrap>
        <v-flex xs12 md12>
          <v-card class="mb-4" flat max-width="100">
            <pop-up></pop-up>
          </v-card>
          <v-layout row class="mb-3 ml-1">
            <v-flex xs2 md3>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    small
                    flat
                    color="grey lighten-1"
                    @click="sortBySession"
                    v-on="on"
                  >
                    <v-icon small left color="grey darken-2">mdi-folder</v-icon>
                    <div class="caption text-lowercase">By Session name</div>
                  </v-btn>
                </template>
                <span>Sort Session by name</span>
              </v-tooltip>
            </v-flex>
            <v-flex xs2 md2>
              <v-tooltip top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    small
                    flat
                    color="grey lighten-1"
                    @click="sortByMentor"
                    v-on="on"
                  >
                    <v-icon left small color="grey darken-2"
                      >mdi-account</v-icon
                    >
                    <div class="caption text-lowercase">By Mentor name</div>
                  </v-btn>
                </template>
                <span>Sort Session by Mentor</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-card
          v-for="session in sessions"
          :key="session.id"
          class="mt-1 pt-2"
          flat
        >
          <v-flex xs12 md12 class="pl-8">
            <v-layout row wrap>
              <v-flex xs6 sm4 md3>
                <div class="caption grey--text">Session Title</div>
                <div>{{ session.name }}</div>
              </v-flex>
              <v-flex xs6 sm4 md3>
                <div class="caption grey--text">Mentor</div>
                <div>{{ session.mentor }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">Start Date</div>
                <div>{{ session.start }}</div>
              </v-flex>
              <v-flex xs6 sm4 md2>
                <div class="caption grey--text">End Date</div>
                <div>{{ session.end }}</div>
              </v-flex>
              <v-flex xs6 sm4 md1>
                <div class="caption grey--text">Edit</div>
                <v-icon right small color="blue ">mdi-pencil</v-icon>
              </v-flex>
              <v-flex xs6 sm4 md1>
                <div class="caption grey--text">Delete</div>
                <v-icon right small color="red ">mdi-delete</v-icon>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-card>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
/* eslint-disable no-console */
import PopUp from "./Popup";
export default {
  components: {
    PopUp
  },
  data() {
    return {
      sessions: [
        {
          name: "Python",
          mentor: "Nyeko Walter",
          start: "1.12.2019",
          end: "4.12.2019"
        },
        {
          name: "Angular",
          mentor: "Akena Walter",
          start: "1.12.2019",
          end: "4.12.2019"
        },
        {
          name: "React",
          mentor: "BOpirao Walter",
          start: "1.12.2019",
          end: "4.12.2019"
        }
      ]
    };
  },
  methods: {
    sortBySession() {
      this.sessions.sort((n1, n2) => (n1.name < n2.name ? -1 : 1));
    },
    sortByMentor() {
      this.sessions.sort((n1, n2) => (n1.mentor < n2.mentor ? -1 : 1));
    }
  }
};
</script>
<style scoped></style>
