(function () {
   let username;
   const socket = io();

   document
      .getElementById("form-message")
      .addEventListener('submit', (event) => {
         event.preventDefault();
         const input = document.getElementById("input-message");
         const newMessage = {
            username,
            body: input.value,
         }
         socket.emit('new-message', newMessage);
         input.value = '';
         input.focus();
      })

   socket.on('update-conversation', (conversation) => {
      console.log('converation', conversation);
      const logMessages = document.getElementById(`log-messages`);
      logMessages.innerText = '';
      conversation.forEach((message) => {
         const p = document.createElement('p');
         p.innerText = `${message.username}: ${message.body}`
         logMessages.appendChild(p);
      })
   });






   Swal.fire({
      title: 'Identificate por favor 👮‍♂️',
      input: 'text',
      allowOutsideClick: false,
      inputValidator: (value) => {
         if (!value) {
            return 'Necesitamos que ingreses su username para continuar.'
         }
      }
   })
      .then((result) => {
         username = result.value.trim();
         console.log('username: ', username)
      })
      .catch(() => {
         console.error(`Ha ocurrido un error al capturar el nombre 😨`, error.message);
      })


})();