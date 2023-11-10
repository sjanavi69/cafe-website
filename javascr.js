document.addEventListener("DOMContentLoaded", function() {
    // Display a welcome message with the current time
    const greeting = document.querySelector('#home');

    const currentTime = new Date();
    const hours = currentTime.getHours();
    let greetingMessage = '';

    if (hours < 12) {
        greetingMessage = 'Good morning!';
    } else if (hours < 18) {
        greetingMessage = 'Good afternoon!';
    } else {
        greetingMessage = 'Good evening!';
    }

    greeting.innerHTML += `<h4>${greetingMessage}</h4><h5>Welcome to Smart Cafe!</h5><br><br><br><br><br><br>
    <pre>   life starts after
                drinking coffee
           which will make you feel happy and energised.
        </pre><br><br><br><br><br><br><br><h6>opening timings:9.am to 7pm</h6><br><br><br><br><br>`;
    
     // Simulated asynchronous loading of menu items
     const menuItems = document.querySelector('#menu');
     const createMenuItem = (item) => {
         const menuItem = document.createElement('div');
         menuItem.classList.add('menu-item');
         menuItem.innerHTML = `
             <h3>${item.name}</h3>
             <img src="${item.image}" alt="${item.name}">
             <p>${item.description} Price: ${item.price}</p>
         `;
         return menuItem;
     };
 
});
document.getElementById("conform").addEventListener("click",function(){
       var text=document.getElementById("contactform").innerHTML=`<h3>Thank you for messaging us! 
                        we will reach you soon.</h3>`;
});