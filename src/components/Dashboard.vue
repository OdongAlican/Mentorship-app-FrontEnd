<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 md5>
          <v-container class="grey lighten-2">
            <charts v-if="loaded" :chartdata="chartdata" :options="options"></charts>
          </v-container>
        </v-flex>
        <v-flex xs12 md4 class="ml-2">
          <v-layout column>
            <v-flex xs6 md6>
              <v-card class="grey lighten-2">
                <pie-chart v-if="loaded" :data="ChartData" :options="chartOptions"></pie-chart>
              </v-card>
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
import PieChart from "./PieChart";
import axios from "axios";
export default {
  components: { Charts, PieChart },
  data() {
    return {
      chartdata: null,
      options: null,
      loaded: false,
      ChartData: null
    };
  },
  async mounted() {
    this.loaded = false;
    await axios
      .get("http://localhost:3000/api/mentors")
      .then(response => {
        const mentors = response.data;
        let results = mentors.reduce((obj, mentor) => {
          obj[mentor.expertize] = (obj[mentor.expertize] || 0) + 1;
          return obj;
        }, {});

        this.loaded = true;
        this.chartdata = {
          labels: ["Javascript", "React", "PHP", "Laravel", "Python", "Java"],
          datasets: [
            {
              label: "# Mentors",
              data: [
                results.JavaScript,
                results.ReactJs,
                4,
                6,
                results.Python,
                1
              ],
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

    this.loaded = false;
    await axios
      .get("http://localhost:3000/api/mentorshipsessions")
      .then(response => {
        const sessions = response.data;
        let results = sessions.reduce((obj, session) => {
          obj[session.name] = (obj[session.name] || 0) + 1;
          return obj;
        }, {});
        console.log(results);

        this.loaded = true;
        this.ChartData = {
          hoverBackgroundColor: "red",
          hoverBorderWidth: 5,
          labels: [
            "JavaSpring",
            "ReactJs",
            "RubyRails",
            "Javascript",
            "Python"
          ],
          datasets: [
            {
              label: "Data One",
              backgroundColor: [
                "#41B883",
                "#E46651",
                "#00D8FF",
                "#059BFF",
                "#2D324E"
              ],
              data: [
                results.JavaSpring,
                results.ReactJs,
                results.RubyRails,
                results.Javascript,
                results.Python
              ]
            }
          ]
        };
      })
      .catch(err => console.log(err));
  }
};
</script>
<style scoped></style>
