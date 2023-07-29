import madejs  from "./madejs.js";
var App = madejs()
App.listen(5000,function () {
    console.log("app running with:", "http://localhost:" + 5000)})
App.get("/test",function (req,res) {
    res.json(200,'{"hoan":"deptrai"}')
})
