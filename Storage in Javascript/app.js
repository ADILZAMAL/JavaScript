const stroeBtn = document.getElementById('store-btn');
const rtrvBtn = document.getElementById('retrieve-btn');
const userId = 'adil786';

// stroeBtn.addEventListener('click',() => {
//     localStorage.setItem('uId',userId);
// })

// rtrvBtn.addEventListener('click',() => {
//     console.log(localStorage.getItem('uId'));
// })


// Session storage keeps data as long as session last. Upon closing tab and after reopening you will not find data

// stroeBtn.addEventListener('click',() =>{
//     sessionStorage.setItem('uId',userId);    
// })
// rtrvBtn.addEventListener('click',() =>{
//    console.log(sessionStorage.getItem('uId'));     
// })


//   Cookie storage

const data = {
    firstName: 'Adil',
    lastName : 'Zamal',
    age:22,
    mob:8825367148

}

stroeBtn.addEventListener('click',() =>{
    document.cookie = `user=${JSON.stringify(data)}`    
})
rtrvBtn.addEventListener('click',() =>{
    const userData =json.parse(document.cookie) ;

   console.log(typeof userData);     
})
