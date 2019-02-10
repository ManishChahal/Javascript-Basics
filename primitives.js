/**
 * Basics of Javascript
 */

 /**
  * Javascript has two data types
  */

  /**
   * Primitives - Primitives are the actual holder of the value, they do not point to any memory location. If I assign one
   * variable holding primitive value to another variable than the change in one variable won't effect the other. Foolowing 
   * are the primitive types that exist in javascript:
   */

   /** Number - Here we have defined a two variables number1 & number2. On assigning number1 to number2 we are actually assigning
    * the value contained inside of number1 to number2. When we change the value of number2 to 50 it does not have any impact
    * on number1
    * In order to verify the type of the variable we can use typeOf opeartor
    * If we want to check whether the variable type is number or not we can use isNan method and pass to it the variable. If the
    * variable is not a number than it will give us true else false.
     */
   var number1 = 10;
   console.log('Number 1 : ' + number1 + ' : type of : ' + typeof number1);
   var number2;
   number2 = number1;
   console.log('Number 1 : ' + number1 + ' : type of : ' + typeof number1);
   console.log('Number 2 : ' + number2 + ' : type of : ' + typeof number2);
   number2 = 50;
   console.log('Number 1 : ' + number1 + ' : type of : ' + typeof number1);
   console.log('Number 2 : ' + number2 + ' : type of : ' + typeof number2);
   console.log(isNaN(number1));

   /**
    * String - String is nothing but a series of characters defined by using quotes around those characters. It can be a single word
    * or a sentence.On assigning string1 to string2 we are actually assigning the value contained inside of string1 to string2.
    * When we change the value of string2 to Kyle Simpson it does not have any impact on string1.
    * We can see that when we used isNaN with strings it gave true.
    * IaNaN does not check the type of the primitive it only checks the value.
    */
   var string1 = 'Minko Gechev';
   console.log('String 1 : ' + string1 + ' : type of : ' + typeof string1);
   var string2;
   string2 = string1;
   console.log('String 1 : ' + string1 + ' : type of : ' + typeof string1);
   console.log('String 2 : ' + string2 + ' : type of : ' + typeof string2);
   string2 = 'Kyle Simpson';
   var string3 = '50';
   console.log('String 1 : ' + string1 + ' : type of : ' + typeof string1);
   console.log('String 2 : ' + string2 + ' : type of : ' + typeof string2);
   console.log(isNaN(string1));
   console.log(isNaN(string3));

   /**
    * Boolean - Boolean just returns us true or false. It has special values which are assigned to the variable as true or false
    * without using quotes around them.
    * We can see that when we used isNaN with boolean it gave false.
    * Internally true is stored as 1 and false is stored as 0. So when we ran isNan on a boolean it gives us false.
    */
   var boolean1 = true;
   console.log('boolean 1 : ' + boolean1 + ' : type of : ' + typeof boolean1);
   var boolean2;
   boolean2 = boolean1;
   console.log('boolean 1 : ' + boolean1 + ' : type of : ' + typeof boolean1);
   console.log('boolean 2 : ' + boolean2 + ' : type of : ' + typeof boolean2);
   boolean2 = false;
   console.log('boolean 1 : ' + boolean1 + ' : type of : ' + typeof boolean1);
   console.log('boolean 2 : ' + boolean2 + ' : type of : ' + typeof boolean2);
   console.log(isNaN(boolean1));
   var boolNumber1 = 1;
   var boolNumber2 = 0;
   /**
    * Value of boolean1 is true which is stored as 1 in , so when we compare it with boolNumber1 wit coercion(==) it returns true as
    * it only checks for the value and not type. But returns false when we use non-coercion(===)
    */
   console.log('Type comparison with number : ' + (boolNumber1 == boolean1) + '-----' + (boolean1 === boolNumber1));
   /**
    * Value of boolean2 is true which is stored as 1 in , so when we compare it with boolNumber2 wit coercion(==) it returns true as
    * it only checks for the value and not type. But returns false when we use non-coercion(===)
    */
   console.log('Type comparison with number : ' + (boolNumber2 == boolean2) + '-----' + (boolean2 === boolNumber2));

   /**
    * Undefined - It is a special value assigned to a variable which is created and not assigned any value. Undefined is different 
    * from undeclared.
    */
   var undefined1;
   console.log('undefined 1 : ' + undefined1 + ' : type of : ' + typeof undefined1);
   console.log(isNaN(undefined1));
   //console.log(undefined2); - Here we will get a reference error as undefined2 is never declared. Prior to its declaration
   //we are using it

   /**
    * Null - It is a special type which specifies that the variable is null using the keyword null. null is different from 'null'
    * and undefined. If we want to check for null we can make use of typeOf  opeartor as well as non-coercion i.e. === (tight 
    * equality).
    */
    var null1 = null;
    console.log('Null 1 : ' + null1 + ' : type of : ' + typeof null1);
    var null2 = 'null';
    console.log('Null 2 : ' + null2 + ' : type of : ' + typeof null2);
    console.log(null1 == null2);

    /**
     * Dynamic nature of types Javascript
     */

     /**
      * Here we have declared variable named dynamic1 to which we have assigned a number and in later
      * point of time we assigned it to a string type. Javascript compiler does not complaint about it 
      * as we can assign any type to a variable on the fly. It means that there is nothing like 
      * static typing in javascript, type of variable is determined dynamically depending upon the value
      * assigned to it.So we can assign to a variable any type in the script i.e. first we assign to it
      * a number than a string, boolean, null or undefined amd our code will not throw any error.
      */
     var dynamic1 = 10;
     console.log('Value assigned to variable named dynamic1 : ' + dynamic1 + ' type of : ' + typeof dynamic1);

     dynamic1 = 'Aditi Tipnis';
     console.log('Value assigned to variable named dynamic1 : ' + dynamic1 + ' type of : ' + typeof dynamic1);

     dynamic1 = true;
     console.log('Value assigned to variable named dynamic1 : ' + dynamic1 + ' type of : ' + typeof dynamic1);

     dynamic1 = null;
     console.log('Value assigned to variable named dynamic1 : ' + dynamic1 + ' type of : ' + typeof dynamic1);

     dynamic1 = undefined;
     console.log('Value assigned to variable named dynamic1 : ' + dynamic1 + ' type of : ' + typeof dynamic1);