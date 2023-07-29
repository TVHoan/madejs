import  {get, post, router} from "./core/AppRoute.js";
export default ()=>{
    get("/new",(req,res)=> {
        res.json(200,'{"mess":"hoandeptrai"}');
    })
    get("/hoan", (req, res) => {
        res.json(200, '{"hoan":"hoandeptrai"}');
        // console.log(res)
    })
}