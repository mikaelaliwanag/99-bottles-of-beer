function beer() {
    let bottlesOfBeer = 99;
       
     while(bottlesOfBeer >= 1) {
        let bottles = "bottles";
        if (bottlesOfBeer === 1) {
            bottles = "bottle"
        }
       console.log(bottlesOfBeer + " " + bottles + " of beer on the wall, " + bottlesOfBeer + " " + bottles + " of beer. Take one down and pass it around, ");
       bottlesOfBeer--;
       console.log(bottlesOfBeer + " bottles of beer on the wall.");
    }
   
    console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
   
   }