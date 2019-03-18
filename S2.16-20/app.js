var vueArguments = {
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0,
        increment: 0
    },
    methods: {
        increase: function (incr, evt) {
            console.log(evt);
            this.counter = this.counter + parseInt(incr);
        },
        updateCoordinates: function (evt) {
            this.x = evt.clientX;
            this.y = evt.clientY;
        },
        doNothing: function (event) {
            console.log('do nothing');
            event.stopPropagation();
        },
        showKey: function (event) {
            console.log(event.key);
        },
        alertSpaceOrIntro: function () {
            alert('intro or space');
        }
    }
}
new Vue(vueArguments);