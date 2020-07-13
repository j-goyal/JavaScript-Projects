console.log("This is News Project");

let source = 'the-times-of-india';
let api = 'd435bef54db74ec3b7f15ea9f5575cf6';


let url = `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api}`;

newsAccordian = document.getElementById('newsAccordian');

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onload = function(){
    if(this.status ==200)
    {
        let json = JSON.parse(this.responseText);
        //console.log(json);
        let articles = json['articles'];
        // console.log(articles);

        let newsHtml = "";
        articles.forEach((element,index) => {
               let html = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                        <b style="text-decoration:underline;color:grey"><em>Breaking News ${index+1}</em></b> : ${element['title']}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordian">
                                <div class="card-body">
                                    ${element['description']}. <a href='${element['url']}' target="_blank">Read more here</a>
                                </div>
                            </div>
                        </div>`
                newsHtml += html;
        });
        
     
        newsAccordian.innerHTML = newsHtml;
    }

    else{
        console.log("some error occured");
    }
}

xhr.send();




