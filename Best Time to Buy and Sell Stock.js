O: Integer to represent the total profit possible
I:array of prices for a stock where each index is a day and value is prices
C:at most one share, can buy and sell on same day, prices array not empty
E:0 profit possible

[7, 1, 5, 3, 6, 4]
[7, 3, 5, 6, 4, 1]
[7,6,4,3,1]


const maxProfit = (prices) => {
  //create an buy index marker
  //create a sell marker
  //create a total profit counter

  //iterator over prices
    //for each value, if next value minus value is pos,
    // while next value is greater than next value
      //keep checking
      //as soon as the next value is lower
      //set sell marker equal to next value minus 1,
    //update total profit by "selling"
    //set i and buy equal to next


  //return total profit
}


// const checkNextValues = (diff, init value, ) => {

// }


