
### Homework Questions for CH4 - objects

1. **Function and Rest Parameters**
   - What will be the output of the following function call?
     ```javascript
     function print(a, b, ...others) {
         console.log(a, b, others);
     }
     print(10, 30, 60, 40, 80, 888, 99);
     ```

2. **Object Creation and Access**
   - Create an object named `student` with properties `name`, `age`, and `grade`.
   - Access and print the `name` property of the `student` object using both dot notation and bracket notation.

3. **Updating Object Values**
   - Given the following object:
     ```javascript
     let book = {
         title: "JavaScript Basics",
         author: "John Doe",
         year: 2022
     };
     ```
     - Update the `title` property to "Advanced JavaScript" using both dot notation and bracket notation.
     - Print the updated `title` property.

4. **Deleting Object Properties**
   - Consider the following object:
     ```javascript
     let employee = {
         name: "Alice",
         position: "Developer",
         salary: 50000
     };
     ```
     - Delete the `position` property.
     - Print the object before and after deleting the property.

5. **Methods in Objects**
   - Create an object `car` with properties `brand`, `model`, `year`, and a method `getCarAge` that calculates the age of the car based on the current year (2024).
   - Call the `getCarAge` method and print the result.

6. **Using `this` Keyword**
   - Explain what the `this` keyword refers to in the following code:
     ```javascript
     let user = {
         name: "Bob",
         birthYear: 1990,
         getAge: function() {
             return 2024 - this.birthYear;
         }
     };
     console.log(user.getAge());
     ```

7. **Nested Objects**
   - Create an object `house` with properties `address`, `size`, and a nested object `owner` with properties `name` and `age`.
   - Access and print the `name` property of the `owner` object.

8. **Object Method Binding**
   - Explain how the `call`, `apply`, and `bind` methods work with examples from the provided code.

9. **For...in Loop**
   - Given the object `person`:
     ```javascript
     let person = {
         name: "Sani",
         age: 20,
         city: "Dhaka"
     };
     ```
     - Use a `for...in` loop to print all the keys and values of the `person` object.

10. **Object Methods (`Object.keys`, `Object.values`, `Object.entries`)**
    - Explain the difference between `Object.keys`, `Object.values`, and `Object.entries` methods with examples.

11. **Object Freeze and Object Seal**
    - Explain the difference between `Object.freeze` and `Object.seal` with examples from the provided code.
    - What will be the output of the following code?
      ```javascript
      let obj = {
          id: 1
      };
      Object.freeze(obj);
      obj.id = 2;
      console.log(obj.id); // What will this print and why?
      ```

    - What will be the output of the following code?
      ```javascript
      let obj = {
          id: 1
      };
      Object.seal(obj);
      obj.id = 2;
      delete obj.id;
      console.log(obj.id); // What will this print and why?
      ```
