

// function waitForThreeSecond(){
//   var ms=3000+new Date().getTime();
//   while(new Date()<ms){

//   }   
// }
function register(){
    return new Promise((resolve,reject)=>{
             setTimeout(()=>{
        console.log('Register end')
        resolve();
    },1000);
    });
   
}
function sendWelcomeEmail(){
        // waitForThreeSecond();/
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
        console.log('Email end');
    },1000);
        resolve();
        })
    

}
function login(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
        console.log('Login end')

    },1000);
    resolve();
    })
   
}
function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('Display data end')
        
    },1000);
    resolve();
    })
 }


function displayUserData(){
    return new Promise((resolve,reject)=>{
             setTimeout(()=>{
          console.log('Displayed');
    },1000);
    resolve()
    })
    
  
}
// Call back hell
// register(()=>{
// sendWelcomeEmail(()=>{
//     login(()=>{
//             getUserData(()=>{
//                     displayUserData()
//             })
            
//     })

// })

// })
// register().then(sendWelcomeEmail).then(login).then(getUserData).then(displayUserData)

// console.log("Other application work");


authenticate=async()=>{
    await register();
    await sendWelcomeEmail();
    await login();
    await getUserData();
    await displayUserData();
}
authenticate().then(()=>{
    console.log("Sexy");
})