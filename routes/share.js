import express from "express";
import stock from "../controllers/stock.js";
import bodyParser from 'body-parser';


const Router=express.Router();
Router.use(bodyParser.urlencoded({
    extended: true
  }));

Router.post('/add',stock.populateInitialData);
Router.get('/stock/:symbol',stock.fetchPriceOfStock);
Router.get('/stocks/all',stock.fetchAllStock);

export default Router;