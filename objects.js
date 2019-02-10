/**
 * Objects the backbone of Javascript
 */

 /**
  * An object is location in a memory. It is a reference type i.e. whenever we are trying to grab an objects in actual we are grabbing
  * the memory location. The variable to which the object is assigned is a reference to this location in memory. 
  * Data is stored inside the object as key value pairs separated by a colon i.e. (key : value), where key is the name of the
  * property and value is the actual vlue which we can grab using the key either by dot notation or by bracket notation. A key
  * can be assigned any type of value i.e it can be number, string, null, undefined, boolean, object, array or a function.
  */

 /**
  * Declaring Objects
  */

  /**
   * Object literal notation - We can define an object just by declaring a variable and assigning to it an object which is determined
   * by opening and closing curly braces
   * When we use typeof with a obj its return type is object.
   */
  var obj = {};
  console.log('Type of variable obj :  '+ typeof obj);

  /**
   * Defined three property value pairs on the object i.e. our keys are a,b,c and the value that is held by them is 10,20,50
   */
  obj = {a : 10 ,
         b : 20 ,
         c: 50 }

console.log(obj);

/**
 * Constructor pattern - In real world we want many objects of same type so we won't be creating n number of objects every time
 * using our object literal notation. Constructor is just a function used with the new keyword to fork out objects.
 */

 function ConstructObjects(name,age,gender)
 {
     this.name = name;
     this.age = age;
     this.gender = gender;
 }

 var object1 = new ConstructObjects('Minko Gechev', 50 , 'Male');
 console.log(object1);
 console.log('My name is : '+ object1.name + ' and I am : ' + object1.age + 'and my gender is : '+ object1.gender);
 var object2 = new ConstructObjects('Deborah Kurata', 50 , 'Female');
 console.log(object2);
 console.log('My name is : '+ object2.name + ' and I am : ' + object2.age + 'and my gender is : '+ object2.gender);

 /**
  * When we are forking out objects using the constructor function then behind the scenes two things are going on:
  * Using new keyword creates a blank object for us in the memory
  * It sets the this reference to that object which is created
  */

  /**
   * Object.create() method for creating Objects - this method is used for creating objects, to it we pass the {} which states that
   * craete a blank object for me in the memory and on that object define the keys declared inside property descriptor object.
   * Property descriptor object contains the name of the keys that should exist on the object that we are creating as well as the 
   * values and other configuration of those keys.
   */

   var object3 = Object.create({}, {name : {value : 'Kyle Simpson'}});
   console.log('' + object3);

   /**
    * There are four properties for every key that we define and are:
    * 1. Value - value of the key that is returned
    * 2. Writable - whether the value of the property can be changed or not , by default it is false
    * 3. Enumerable - whether this key be picked in the iterable that is craeted when we use Object.keys on that object, by default 
    * it is false
    * 4. Configurable - we can configure it further or not, by default it is false
    */
   var object4 = Object.create({}, {name : {value : 'Kyle Simpson'}});
   console.log(object4);
   object4.name = 'Deborah Kurata';
   console.log(object4.name);
   /**
    * Here it you can see that the value of the property is not changed as writable is false
    */

   var object5 = Object.create({}, {name : {value : 'Kyle Simpson',enumerable : true}, age : {value : 50 , enumerable : true}});
   console.log(object5);
   console.log('Enumerable properties for Object 5 are : ' + Object.keys(object5));
   var object6 = Object.create({}, {name : {value : 'Deborah Kurata',enumerable : false}, age : {value : 50 , enumerable : true}});
   console.log(object6);
   console.log('Enumerable properties for Object 6 are : ' +  Object.keys(object6));

   /**
    * Here we have set the value of enumerable to true for both the properties of Object5 and they are fetched when we ran
    * Object.keys over it while in case Object6 it only fetched age and not the name property which can be iterated over using
    * a loop
    */

    var object7 = Object.create({}, {name : {value : 'Kyle Simpson',writable : true, configurable : false,enumerable : true}, age : {value : 50 , configurable : false}});
    Object.defineProperty(object7,'name',{writable : false});
    //Object.defineProperty(object7,'name',{enumerable : false});
    object7.name = 'Deborah Kurata';
    console.log(object7.name);
    console.log(Object.keys(object7));
    object7.name = {};
    console.log(object7.name);
    delete object7.name

    /**
     * When we set configurable to true for a property then foloowing happens : 
     * 1. You cannot change enumerable, can't delete the property, can't reset the configurable property
     * 2. If writable is set to false it can't be changed to true using defineProperty
     * 3. Writable can be set to false from true later on using defineProperty
     */

     var object8 = {
         key1 : 10,
         key2 : 20,
         key3 : 30,
         key4 : 40,
         key5 : 50
     }

     var objectKeys = [];
     objectKeys = Object.keys(object8);
     /**
      * Object.keys method return to us the keys of an object so that we can iterate over them
      */
     for( let index = 0; index < objectKeys.length ; index++)
     {
         console.log(object8[objectKeys[index]]);
     }

     /**
      * For in loop is used to iterate over the keys of an objects, it grabs an iterable structure for us , like the one we did
      * in above
      */
     for (key in object8)
     {
         console.log(object8[key]);
     }

     /**
      * Assigning properties to an object using dot notation. Using the dot notation to access the properties or setting 
      * properties on an object following are the exceptions:
      * 1. We can only have string that too only one word long without any space
      * 2. We cannot use dot notation with for loops or for in loops as it does not evaluate the variable used to fetch its 
      * value, it treats as if it its property with that name and will return undefined
      */

      var object9 = {
          key1 : 10,
          key2 : 40
      }

      object9.key3 = 20;
      object9.key4 = 30;

      /**
       * Assigning array,object,function as a value to a key and using this inside that function
       */

       var object10 = {
           /**Assigning object to a key */
            key1 : {
                key11 : 10,
                key12 : 40
            },
            /**Assigning array to a key */
            key2 : [1,2,3,4,5],
            /**Assigning function to a key*/
            key3 : function(){
                     return () => {
                        return this.key1;
                    }
                }
       }
       console.log(object10.key3());
       var obj11 = object10.key3();
       console.log(obj11());

       function callbackTaker(x)
       {
           console.log('Callback call is not started');
            var insider = x();
            for(key in insider)
            {
                console.log(insider[key])
            }
           console.log('Callback call has been ended')
       }
       callbackTaker(object10.key3());

       /**Assigning object to another object using assignment operator. When we assign an object to another object using assignment
        * operator we are not actually assigning to it a value rather a pointer to the memory location which is held by the
        * other object.
        */

        var object11 = {
            a: 10,
            b: 40
        }

        var object12 = object11;
        console.log(object11);
        console.log(object12);
        object12.a = 50;
        /**
         * When we changed the value of a property on object12 it is reflected on object11 as well
         */
        console.log(object11);
        console.log(object12);
        /**
         * Here we changed the memory location to which object12 is pointing so it does not have any impact on object11
         */
        object12 = {};
        console.log(object11);
        console.log(object12);

        /**
         * Assigning object using object.assign() - When we assign object using object.assign it creates a blank object for us in the
         * memory and copies the value of the other object to that location.
         */
        var object13 = {
            a: 10,
            b: 40
        }

        var object14 = Object.assign({},object13);
        console.log(object13);
        console.log(object14);
        object14.a = 50;

        console.log(object13);
        console.log(object14);

        var object15 = {
            a : {
                x :10,
                y :40
            },
            b : 50
        }

        var object16 = Object.assign({},object15);
        console.log(object15);
        console.log(object16);
        /**
         * If a key holds a primitive value than on changing it does not have any impact on the object from which it si copied
         */
 
        object16.b = 500;

        console.log(object15);
        console.log(object16);
        /**
         * If a key holds a reference type than on changing the the value of its property impacts the object from which it is copied
         */
        
        object16.a.x = 100;

        console.log(object15);
        console.log(object16);
        

        /**
         * Deep copying in javascript - Using parse and stringify
         */
        var object17 = {
            a : {
                x :10,
                y :40
            },
            b : 50
        }

        var object20 = JSON.parse(JSON.stringify(object17));
        console.log(object17);
        console.log(object20);

        object20.a.x = 500;
        
        console.log(object17);
        console.log(object20);