// init weather object
const weather = new Weather('GB', 'LONDON');

//init ui
const ui = new UI();

//loaded get weather directly to the DOM
document.addEventListener('DOMContentLoaded', getWeather)

//get weather
function getWeather() {
    weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}





// const searchUser = document.getElementById('searchUser');

// searchUser.addEventListener('keyup', (e) => {
//  const userText =  e.target.value;

//  if(userText !== '') {
//      console.log(userText);
//  }
// });



//Async await stressfull method
 
// const newTodos = async () => {
//     const response = await fetch('post.json');
//     const data = await response.json();
//     return data;
// };

// newTodos()
//     .then(data => ('resolved:',data));


//FETCH API
// document.getElementById('button1').addEventListener('click', getPost);
// document.getElementById('button2').addEventListener('click', getAPI);

// function getAPI(){
//     fetch('post.json')
//         .then(function(res){
//             return res.json();
//         })
//         .then(function(data){
//             let output = "";
//             data.forEach(function(post){
//                 output =+ `
//                 <li>${post.title}</li>
//                 <li>${post.body}</li>
//                 `
//             })
//         }) 
        
    
// }




//BUTTON 1
// function getPost() {
//     fetch('post.json')
//         .then(function(res) {
//             return res.json();
//         })
//         .then(function(data) {
//             let output = "";

//             data.forEach(function(post) {
//             output += `
//             <li>${post.title}</li>
//             <li>${post.body}</li>
//             <br><br>
//             `  
//           });
//           document.getElementById('output').innerHTML = output;  
//         })
// }
 
 
 
 
 //PROMISE
//   function createPost() {
//       return new Promise(function (resolve, reject){
//         setTimeout(() => {
//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                reject('Error: something went wrong'); 
//             }
           
//             console.log('This is create post');
//         }, 3000);
//       }) 
//     }
    
//     function getPosts(){
//         const num1 = 100;
//         const num2 = 50;
        
//          console.log(num1 + num2);
//          console.log('This is a getPost');
//     }
   
//     createPost()
//     .then(getPosts)
//     .catch(function(err){
//         console.log(err);
//     });


//  function createPost() {
//     return new Promise(function (resolve, reject) {
//        setTimeout(() => {
//            console.log('This is create post');

//            const error = false;
//            if (!error) {
//                resolve();   
//            } else {
//               reject('Error: something went wrong'); 
//            }
         
//        }, 3000);
//     });
// }

// function getPosts(){
//    console.log('This is get post')
// }

// createPost()
// .then(getPosts)
// .catch(function(err){
//    console.log(err);
// });



//CALL BACK FUNCTIONS
// function createPost(callback) {
//     setTimeout(() => {
//         console.log('This is create post');
//         callback();
//     }, 10000);
  
// }

// function getPosts(){
//     console.log('This is get post')
// }

// createPost(getPosts);

