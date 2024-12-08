import { Design } from "./ui.module.js";
export class Details {
  constructor(id) {
    let closeBtn = document.getElementById("closeButton");
    let detailsInfo = document.querySelector(".main-box-details");
    let mainData = document.querySelector(".container-data");
    let navBar = document.querySelector(".navs");

    closeBtn.addEventListener("click", (e) => {
      detailsInfo.classList.replace("d-block", "d-none");
      mainData.classList.replace("d-none", "d-block");
      navBar.classList.replace("d-none", "d-block")
    });
    this.getDataDetails(id);
  }

  async getDataDetails(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "0cfab4f073msh0b17ecd24298accp10dc81jsne6b081ebef51",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const myApi = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const data = await myApi.json();

    let design = new Design();
    design.displayDetails(data);
  }
}
