// //get result element
// const resultUl = document.querySelector('#result');
// //get input filter element
// const input = document.querySelector('input');
// //define an array variable
// const listItems = [];

// //add an event listener to filter element
// filter.addEventListener('input', function(e){
//     // filterData(e.???.???);    
//     filterData(e.target.value);
// });



// getData();

// async function getData() {
//     const res = await fetch('https://randomuser.me/api?results=50')
//     const { results } = await res.json();

//     // Clear result

//     resultUl.innerHTML = '';
//     //iterate every result and display inside of UL
//     // <img src=?? 
//     // <div class="user-info"
//         //h4 --- name
//         //p -- any info you wanna put
//     // </div

//     // for(let r of results){
//     //     const list = document.createElement('li');
//     //     list.innerHTML = `<img src='${r.picture.large}'>
//     //     <div class='user-info'>
//     //     <h4>${r.name.first} ${r.name.last}</h4>
//     //     <p>${r.location.city}</p>
//     //     <p>${r.email}</p>
//     //     </div>
//     //     `;
//     //     result.appendChild(list);
//     //     listItems.push(list);
//     // }

//     results.forEach((user)=>{
//         const li = document.createElement('li');
//         listItems.push(li);

//         const image = document.createElement('img');
//         image.src = `${user.picture.thumbnail}`;
//         li.appendChild(image)

//         const container = document.createElement('div');
//         li.appendChild(container);
//         container.classList.add('user-info');

//         const userName = document.createElement('h4');
//         userName.innerText = `${user.name.first} ${user.name.last}`;
//         container.appendChild(userName);

//         const location = document.createElement('p');
//         location.innerText = `${user.location.city}, ${user.location.country}`;
//         container.appendChild(location);

//         resultUl.appendChild(li);


//     })

// }

// function filterData(searchTerm) {
//     listItems.forEach(item => {
//         /* add conditional logic below */
//         // if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
//         //     //remove the class of .hide
//         //     item.classList.remove('hide');
//         // } else {
//         //     //add the class of .hide
//         //     item.classList.add('hide');
//         // }

//         // console.log(item)

//         if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
//             item.classList.remove('hide')
//         } else {
//             item.classList.add('hide')
//         }
//     })
// }

//get result element
const result = document.querySelector("#result"); 
//get input filter element
const filter = document.querySelector("#filter"); 
//define an array variable
const listItems = [];

//add an event listener to filter element
filter.addEventListener('input', function(e){
    filterData(e.target.value.toLowerCase());
})

filter.addEventListener('submit', function(e){
    e.preventDefault();
})

getData();

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')
    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    //iterate every result and display inside of UL
    // <img src=?? 
    // <div class="user-info"
        //h4 --- name
        //p -- any info you wanna put
    // </div

    for (const r of results) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
                
        result.appendChild(li);
        li.appendChild(img);
        li.appendChild(div);
        div.appendChild(h4);
        div.appendChild(p);
        
        div.id = 'user-info';
        img.src = `${r.picture.thumbnail}`; 
        h4.innerText = `${r.name.first} ${r.name.last}`;
        p.innerText = `${r.location.city}`;

        listItems.push(li);
    }
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        const search = item.innerText.toLowerCase();

        /* add conditional logic below */
        if(search.includes(searchTerm)) {
            //remove the class of .hide
            item.classList.remove('hide');
        } else {
            //add the class of .hide
            item.classList.add('hide');
        }
    })
}
