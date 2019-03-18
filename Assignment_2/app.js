var vueArguments = {
    el: '#app',
    data: {
        TempValue: '',
        Value: '',
    },
    methods: {
        ShowAlert: function () {
            console.log('aaa');
            alert('button clicked');
        },
        StoreValue: function (evt) {
            this.TempValue = evt.target.value;
        },
        DisplayValue: function (evt) {
            this.Value = this.TempValue;
            this.TempValue = '';
        },
    }
}
new Vue(vueArguments);