import { Handler } from 'express';


export const getData: Handler = (req, res) => {
    res.send("test kontrolera")
}