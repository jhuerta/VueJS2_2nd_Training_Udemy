var vueArguments = {
    el: '#app',
    data: {
        counter: 0,
        resetAmount: 0,
        age: 40
    },
    computed: {
        outputMessage() {
            console.log('computed property called');
            return this.counter > 10 ? "more than 10" : "less than 10";
        }
    },
    watch: {
        counter(newValue) {
            var vueInstance = this;
            setTimeout(function () {
                vueInstance.counter = 0;
                console.log('Watch: In Method');
            }, 2000);
            console.log('Watch: Outside Method');
        }
    },
    methods: {
        multiplyAge() {
            this.age = this.age * 10;
        },
        increase(amount) {
            this.counter = this.counter + amount;
        },
        decrease(amount) {
            this.counter = this.counter - amount;
        },
        reset(amount) {
            this.counter = amount;
        },
        message() {
            console.log('data property called');
            return this.counter > 10 ? "more than 10" : "less than 10";
        }

    }
}
new Vue(vueArguments);