/**
 * Arrays the iterables in Javascript
 */

 /**
  * Array is a data structure that holds key value pairs and by default its values start from index 0. It return an iterable by making
  * use of which we can iterate over it.
  * Array is a reference type i.e it is a pointer to a memory location.
  * Basic implementation of arrays:
  */

  var array = [1,2,3,4,5];
  console.log(array);
  for(let index = 0 ; index < array.length ; index++)
  {
      console.log('Value is : ' + array[index] + '.....' + ' having index : ' + array.indexOf(array[index]));
  }

  var array1 = [];
  array1['x'] = 50;
  array1['y'] = 200;
  console.log(array1);

  var array2 = new Array(1,2,3,4,5);
  console.log(array2);

  var array3 = array2;
  array3[0] = 100;
  console.log(array2);
  console.log(array3);

  array3 = [];
  console.log(array2);
  console.log(array3);
  console.log(array3.length);

  array2.length = 0;
  console.log(array2);
  console.log(array2.length);

  /**
   * Push operator - It is used for pushing values to end of an array
   */
  var array4 = [1,2,3,4,5];
  array4.push(6);
  console.log(array4)
  array4.push(1,2,3,4,5);
  console.log(array4);

  /**
   * Pop operator - It is used for deleting values from the end of the array
   */
  var array5 = [1,2,3,4,5];
  array5.pop();
  console.log(array5)
  array5.pop();
  console.log(array5);

  /**
   * Unshift operator - It is used for pushing the values to the beginning of the arra
   */
  var array6 = [1,2,3,4,5];
  array6.unshift(6);
  console.log(array6)
  array6.unshift(7,8,9,10);
  console.log(array6);

  /**
   * Shift opeartor - It is used for deleting values from the beginning of the array
   */
  var array7 = [1,2,3,4,5];
  array7.shift();
  console.log(array7)
  array7.shift();
  console.log(array7);

  /**
   * Slice operator - It takes two arguments the starting index and the end index it excludes the end index and returns us the selecte items
   * It does not mutate the array
   */
  var array8 = [1,2,3,4,5,6,7,8,9,10];
  console.log(array8);
  var slicedArray = array8.slice(2,5);
  console.log(array8);
  console.log(slicedArray);

  /**
   * Splice operator - It takes three arguments i.e. teh starting index, number of elements to be removed/deleted and the elements to be added
   * It mutates the actual array
   */
  var array9 = [1,2,3,4,5,6,7,8,9,10];
  console.log(array9);
  var splicedArray = array9.splice(2,5);
  console.log(array9);
  console.log(splicedArray);

  var array10 = [1,2,3,4,5,6,7,8,9,10];
  console.log(array10);
  var splicedArray1 = array10.splice(2,0,11,12,13,14,15);
  console.log(array10);
  console.log(splicedArray1);

  var array11 = [1,2,3,4,5,6,7,8,9,10];
  console.log(array11);
  var splicedArray2 = array11.splice(2,5,11,12,13,14,15);
  console.log(array11);
  console.log(splicedArray2);

  /**
   * Map operator - Map operator takes a callback function which takes three arguments:
   * 1. current Element - mandatory
   * 2. current index - optional
   * 3. array - optional
   * It does not mutate the array, rather returns a new one based on the functionality given in the callback function to be executed
   * for each element of the array
   */

   var array12 = [1,2,3,4,5];
   console.log(array12);
   var mappedArray = array12.map(function(elem){
       return elem * 5;
   });
   console.log(array12);
   console.log(mappedArray);

   var array13 = [1,2,3,4,5,6,7,8,9,10,11];
   console.log(array13);
   var mappedArray1 = array13.map(parseInt);
   console.log(array13);
   console.log(mappedArray1);

   var array14 = [1,2,3,4,5];
   console.log(array14);
   var mappedArray2 = array14.map(function(elem){return parseInt(elem,10)});
   console.log(array14);
   console.log(mappedArray2);

   /**
    * Reduce operator - It takes a callback function which takes 4 arguments. It reduces teh array to a single value.
    * 1. accumulator - mandatory
    * 2. current element - mandatory
    * 3. current index - optional
    * 4. array - optional
    */
   var array15 = [1,2,3,4,5];
   console.log(array15);
   var reducedArray = array15.reduce(function(accumulator,elem){return accumulator * elem})
   console.log(reducedArray);
   var reducedArray2 = array15.reduce(function(accumulator,elem){return accumulator + elem});
   console.log(reducedArray2);
   var reducedArray3 = array15.reduce(function(accumulator,elem){return accumulator *10 + elem/500});
   console.log(reducedArray3);

   /**
    * Filter operator - This operator is used for filtering out values based upon the criteria.It's callback function takes 3 arguments:
    * 1. current element - mandatory,
    * 2. current index - optional,
    * 3. array - optional
    */

    var array16 = [1,1,2,2,3,4,5,6,7,8,10];
    console.log(array16);
    var filteredArray = array16.filter(function(element,currentIndex){
        if(currentIndex === array16.indexOf(element))
        {
            return element;
        }
    });
    console.log(array16);
    console.log(filteredArray);

    var array17 = [2,1,4,5,7,8,6,9];
    console.log(array17);
    console.log(array17.sort());

    /**
     * Sort Operator - Sort operator is used for sorting the elements of an array. It first converts the elements into string and do
     * the comparison. So in order to sort integer array propery we need to pass in our custom logic i.e. the callback function.
     * It mutates teh original array.
     */

    var array18 = [2,1,41,15,37,8,26,9];
    console.log(array18);
    var sortedArray = array18.sort(
        function (previous,current) {
            if(previous > current) 
            {
                return 1;
            }
            else if( current > previous)
            {
                return -1;
            }
            else{
                return 0;
            }
        });

    console.log(sortedArray);

    var array19 = ['Manish','manish','aditi','Aditi','Aditi','Manish'];
    array19.sort((current,previous) => { 
        if(current.toLocaleLowerCase() > previous.toLocaleLowerCase())
        {
            return 1;
        }
        else if(previous.toLocaleLowerCase() > current.toLocaleLowerCase())
        {
            return -1;
        }
        else{
            if(current > previous)
            {
                return 1;
            }
            else{
                return -1;
            }
        }
    });
    console.log(array19);
