chrome.runtime.onMessage.addListener((request) => {
    for (let i = 0; i < request.val1; i++) {
        window.scrollTo({
            top: 600 * i,
            behavior: 'smooth'
        });
        setTimeout(() => {
            let button = document.querySelectorAll("div.occludable-update span.feed-shared-social-action-bar__action-button > button.social-actions-button");
            button[i].click();
        }, 3000)

    }

    for (let i = 0; i < request.val2; i++) {
        setTimeout(() => {
            let comment = document.querySelectorAll("div.occludable-update span.comment > span > div > button.comment-button");
            comment[i].click();
            setTimeout(() => {
                let writecomment = document.querySelectorAll("div.comments-comment-box-comment__text-editor div.editor-content p");
                writecomment[i].innerText = "Appreciated";
                setTimeout(() => {
                    let clickbtn = document.querySelector("div.comments-comment-box__form-container div > button.comments-comment-box__submit-button");
                    clickbtn.click();
                }, 2000);
            }, 2000);
        }, 5000);
    }


});
