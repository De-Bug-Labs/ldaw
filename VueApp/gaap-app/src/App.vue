<template>
  <div class="nav">
    <router-link to="/about" class="logo1"
      ><img src="../public/img/roof.svg" />
      <p>GAAP</p></router-link
    >
    <a class="toggle" @click="movile = !movile"
      ><i class="large material-icons">dehaze</i></a
    >
    <ul :class="{ active1: movile }">
      <li>
        <router-link to="/temp"
          >Material <img src="../public/img/globe.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/help"
          >Ayuda <img src="../public/img/information.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/temp"
          >Apóyanos <img src="../public/img/love.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/temp"
          >Calendario <img src="../public/img/calendar.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/temp"
          >Salon de la fama <img src="../public/img/trophy.svg"
        /></router-link>
      </li>
    </ul>
  </div>
  <router-view />
  <div class="footer">
    <h1>GAAP Centro Integral de Apoyo Geriatrico, I.A.P</h1>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      movile: false,
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Signika:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,200;1,300;1,400;1,600&display=swap");

body::-webkit-scrollbar {
  display: none;
}
body {
  overflow-x: hidden;
  margin: 0px;
  height: 100%;
}
#app {
  margin-top: 100px;
  left: 0px;
  color: #000000;
  overflow: hidden;
}

.footer {
  bottom: 0;
  width: 100%;
  height: 80px;
  background-color: #8edafd;
  box-shadow: 0px -5px 11px rgba(0, 0, 0, 0.2);
  font-family: "Signika", sans-serif;
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  h1 {
    margin-left: 20px;
  }
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 10px 50px;
  box-sizing: border-box;
  transition: 0.5s;
  background-color: #8edafd;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  z-index: +1;

  .logo1 {
    float: left;
    text-decoration: none;
    font-family: "Signika", sans-serif;
    display: flex;
    flex-direction: row;
    text-align: center;
    height: 70px;
    transition: 0.5s;

    p {
      margin-left: 10px;
      margin-bottom: 0px;
      margin-top: 10px;
      color: #000;
      font-size: 3rem;
      font-weight: 600;
      position: relative;
    }

    img {
      height: 70px;
      transition: 0.5s;
    }
  }

  ul {
    position: relative;
    float: right;
    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style: none;

      a {
        position: relative;
        padding: 5px 20px;
        margin: 20px 0;
        color: black;
        text-decoration: none;
        font-size: 20px;
        font-family: "Open Sans", sans-serif;
        font-weight: 600 !important;
        display: flex;

        img {
          height: 30px;
          transition: 0.5s;
          margin-left: 10px;
        }
        &:hover {
          border-bottom: 2px solid rgb(0, 0, 0);
        }
        &.router-link-exact-active {
          border-bottom: 2px solid rgb(0, 0, 0);
        }
      }
    }
  }
}

.toggle {
  display: none;
  position: absolute;
  right: 10px;
  top: 26px;
  color: rgb(0, 0, 0);
  padding: 5px;
  cursor: pointer;
  font-size: 24px;
}

@media screen and (max-width: 1080px) {
  .nav {
    padding: 0 0;
    width: 100vw;

    ul {
      width: 70%;
      li {
        a {
          display: flex;
          padding: 10px 10px;
          font-size: 18px;
        }
      }
    }
    .logo1 {
      margin-top: 10px;
      margin-left: 10px;
    }
  }
}

@media screen and (max-width: 900px) {
  .footer {
    h1 {
      margin-left: 20px;
      font-size: 15px;
    }
  }
  .nav {
    padding: 0 0;
    width: 100vw;

    ul {
      width: 100%;
      top: 16px;
      display: none;
      border-top: 3px solid rgb(0, 0, 0);

      li {
        border-bottom: 3px solid rgb(0, 0, 0);
        text-align: center;
        a {
          margin: 0;
          display: flex;
          color: rgb(0, 0, 0);
          background: #8edafd;
          text-transform: uppercase;
          align-items: center;

          img {
            padding-top: 5px;
          }

          &.router-link-exact-active {
            background: #ffffff;
          }
        }
      }
    }

    ul.active1 {
      display: block;
    }

    .logo1 {
      margin-top: 10px;
      margin-left: 10px;
    }
    .toggle {
      right: 10px !important;
      display: block !important;
      i {
        font-size: 30px;
      }
    }
  }
}
</style>
