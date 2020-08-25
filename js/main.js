Vue.use(VeeValidate)

var messages = new Vue({

    el: '#message',

    data: function(){

        return {

            email: '',

            message: '',

            name: '',

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

var medium_posts = new Vue({

    el: '#posts',

    mounted: function(){

        var _this = this

        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alex.orrantia')

        .then( function( data ){

            // _this.posts = data.data.items

              _this.posts = data.data.items.slice(0,9)

            _this.feed = data.data.feed

        })

    },

    data: function(){

        return {

            posts: [],

            feed: {}

        }

    }

})
