// display data in my website with Class contain funcation display data() && display ditails
export class Design {
  constructor() {}

  displayMain(key) {
    let myStr = ``;
    let row = document.querySelector(".container-data .row");
    for (let i = 0; i < key.length; i++) {

        // i nedd to fetch id from myBox
      myStr += `
        <div class="parent-box col-xxl-3 col-xl-4 col-md-6 col-sm-12">
                        <div class="box-data p-3 border border-2 border-dark" data-id = ${key[i].id}>
                            <div class="image-box">
                                <img class="w-100 d-block" src=${
                                  key[i].thumbnail
                                } alt="">
                            </div>
                            <div class="head-box d-flex align-items-baseline justify-content-between pt-3">
                                <h3>${key[i].title}</h3>
                                <p class="bg-primary p-1 rounded-2 fw-bolder">Free</p>
                            </div>
                            <div class="main-description text-center">
                                <p class="text-white text-opacity-50">${key[
                                  i
                                ].short_description.slice(0, 80)}</p>
                            </div>
                            <div class="footer-box d-flex justify-content-between align-items-baseline">
                                <p class=" p-1 rounded-2">${key[i].genre}</p>
                                <p class=" p-1 rounded-2">${key[i].platform}</p>
                            </div>
                        </div>
                    </div>`;
    }
    row.innerHTML = myStr;
  }

  displayDetails(data) {
    let myStr = ``;
    let rowContainer = document.querySelector(".main-box-details .row");
    myStr = `
                <div class="col-6">
                    <div class="data-info">
                        <div class="data-img">
                            <img class="w-100 d-block" src=${data.thumbnail} alt="thumbnail">
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="data-text">
                        <ul class="list-unstyled">
                            <li class="d-flex gap-2 align-items-baseline">
                                <h3 class="fw-bold">Title : </h3>
                                <h3 class="fw-bold">${data.title}</h3>
                            </li>
                            <li class="d-flex gap-2 align-items-baseline">
                                <p class="fw-bold">Category : </p>
                                <span class="d-inline-block bg-primary py-1 px-2 rounded-2 text-black ">${data.genre}</span>
                            </li>
                            <li class="d-flex gap-2 align-items-baseline">
                                <p class="fw-bold">Platform : </p>
                                <span class="d-inline-block bg-primary py-1 px-2 rounded-2 text-black ">${data.platform}</span>
                            </li>
                            <li class="d-flex gap-2 align-items-baseline">
                                <p class="fw-bold">Status : </p>
                                <span class="d-inline-block bg-primary py-1 px-2 rounded-2 text-black ">${data.status}</span>
                            </li>
                        </ul>
                        <div class="big-data">
                            <p>${data.description.slice(0,1200)}</p>
                        </div>
                        <button class="btn border border-1 border-warningfw-bold"><a href="${data.freetogame_profile_url}" target="_blank" class="text-decoration-none text-white">Show Game</a></button>
                    </div>
                </div>`;

                
    rowContainer.innerHTML = myStr;
  }
}
