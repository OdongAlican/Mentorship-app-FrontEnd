<template>
  <div class="mainSection">
    <nav>
      <v-toolbar flat app @click="drawer=!drawer">
        <v-app-bar-nav-icon class="grey--text"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Mento</span>
          <span>rship</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="grey" dark>
          <span>Sign Out</span>
        </v-btn>
      </v-toolbar>
      <v-navigation-drawer app v-model="drawer" class="backgroundColor">
        <v-list dense nav class="py-0 backgroundColor">
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg" />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="white--text font-italic font-weight-light">Alican</v-list-item-title>
              <v-list-item-subtitle class="white--text">Mentor</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider class="white"></v-divider>

          <v-list-item v-for="item in items" :key="item.title" link router :to="item.route">
            <v-list-item-icon>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </nav>
    <v-content class="mx-4">
      <router-view></router-view>
    </v-content>
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", route: "/home" },
      { title: "mentors", icon: "mdi-account-group", route: "/mentors" },
      { title: "sessions", icon: "mdi-monitor-multiple", route: "/sessions" },
      { title: "About", icon: "mdi-help-box", route: "/about" },
      { title: "settings", icon: "mdi-settings", route: "/settings" }
    ]
  })
};
</script>
<style  scoped>
</style>
