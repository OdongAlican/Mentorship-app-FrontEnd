<template>
  <div class="mainSection">
    <nav>
      <v-toolbar flat app @click="drawer = !drawer">
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
            <v-list-item-avatar size="100">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFRUVFxUaFhgXFxUXFhgYFRgYFhgVGBYYHSggGBolGxcXITEiJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGhAQGzIlICU3LSstMS43Ky0rLSswLTUuLSsuLS0vLS0tLTA1KzctLS0rNy0tLS0tLS0vNy0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAgEDBQYHBAj/xABIEAABAwICBgYDCwsDBQAAAAABAAIDBBESIQUGMUFRcQcTImGBkTKhsRQjQlJygpLB0eHwCBUkM1NiorKzwtJDVJM0ZHSDlP/EABkBAQADAQEAAAAAAAAAAAAAAAABAgQDBf/EACoRAAICAQQABAYDAQAAAAAAAAABAgMRBBIhMTJBUbETImFxgaEUQpHB/9oADAMBAAIRAxEAPwDuKIiAKjXXUHOUmICSIiAIiIAiKJKAkihZSBQFUREAREQBERAFRrri6g5ym3YgKoiIAiIgCIokoCSKAUgUBVERAFbc5TcFFrUAa1TREAREQBEWs6766QaOixP7crweqiBs51t5PwWDe7yBOSBLJskkgaC5xAAzJJsAOJJ2LRNP9Kuj6cWjc6pdc26mxZccZSQ3yuuK6063Vle4mokOC92xNu2JvDs/CPe655LCRy4b3zB2g7D9h71GTsq/U6xXdLlU9vWMjjgjscIN5JHHuJIaPorTK7pB0pKSTWSNB3MwMt4saCtWqK69huGTRuAXnM7u5CflRnzrPX/76r/+mf8AzXrptedJs9Gtn+c4Sf1AVqXXO4+xBO7j7EG6PodL0d0v6TjtjMM43448Lj4xloH0VuOh+myndYVNPJCfjMIlZzPou8gVwYVJ7lcbUDfkhGIs+s9Caz0dWP0eojkO0tBs8c4zZw8Qsm5y+QIJACHA5jYRtB4hbho/pL0jARgmD2gZtlHWNJy2EkPA4DF9zJDr9D6Ra1SXE6bpxmA98oo3O4tmcwfRMbreak3pwmv/ANCy3Dr3X8+r+pMlfhyO1Iub6B6Y6KYhs7H0zj8J1nxX+W3Mcy0DvXRIJmvaHscHNcAWuaQWkHYQRkQpKtNdlxERCAoNU1QhARUgEAVUAREQBERAEREAREQGC1z1lj0fSunf2nejGy9jJIb4W33DIkncASvmXS+k5amZ9RO7HI83O4WGxrR8Fg2AfeVs/SrrKaytcGm8FOXRxDc5wNpJPFwtfgwW2laPPNbmoO8VtWWJprd5Xke8naqEqigq5ZCqCqIhUkRvHj3fcoqoKqRvHj+OCAipAbzs/GQRo3nZ+MgqON0BUuVRIeJUEQFzrncfYol54lRRCck9vP2/eugdD+uz6OqZTSPJpZ3YSCco5HnsyN4AusHbu1fcueqpF+ft+9SQfaaLVejLWA1ujoZXG8jR1cvHrI8i497hhf8AOW1KSgREQBERAEREAREQBERAFrvSFpo0ej55mmz8OCP5chDGnwLsXgtiXIfygdKWZTUo+E50z+TBgYORL3n5qForLOMyPyvv9v3/AI549zr5q5UPueSjt5+37/bz21LyeSCKJcqYlOCpNFHEq4kBVSZx/HJUbbbu9vcEc66gEn55+rh9ygqgqpG8eP44ICKIiAIiEoApgWz8vtVG22+Q+vkqEoDsf5O+mD1tVSuPpNbM0brsPVyHmQ6L6K7ivl7odrjFpemzsJOsjd3h8biB9NrV9QqxVhERCAiIgCIiAIii4oCSKFuak0oCq+bumrSGPSkw/ZMiiH0esPrlPkvpFfJvSJU9ZpKsPColH0HYPY0KGXhwa4qOKqoOKAOddURGm+zNSQAFJzbGx3bbexZOkpQwY3bRc3zIFstg2778LZcVj6l4LiRs3dwAtYd3BAW3G6oiICt1UPKiiEki5UxKi9dHTOcQGt6yR3osAvYfGcPYPwQPLdUBWxQasVrzhdSEA/Cs2M/KBcQDyVrS+qNXTsL3sDmDMuY7FYcSNoHfuVd8c4yW+HPGcGDJU1bU2qWVM1qbPg0hRv4VNP5GRoPqJX14vjjQLrVVOeE8P9Rq+x0RVhEQqSASqNN1AuuptCAqiIgCiFJUIQEVIBAFVAF8ga2H9OrP/Kqf6r19fr5E12jLdI1oP+6qD9KRzh6ioZKMKram5QKIsbN0faM66ra4jsQ9s/K2MHO+fzV1ObRVPIbyQxPPFzGk232NrrFamaG9zUzWuFpH9uTuJGTfmiw534rYHvusFtmZ5R61FO2vDXZr9VqbRPFuqIGXovkGwWGRdYAZ2Cx0nR1SHY+ZvJ7T/Mwrb0VPiz9To6K3/VGlno3pv203nH/gg6N6b9rN5x/4LdET40/Uj+PV6GoRdHdGNrpnc3tH8rQvZFqNQD/SLvlSSewOAWxoods/UlUVr+qMXDq5Rs9Gmhy4sa4+bgVl4bMILQALDICw2Z7FBVBVdzfZfYl0j1SOBAc4fJF/WV5HZ7fLdbgquN1RGyUsHG9ddCimqSGi0cgxx9wJ7TPA+ohYNi6l0mUAfSiW3ahcD819muHK+E+C5Y1ejTPdA8jUV7LGkZTVtl6ylHGogHnK1fYi+Suj6n6zSdE3/uInf8bus/tX1quiMzBKtuN1J4RrVJAa1SREAREQBERAEREAXyv0sU/V6XrBxex//JGx1/MlfVC+d/ygtHFukY5QMpoG+Lo3Oa7yaWISjl7ith1D0X19WzELsi98d3ltsLfpEHkCtfa3edn4yC6N0Vwe9zycXtYO4Mbi/vXK6W2DNGnhusSN6KIsHpPWyjgcWPlBcNrWAvI7iW5A9115yi30exKUYrLeDOItYZr7Qn/UeOcb/qBXsh1toXbKlg+Vib/MArOua8iiurfUkZxUWJOs1HcAVEbi4gNDTiJLjYABt95WXVWmuy6kn0yiqisVdS2NjpHmzWAlxsTYDabDNQSXkWJGs1Fa/umL6Y9i88+uVA3bUNPyWvd/K1W2S9CjtgvNGeRaudfqH47z/wCtyy2idO09T+plDiNrc2uHfhdY270cJLloRthJ4TRf0vSdbBLH8eN7fEg2PnZcHBX0GFwvTVNgqJmAWwyyC3diNiO61lp0r7Ri10fCzcehGj6zS0Lt0TJpD9Dqx65AvppcK/Jx0deWrqCPRZHE0/LJe8fwM8wu6rYecwiIhAREQBERAEREAREQHi0rpJkDMbrm5sANpP4C5L0vs/OEET4ondbTvcbXBLo3t7YbxddrCB3Hfkd+15PZiG67vYFzh1bI20hddpPoHhfK3fZZLbpRnhHo6fTQnXl9s4044ufD8b11Xo2itRNPx3yO8jh/tWo9IWjGxytqI/1c9ybbpB6XK+3mHLcjG6n0XbY8Qi9tuKT0vG7yrWy3xil5srRB1zk35Isa26ejwdTFUBpdcSPjGN7Wja1liAHHiSLAFacz83sFhTSynjLNg/hjFlntW9FUgpTVVOYaXbScIDbADCPSJO7vCjo01teZPcMUdJTRAmSYhrGsa0FxL5ACcVs8LASPWukIwi3GKbx35exyslOSU5NLPSxl4/PBgpPcrtlFblNMfbksdLSwE5CRnz2ut4FgJ81m9I0ukqWOKofPM2KozgkdJcPb6QJZjOC7SHWcNh5rP6r6dqpmv62H3QyINMj42gyMa64D3Qj025G5YMrZjMK7lt6j+2c1Dd3LH4X/AA1zVeKiimbLLJKSw3aDEAwO3ElrnE227BuXTINLU7m42zRkDb2gLc77PFeSTQNHM0PETCHAFro+zcHMG7bXWi6M0I2erkgxFrWGXOwLiGPwgc89vcuGK7syy1g1J26fEUk89HRI9M0zjYTxE/Lbn61jdJa0UbQ5jn9YCCHNYMQIIsRfJvrWD1g1Shgp3ytfISzDk7CQcTmt3NHFV1X0NTyQieYDs4y8udZlmk2vusALkniFVVUqO/La6/Jd3ahz+HhJ4z+DRqijixHA5wbfIODbgbgSDn5L0UlJEM3RPk+eWj+Fl/Wty1j0nNTsYaembTxy4urkkja2R4bteyEi7W5iznjPELBYTRlNpKrbNNHNO9lOA6ZzZLYG5k2ZjbiOFrjhbw7wtSnleH9mGVeHxL9LH7LEU9CMn0PP9Ilv5FehkOjy4PhfPSStN2uPvjAfAl3s271lq2q0ho/qnVQbV0kwBimFnNe1wxDC8gEOw54XjPPms/Hoehq42ysjbhfmHM7B4EEDeDuIXKc4x8Sa+zz7nauuU18rT+jWPYyOiKvrYmuLmOdazjGbsLhkSN4B22OYuuVa8xYK6Y8Sxw8WNueV7radRCY6meG9xZ3nE/BfycslW6uNlr/dMo96jjjIBtZzwXbe5oAPiO9ccKmx+mDQ3LUUx9cmy9E1Yyi0c0OY4yzPfK8ejhBsxgz/AHGNNv3l0fQ2mGVAdhBaW2uDbfsII2jIrkLq18hc5jsIbsG8957lvWoUmKRx+NGD6x9qV3ylNJ9EXaWEa212jdkRFsPNCIiAIiIAiIgCi111FzlJgQGu68R+9Ru4Pt5g/YuaiDtAHMMaLczlf1LreslNjp5ANoGIfNNz6rrmM0Wd1g1CxPJ62jlmvHoYKt0S2e1O/wBESMlbfg09tvi0uCyuskJfSzNG3A4jm3tfUoNdeZgaLluLF3Ai2ayhC5KTTX0NLgmn9eDmMGjJ6yjwQvF4ZHOMZyx4mgtdi2XHasDlmc12rQ1DHUaFdTU0fUF1PJEYze7JiwhweTYm7jfF8IOB3rkGjaj831kkb79U7K4F+ze8b7b7Zg27+C6RobS3wqeUOxWyaQRbaMTftW6ybhLOPlfJ5ddKshjOJLhr7HEtLmpJbBM+T9HuwRSOd71xa1p9Hds4DcupdAuiZA+arcC2Hq+qa45B7sQc4jiG4AL7LutuNtq0hVskLTUUdNK4ei58bXkW4F17Lz6U0y8s98e1kQGQFmMAH2d6o74+RdaWb74LWmHQslmfHZsZcXmws2+EY3Ad7g5x4kk71z/UFhkqJ5yNx85X47fw+tV1p1jEw9zU134zZzgD2v3GcRxK2TVvRXuaAMPpntPI+Mdw7gAB4KrzCuTl3L2OscWWxjDww8/qT1kpzJSzNAucBIHEt7QHqWO6LKiJ4YyaxZDNiIIuCHNJjcR3SdrmwLY1z2sjfo6q6xjbwvvYbi05mO+5zdo7hzUad7ouC77ROqW2asfXhf2ZuHT1oqR3UVbbuiDHRvcMwwudiY4kbGuuRfZcAbwuTaKfUNLooXye/gMdHE53v19jCwentOXeeJXadXtbGubaGVrmkdqJ9jt2gsOY8Mj3rJUWkIoXF0FHTRPdtdHE1rjfvbY+tdPjpcS4ZxWmk+Y4a9T2VOjo6bQraarj6/DAyMxNu4vlI7LGEZgh+xw9ENxZWXOdRdCT0kbzM8AOs7qxnhIGbi7ZcgZgcBmt4ra17+3K+9r2+KAcshkOa0XW/WaLqnxRPDnv7JLTdrWn0u0Mr2uLDZdUcpWvZFF4VxoTsm+Tw6ggyVE83EeuR+K38K2jS8hOGIfCzd8kfj1Lx6l6OMNMC4WdIcZG8A5NHkAeZK9FT2Z7u2OaA07t1x+OK5aiSlY8GjSwcKVnvv8A0dSGuaQLbWnla49i3ro+gtjPxWRt9v8AitQjiJ5LomplPhgxfHcT4Dsj2HzShZmiNXLFT+pnkRQJvyXoHjk0ULKQKAqiIgCtuddTIVGtQBrVJEQFCFzTTFCYZXR7tre9p2fZ4LpixentDtqGcHt9F39p7iuN9e+PHZp0t3w5c9M5TACx9xmHuAItmDuIKya9FRoOZj+1E+4OVgXNvsuCFCrpnRuLHizha45gH6157TXZ68ZRfTMbpPRUNQ3DKwOtsOxw5OGYWvTallr2yQTWLRbttz3jNze7LZuW3ICuld84cJnK3T12cyXJrR0LXEBzphlfA0TS2Pe7L6sljjqXNK7FPO3k0OeQOALrWW7kqi6fyrPLg5LQ1eeX+TF6H0BBTZsbd1rF7s3chuA5LKIizyk5PLZqjCMFiKwQlkwgngo1VMyRpY9oc07QRcK3pH9W7w9oUqKTEwHwPgi45JfPDNWr9Q4ybwyFn7rhjA5G4I8bqNJq5XM2VG/9rJYjgBbLPaN63JSe++ZWhaqzGG8/cyy0VTeUsfY0aTU+pksJagYQcrl8juZxWz9izGidUqeEhxBkeNhfawPENGXndZ9FWWpsksZLQ0lUXnGX9eQsbXgvdgvZrcJ2Zk7cjuWaoKUyyNjG11/UCfqT8yTOfbqn4th7Jtl3nLjndcVFvk7ynFcNlqgpnSOZG3a4gD6zyAz8F0+mhDGNY3Y0ADwyWI1d0F1AxvsZCN2xo4DieJ/Bzi3UV7Vl9nlau5WSxHpBQapqhC0GQipAIAqoAiIgCIiAIiIAiIgC0vXantKx/wAdtvFp+wjyW6LDa10fWU5IGbDiHIZO9RJ8Fyujugzvpp7LE/waCiIvNPbCIrTp7Ow2Oy9wCRttbLegLy83u1mLBcg8j7bKbahh2OHK4v5K8M0B5K8ktwgEk28AM9quUkOBoB2q/ZW5JWja4DmQEBNFZ90C7QLnFexscOQvtV5AEREBsWpVPimc/wCI31uyHqDluqwmqNJggDjtkOLw2N9Qv4rNr0qI7YI8XVT3WP8AwIiLqZwiIgCIiAIiIAiIgCIiAIiIAqEKqIDnmn9EmB+X6tx7J4funvHrWLXUaumbI0seLtO37RwK0LTehXwG/pRk5O+p3A+1YLqdvK6PW02pU1tl37mLREWc2FuWBrvSaDzAK850XF8W3IuH1r2IgPH+bIztBPNzvtV2Kjjb6LADxtn5lX1VAUREQBZLQWiTO+3wG+mf7R3lNDaHfO7LssHpO+ocSt+oqRkTAxgsB6+88StFNO7l9GTU6lQW2PfsXmtAFhkAqoi3nkBERAEREAREQBERAERRJQEkUMKk0oCqIiAIiIAoyRhwIcAQciDmCpKhKA1DTOqxF3wZjew7R8knbyOfNay5pBIcLEZEHb4rqTjdeSv0TFMPfG57nDJw8fqOSy2aZPmJup1rjxPn3Obotir9UpG5xODxwPZd9h9SwdTSSR+mxzeYIHnsKyyrlHtHoQthPwssortPTPkNmMc49wJ9e5Z2g1TkdnK4MHAdp32D1pGuUukJ2wh4ma80EkAAknYBmT4LZdD6rOdZ0/ZHxBtPyiNnLbyWx6O0TFCOw3Pe45uPj9i9ZzWqvTJcyPPu1rfEOBFG1oDWgADYBkApqGHzUmlajCVREQBERAERRc5AHu81UK2BdXUAREQBRUlQhARUgEAVUAREQBERACVbLrqZCo1qANapIiAIiIAiIgCgFNUIQEbKQCAKqAIiIAiIgIucoDNXHNugCAAKqIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//2Q=="
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="white--text headline"
                >Alican</v-list-item-title
              >
              <v-list-item-subtitle class="white--text"
                >Mentor</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-divider class="white"></v-divider>

          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router
            :to="item.route"
          >
            <v-list-item-icon>
              <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text">
                {{ item.title }}
              </v-list-item-title>
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
<style scoped></style>
