<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-container class="primary">
            <charts
              v-if="loaded"
              :chartdata="chartdata"
              :options="options"
            ></charts>
          </v-container>
        </v-flex>
        <v-flex xs12 md6>
          <v-layout column>
            <v-flex xs6 md6>
              <v-card dark class="warning"></v-card>
            </v-flex>
            <v-flex xs6 md6>
              <v-container class="red">the lower Section</v-container>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
/* eslint-disable no-console */
import Charts from "./Charts";
import axios from "axios";
export default {
  components: { Charts },
  data() {
    return {
      chartdata: null,
      options: null,
      loaded: false
    };
  },
  async mounted() {
    this.loaded = false;
    await axios
      .get("http://localhost:3000/api/mentors")
      .then(res => {
        console.log(res);
        console.log("this is the topic");
        this.loaded = true;
        this.chartdata = {
          labels: ["Javascript", "React", "PHP", "Laravel", "Python", "Java"],
          datasets: [
            {
              label: "# Mentors",
              data: [2, 3, 4, 6, 2, 1],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)"
              ],
              borderWidth: 1
            }
          ]
        };

        this.options = {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          maintainAspectRatio: false,
          title: {
            display: true,
            text: ""
          }
        };
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped></style>
