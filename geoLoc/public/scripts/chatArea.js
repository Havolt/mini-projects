
vm.chatOn = true;

Vue.component('chat-area', {
    data: function () {
      return {
        count: 0,
        roomName: ''
      }
    },
    template: `
        <h1>Welcome to the ${vm.roomName} Room</h1>
    `
  })