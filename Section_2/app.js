var vueArguments = {
  el: "#app",
  data: {
    title: "Hello VueJS!",
    compundText: "Hello VueJS!",
    googleLink: "http://www.google.com",
    finishedLink: "<a href='http://www.google.com'>The Link</a>"
  },
  methods: {
    timeOfNow: function () {
      var now = new Date();
      return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    },
    getText: function () {
      return "Some Text";
    },
    complexObject: function () {
      var myArray = ['1', '2'];
      return [myArray[0], "This is a coplex object", "array of some values"];
    },
    changeTitle: function (event) {
      this.compundText =
        this.title + this.getText() + ":  " + event.target.value;

      this.title = this.timeOfNow();
    }
  }
};
new Vue(vueArguments);