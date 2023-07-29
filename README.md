# MADEJS 
SIMPLE FRAMEWORK WITH NODE

    import madejsfw from "madejsfw";
    var app = madejsfw();

    app.listen(5000,function () {
        console.log("app running with:", "http://localhost:" + 5000)})

    app.get("/test",function (req,res) {
        res.json(200,'{"hoan":"deptrai"}')
    })

**Installation**
This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a package.json first with the npm init command.

Installation is done using the npm install command:

    $ npm install madejsfw

Made by TranVuHoan