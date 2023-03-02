import axios from "axios";
const AAPL = 'https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=TLJympvtNXZAuaZsBW_JiIgx_5ocsPtU';

function getAPPL(){
axios.get(AAPL).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
};

getAPPL();

const TSLA = 'https://api.polygon.io/v2/aggs/ticker/TSLA/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=TLJympvtNXZAuaZsBW_JiIgx_5ocsPtU';

function getTSLA(){
axios.get(TSLA).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
};

getTSLA();

const AMZN = 'https://api.polygon.io/v2/aggs/ticker/AMZN/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=TLJympvtNXZAuaZsBW_JiIgx_5ocsPtU';

function getAMZN(){
axios.get(AMZN).then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
};

getAMZN();