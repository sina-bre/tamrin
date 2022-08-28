// const xhr = new XMLHttpRequest();
// xhr.open('GET' , `https://reqres.in/api/users?page=2`)
// xhr.send()

// request.onload = function(){
//     console.log(this.responseText);
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }

const container = document.querySelector('.container')

const request = function(url){
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET' , url)
        xhr.send()
        xhr.onload = () => {
            resolve(xhr.responseText)
        }
    })
}

const renderUrl = function(datas){
    const html = `
    <div class="section">
        <div class="left">
            <div class="img">
                <img src="${datas.data[0].avatar}" alt="">
            </div>
            <div class="texts">
                <div class="topic">${datas.data[0].first_name} ${datas.data[0].last_name}</div>
                <div class="email">${datas.data[0].email}</div>
            </div>
        </div>

        <button>&raquo</button>
    </div>

    <div class="section">
        <div class="left">
            <div class="img">
                <img src="${datas.data[1].avatar}" alt="">
            </div>
            <div class="texts">
                <div class="topic">${datas.data[1].first_name} ${datas.data[1].last_name}</div>
                <div class="email">${datas.data[1].email}</div>
            </div>
        </div>

        <button>&raquo</button>
    </div>

    <div class="section">
        <div class="left">
            <div class="img">
                <img src="${datas.data[2].avatar}" alt="">
            </div>
            <div class="texts">
                <div class="topic">${datas.data[2].first_name} ${datas.data[2].last_name}</div>
                <div class="email">${datas.data[2].email}</div>
            </div>
        </div>

        <button>&raquo</button>
    </div>

    <div class="section">
        <div class="left">
            <div class="img">
                <img src="${datas.data[3].avatar}" alt="">
            </div>
            <div class="texts">
                <div class="topic">${datas.data[3].first_name} ${datas.data[3].last_name}</div>
                <div class="email">${datas.data[3].email}</div>
            </div>
        </div>

        <button>&raquo</button>
    </div>

    <div class="section">
        <div class="left">
            <div class="img">
                <img src="${datas.data[4].avatar}" alt="">
            </div>
            <div class="texts">
                <div class="topic">${datas.data[4].first_name} ${datas.data[4].last_name}</div>
                <div class="email">${datas.data[4].email}</div>
            </div>
        </div>

        <button>&raquo</button>
    </div>`
container.insertAdjacentHTML('beforeend', html);
container.style.opacity = 1;
}

request(`https://reqres.in/api/users?page=2`)
.then((response1) => {
    console.log(response1);
    return response1;
}).then((response2) => {
    const data = JSON.parse(response2)
    console.log(data);
    renderUrl(data);
}).catch(err => console.log(err))