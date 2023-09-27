const username = document.querySelector(".name")
const userImage = document.querySelector(".user-image")
const active = document.querySelector(".active")
const postimage = document.querySelector(".post-image")
const postdescription = document.querySelector(".post-description")
const numberoflikes = document.querySelector(".number-of-likes")
const numberofcomments = document.querySelector(".number-of-comments")
const container = document.querySelector(".overflow-container")


// fetching the data from my local data source
fetch("data.json")
  .then((data) => {
    return data.json();
  })
  .then((finaldata) => {
     let data = ""
      finaldata.forEach(element => {
          data += `
          <div class="friends-post">
                <div class="user-about flex">
                  <div class="user-active">
                    <img src=${element.image} alt="">
                    <div>
                      <h3>${element.name}</h3>
                      <p>${element.activeTime}.</p>
                    </div>
                  </div>
                  <span class="material-symbols-outlined"> more_horiz </span>
                </div>
                <div class="user-post">
                  <p>${element.postDescription}</p>
                  <img src=${element.postImage} alt="">
                </div>
                <div class="likes-comment">
                  <div class="flex items-center">
                    <div class="likes">
                      <span class="material-symbols-outlined"> favorite </span>
                      <span class="material-symbols-outlined"> thumb_up</span>
                    </div>
                    <span class="others">You & <span>${element.likes}</span> others</span>
                  </div>
                  <div>
                    <p><span style="margin-right: 5px">${element.comments}</span>Comment</p>
                  </div>
                </div>
                <div class="comment-icons">
                  <div class="flex items-center">
                    <span class="material-symbols-outlined"> thumb_up</span>
                    <p>Like</p>
                  </div>
                  <div class="flex items-center">
                    <span class="material-symbols-outlined"> chat_bubble</span>
                    <p>Comment</p>
                  </div>
                  <div class="flex items-center">
                    <span class="material-symbols-outlined"> share</span>
                    <p>Share</p>
                  </div>
                </div>
              </div>
        `;
      });

      container.innerHTML = data
  })
  .catch(err => {
    console.log(err);
  });