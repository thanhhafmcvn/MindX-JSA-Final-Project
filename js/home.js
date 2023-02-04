const user_greeting = document.querySelector('#user_greeting');
user_greeting.innerHTML = `Xin chào, ${localStorage.getItem('currentLogin')}`;


