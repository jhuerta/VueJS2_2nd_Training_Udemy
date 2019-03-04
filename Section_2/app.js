var vueArguments = {
    el: '#app',
    data: {
        title: 'Hello VueJS!',
        compundText: 'Hello VueJS!',
        googleLink: 'http://www.google.com'
    },
    methods: {
        timeOfNow: function () {
            var now = new Date();
            return now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        },
        getText: function () {
            return "Some Text";
        },
        changeTitle: function (event) {
            this.compundText = this.title + this.getText() + ":  " + event.target.value;
        }
    }
}
new Vue(vueArguments);