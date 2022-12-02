let linkedInArray = ["https://www.linkedin.com/in/chaharnishant11/", "https://www.linkedin.com/in/priya-vajpeyi/"];

let likeCount = document.getElementById("like-count");
let commentCount = document.getElementById("comment-count");
let btn = document.getElementById("btn");

document.querySelector("form").addEventListener('keyup', function () {

    if (likeCount.value !== "" && commentCount.value !== "") {
        btn.style.visibility = "visible";
    }
    else {
        btn.style.visibility = "hidden";
    }
});

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    linkedInArray.filter((elm) => {
        let link = elm.concat("recent-activity/shares/");
        chrome.tabs.create({
            url: link
        });
    });
    let msg = {
        val1: likeCount.value,
        val2: commentCount.value,
    }
    chrome.runtime.sendMessage(msg);


});
