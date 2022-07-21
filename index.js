//API key
let source = 'a9a3df2985644ea49f834727a0e9e416';

//getting newsFeed From html file
let newsFeed = document.getElementById("newsFeed");

//initializing http request(Ajax)
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=us&apiKey=${source}`, true);
xhr.onprogress = function () {
    console.log("Loading...");
}
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let htmlnews = "";
        articles.forEach(function (element, index) {
            let html = `<p>
                            <a class="btn" data-bs-toggle="collapse" href="#collapse${index}" role="button"      aria-expanded="false" aria-controls="collapseExample">
                                ${element["title"]}
                            </a>
                        </p>
                        <div class="collapse " id="collapse${index}">
                            <div class="card card-body d-inline-flex ">
                                ${element['content']}
                                <a href="${element['url']}" target="_blank" >Read more hear</a>
                            </div>
                        </div>`
            htmlnews += html;

        });
        newsFeed.innerHTML = htmlnews;
    }
    else {
        console.log("Error");
    }
}
xhr.send();

//setting date in the header
let setdate = new Date();
let date = document.getElementById("date");
date.innerHTML =  setdate.toDateString();