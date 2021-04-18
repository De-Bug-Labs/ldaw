<template>
  <div class="nav">
    <router-link to="/" class="logo1"
      ><img src="../public/img/roof.svg" />
      <p>GAAP</p></router-link
    >
    <a class="toggle"><i class="large material-icons">dehaze</i></a>
    <ul class="">
      <li>
        <router-link to="/about"
          >Material <img src="../public/img/globe.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/about"
          >Ayuda <img src="../public/img/information.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/about"
          >Apóyanos <img src="../public/img/love.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/about"
          >Calendario <img src="../public/img/calendar.svg"
        /></router-link>
      </li>
      <li>
        <router-link to="/about"
          >Salon de la fama <img src="../public/img/trophy.svg"
        /></router-link>
      </li>
    </ul>
  </div>

  <router-view />
</template>

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
}
#app {
  margin-top: 100px;
  left: 0px;
  color: #2c3e50;
  overflow: hidden;
}

.nav {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 10px 50px;
  box-sizing: border-box;
  transition: 0.5s;
  background-color: #dcf2fc;
  box-shadow: 0px 5px 5px rgba(255, 255, 255, 0.1);

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

@media screen and (max-width: 900px) {
  .nav {
    padding: 0 0 !important;
    width: 100vw !important;

    ul {
      width: 100% !important;
      top: 16px !important;
      display: none !important;

      li {
        a {
          margin: 0 !important;
          display: block !important;
          text-align: center !important;
          color: white !important;
          background: rgba(0, 0, 0, 0.6) !important;
        }
      }
    }

    ul.active1 {
      display: block !important;
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
