import http from "http"
export default ()=> {
    var router = {GET: {}, POST: {}};
    var app = http.createServer(function (req, res) {
        res["send"] = function send(code, body) {
            res.writeHead(code, {'Content-Type': 'text/html'});
            res.end(body);
        }
        res["json"] = function json(code, body) {
            try {
                res.writeHead(code, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(body));
            } catch (e) {
                res.send(code, body)
            }
        }
        if (router[req.method][req.url] != undefined) {
            router[req.method][req.url](req, res);
        } else {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.end('not found');

        }
    });

    app['get'] = (path, callback) => {
        router["GET"][path] = callback;
    }
    app['post'] = (path, callback) => {
        router["POST"][path] = callback;
    }
    app['put'] = (path, callback) => {
        router["PUT"][path] = callback;
    }
    app['head'] = (path, callback)=> {
        router["HEAD"][path] = callback;
    }
    app['delete'] = (path, callback) => {
        router["DELETE"][path] = callback;
    }
    app['404'] = (callback) => {
        callback();
    }
    return app;
}
