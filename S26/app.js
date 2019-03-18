var vueArguments = {
    el: '#app',
    data: {
        title: 'Hello VueJS!',
        attachRed: false,
        attachGreen: false,
        attachYellow: false,
        color: 'yellow',
        divColor: 'pink',
        otherColor: 'yellow',
        otherColorNotActivated: {
            'green': true
        },
        divColor: 'black',
        divWidth: 50
    },
    computed: {
        divClasses: function () {
            return {
                red: this.attachRed,
                green: this.attachGreen,
                yellow: this.attachYellow
            }
        },
        divStyle: function () {
            return {
                "background-color": this.divColor,
                width: this.divWidth + 'px'
            }
        }
    },
    watch: {

    },
    methods: {
        getText: function () {
            return "Some Text";
        },
        changeTitle: function (event) {
            this.title = this.getText() + ":  " + event.target.value;
        },
        startColorChange: function () {
            function checkTime(i) {
                if (i < 10) {
                    i = "0" + i
                };
                return i;
            }

            console.log('vueInstance.divColor ----------------------------------');
            setInterval(() => {
                var today = new Date();
                var h = today.getHours()
                if (h > 12) {
                    h = h - "12"
                };
                var m = today.getMilliseconds();
                var s = today.getSeconds();
                m = checkTime(m);
                s = checkTime(s);
                var r = parseInt((s + m));
                var g = parseInt((m - s));
                var b = parseInt(s + m);
                this.divColor = 'rgb(' + r + ',' + g + ',' + b + ')';
            }, 33);
        }
    }
}
new Vue(vueArguments);