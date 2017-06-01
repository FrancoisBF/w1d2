var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSales(salesData, salesTax) {
  var salesTotal = {};
  for (var province in salesTax) {
    var taxRate = salesTax[province];
  }
  for(var i = 0; i < salesData.length; i++){

    // var tax =  salesTax[i].sales.reduce(function(prev, curr) {
    //     return prev + curr
    //   }, 0);




    var total = salesData[i].sales.reduce(function(prev, curr) {
      return prev + curr
    }, 0);

    var province = salesData[i].province;

    // if the salesTax has the province, then multiply by total
    if (salesTax[province]){
      var taxRate = salesTax[province];

      var taxes = taxRate * total
      // console.log(taxes)
    }

    var company = salesData[i].name
      if (salesTotal[company]){
        salesTotal[company].totalSales += total;
        salesTotal[company].totalTaxes += taxes;


      } else {
        salesTotal[company] = {
          totalSales: total,
          totalTaxes: taxes
        };
      }
    //salesTotal.push(company);
  }
  return salesTotal;
}
console.log(calculateSales(companySalesData, salesTaxRates));


// var k = 'three';
// var o = {}

// o.one = 'v1';
// o['two'] = 'v2';

// o.k = 'v3';
// o[k] = 'v3';

// {
//   one: 'v1',
//   two: 'v2',
//   k: 'v3',
//   three: 'v3'
// }




// var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/