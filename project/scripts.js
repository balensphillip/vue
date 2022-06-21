Vue.createApp({
    
    data(){
        return {
            name:"balens",
            cohort:"10",
            email:"balens@gmail.com"
        }
    },

    methods: {
        greetMe:function(){
            alert("Hello World")
        }
    }

}).mount("#app")

