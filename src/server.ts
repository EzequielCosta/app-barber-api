import express, {Express, Request,Response} from "express";

const app: Express = express();

app.get("/", (request: Request, response: Response) => {
    response.json({
        "message" : "Hello World"
    })
})

app.listen(333, () => {
    console.log("Aceito")
})