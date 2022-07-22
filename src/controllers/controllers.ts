import { Handler } from 'express';
import { db , DBmodel } from '../db'
import { Base, parseKey } from 'simplest.db/lib/typings/base';


//zwraca wszystkie dane z db.json
export const getAllData: Handler = (req, res) => {
    res.send(db.data)
}

export const getFirstData: Handler = (req, res) => {
    res.send(db.get(req.params.color))
    //res.send(db.values)
}

//zwraca dane z rekordu o id = ( wskazane - 1)
export const getSecondData: Handler = (req, res) => {
    res.send(db.get("2"))
}