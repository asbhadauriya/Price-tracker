import Stock from "../models/shareModels.js";

// import Stock
const initialStockData = [
    { symbol: 'AAPL', price: 150.25 },
    { symbol: 'GOOGL', price: 2800.45 },
    
    { symbol: 'MSFT', price: 2805 },
    
    { symbol: 'AMZN', price: 280.40 },
    
    { symbol: 'TSLA', price: 80.45 },
    
    { symbol: 'NVDA', price: 8005 },
  ];
  export default{
  
  async  populateInitialData() {
    try {
      await Stock.insertMany(initialStockData);
      console.log('Initial stock data populated');
    } catch (error) {
      console.error('Error populating initial stock data:', error);
    }
  },

  async fetchPriceOfStock(req,res){
    try{
        const symbol = req.params.symbol;
        const stock = await Stock.findOne({symbol:symbol});
        if (stock) {
         return res.json({ symbol: stock.symbol, price: stock.price });
        } else {
         return res.status(404).json({ message: 'Stock not found' });
        }
    }
    catch(err){
      return res.json(err)
    }
  },
  async fetchAllStock(req,res){
    try{
      const stocks= await Stock.find();
      if(stocks.length){
        return res.json(stocks)
      }

    }
    catch(err){
      return res.json(err)
    }
  }
}
const updateStockPrices = async () => {
  try {
    const stocks = await Stock.find();
    stocks.forEach(async stock => {
      const randomChange = (Math.random() * 10 - 5).toFixed(2);
      const newPrice = Math.max(0, (+stock.price + +randomChange).toFixed(2));
      stock.price=newPrice
      await stock.save();
    });
  } catch (error) {
    console.error('Error updating stock prices:', error);
  }
};

setInterval(updateStockPrices, 1000);

  
  // Populate initial data only if the collection is empty