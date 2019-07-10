Vue.use(VeeValidate)

new Vue({

    el: '#message',

    data: function(){

        return {

            email: 'joe@place.com',

            message: 'Replace this with your message',

            name: 'Joe Messager',

            sending: false,

            sent: false

        }

    },

    methods:{
         
        send: function(){

            var _this = this

            if(!this.errors.any()){

                this.sending = true

                Email.send({

                    SecureToken : "",
                    To : '',
                    From : this.email,
                    Subject : this.name + " from alexorrantia.com" ,
                    Body : this.message
                    
                }).then(

                  function( data ){

                    _this.sent = true
                    _this.sending = false

                  }
                  
                );

            }

        }

    }

})