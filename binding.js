var myObject = {
  name: "Ali",
  getName: function() {
    return console.log(this.name);
  }
};
myObject.getName();

var dataBinding = myObject.getName.bind({ name: "Saeed" });
dataBinding();
