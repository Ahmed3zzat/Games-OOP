import { Design } from "./ui.module.js";
import { Details } from "./details.module.js";
export class Home {
  constructor() {
    /* Start Main */

    let myActiveLink = document.querySelector("nav ul");
    let navLink = document.querySelectorAll("nav a.nav-link");
    this.loading = document.querySelector(".overlay-animation");
    this.row = document.querySelector(".container-data .row");
    // console.log(navLink)

    myActiveLink.addEventListener("click", (e) => {
      for (let ele of navLink) {
        if (e.target == ele) {
          e.target.classList.add("active");
          let categoryName = e.target.dataset.nameCategory;
          this.getData(categoryName);
        } else {
          ele.classList.remove("active");
        }
      }
    });
    this.getData(`mmorpg`);
    /* End Main */

    /* Start Details */

    /* End Details */
  }

  async getData(key) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0cfab4f073msh0b17ecd24298accp10dc81jsne6b081ebef51",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    
    this.loading.classList.replace("d-none", "d-flex");
    const myApi = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${key}`,
      options
    );
    const data = await myApi.json();
    
    let design = new Design();
    design.displayMain(data);

    let boxGame = document.querySelectorAll(".container-data .box-data");
    let detailsInfo = document.querySelector(".main-box-details");
    let mainData = document.querySelector(".container-data");
    let navBar = document.querySelector("nav");
    boxGame.forEach((current) =>
      current.addEventListener("click", (e) => {
        // console.log(div);
        if (e.currentTarget == current) {
          detailsInfo.classList.replace("d-none", "d-block");
        }
        mainData.classList.add("d-none");
        navBar.classList.replace("d-block", "d-none");
         new Details(current.dataset.id);
      })
    );

    this.loading.classList.replace("d-flex", "d-none");
  }
}
