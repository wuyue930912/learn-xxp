new Vue({
    el:"#vue-app",
    data:{
        name:"hello vue",
        job:"java builder",
        website:'http://www.baidu.com',
        websiteTag:"<a href = 'http://www.baidu.com'>new step</a>"
    },
    methods:{
        greet : function(str){
            return 'hello world! ' + str + '!' + this.name;
        }
    }

});

new Vue({
    el:"#vue-app-two",
    data:{
        name:"",
        age:"",
        x:0,
        y:0
    },
    methods:{
        add : function (inc) {
            this.age += inc;
        },
        subtract : function (dec) {
            this.age -= dec;
        },
        updateXY : function (event) {
            //console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        alert : function () {
            alert('hello world');
        },
        logName : function () {
            console.log("inserting name");
            this.name = this.$refs.name.value;
        },
        logAge : function () {
            console.log("inserting age");
            this.name = this.$refs.name.age;
        }
    }
});

new Vue({
    el:"#vue-app-three",
    data:{
        name:"",
        age:""
    },
    methods:{
        logName : function () {
            console.log("inserting name");
            this.name = this.$refs.name.value;
        },
        logAge : function () {
            console.log("inserting age");
            this.age = this.$refs.age.value;
        }
    }
});

new Vue({
    el:"#vue-app-four",
    data:{
        name:"",
        age:""
    },
    methods:{

    }
})