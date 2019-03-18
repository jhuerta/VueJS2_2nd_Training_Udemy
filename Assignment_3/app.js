var vueArguments = {
    el: '#app',
    data: {
        currentValue: 0,
        message: '',
        reset: false
    },
    computed: {
        outputMessage: function () {
            if (this.reset) {
                return '';
            }
            return this.currentValue % 5 == 0 ? 'It IS' : 'IT IS NOT';
        }

    },
    watch: {
        currentValue() {
            var vueInstance = this;

            setTimeout(function () {
                vueInstance.reset = true;
            }, 2000);


        }
    },
    methods: {
        addValue(val) {
            this.currentValue = this.currentValue + val;
            this.reset = false;
        }
    }
}
new Vue(vueArguments);