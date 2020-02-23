<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="700">
      <template v-slot:activator="{ on }">
        <v-btn color="success" dark v-on="on">
          Create a Session
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Create a new session
        </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-select
              :items="mentorNames"
              label="Mentor Name"
              dense
              v-model="mentorName"
              prepend-inner-icon="mdi-account"
            ></v-select>
            <v-select
              :items="sessionNames"
              label="Session Name"
              dense
              v-model="sessionName"
              prepend-inner-icon="mdi-folder"
            ></v-select>
            <v-layout>
              <v-flex>
                <v-col cols="12" sm="12" md="6">
                  <v-dialog
                    ref="dialogstartDate"
                    v-model="modal"
                    :return-value.sync="startDate"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="startDate"
                        label="Start Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="startDate" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialogstartDate.save(startDate)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </v-flex>
              <v-flex>
                <v-col cols="12" sm="12" md="6">
                  <v-dialog
                    ref="dialogendDate"
                    v-model="modal"
                    :return-value.sync="endDate"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="endDate"
                        label="End Date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="endDate" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.dialogendDate.save(endDate)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </v-flex>
            </v-layout>
            <v-btn flat class="success mx-0 mt-2" @click="submit">
              Add Session</v-btn
            >
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
/* eslint-disable no-console */
import axios from "axios";
export default {
  data() {
    return {
      mentorNames: ["Nyeko", "Alican", "Keny", "Christopher"],
      sessionNames: ["Java", "React", "Ruby", "Javascript"],
      dialog: false,
      dialogstartDate: false,
      dialogendDate: false,
      sessionName: "",
      mentorName: "",
      startDate: "",
      endDate: ""
    };
  },
  methods: {
    async submit() {
      const mentor = this.mentorName;
      const session = this.sessionName;
      const start = this.startDate;
      const end = this.endDate;
      const data = {
        mentor,
        session,
        start,
        end
      };
      console.log(data);
      await axios.post("", data);
    }
  },
  async mounted() {
    await axios
      .get("")
      .then()
      .catch();
  }
};
</script>
