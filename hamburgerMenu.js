      /* Set the width of the side navigation to 250px */
      function openNav() {
          document.getElementById("mySidenav").style.width = "100%";
          document.getElementById("effect").style.paddingRight = "250px";
          document.getElementById("effect").style.transition = ".5s";
      }

      /* Set the width of the side navigation to 0 */
      function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("effect").style.transition = ".5s";
          document.getElementById("effect").style.paddingRight = "0";

      }

      // Hamburger Menu Code



      //////////////////////////////////////////////////////////////////////////////// 




      // Opening & Closing cart functions
      function openCart() {

          refreshCart();

          document.getElementById("myCartOpening").style.width = "30%";
          document.getElementById("effect").style.paddingRight = "250px";
          document.getElementById("effect").style.transition = ".5s";
      }

      /* Set the width of the side navigation to 0 */
      function closeCart() {
          document.getElementById("myCartOpening").style.width = "0";
          document.getElementById("effect").style.transition = ".5s";
          document.getElementById("effect").style.paddingRight = "0";
      }

      let totalPrice = 0;
      let myCartCount = 0;

      function refreshCart() {
          let storedItems = JSON.parse(localStorage.getItem("cart"));
          cart = storedItems;
          let display = "";

          getFinalPrice();

          if (storedItems != null) {
              storedItems.forEach(item => {

                  display += `<tr><td> <img src="` + item.img + `"\></td> <td> ` + item.name + `</td> <td> ` + item.price + ` ` + item.currency + `</td> <td><button onclick="onDeleteItem(id)">X</button></td></tr>`;
                  // console.log(totalPrice);
              });

              myCartCount = cart.length;
              console.log(myCartCount);
          } else {
              myCartCount = "";
          }


          if (myCartCount != 0)
              if (myCartCount > 9)
                  cartCountID.innerHTML = ` 9+`;
              else
                  cartCountID.innerHTML = ` ${myCartCount}`;
          else
              cartCountID.innerHTML = "";


          // cartCountID.innerHTML =  `  ${myCartCount}`;

          document.getElementById("myCartOpeningContent").innerHTML = '<table>' + display + '</table>';
      }

      function getFinalPrice() {
          let theFinalPrice = document.getElementById("finalPrice");
          //    console.log(theFinalPrice);
          totalPrice = 0;
          cart.forEach(item => {
              totalPrice += parseInt(item.price);
          });
          if (totalPrice == 0) {
              theFinalPrice.innerHTML = 'Too Quiet Over Here...';
          } else
              theFinalPrice.innerHTML = "The total price is: " + totalPrice + `$`;
      }

      // forEach function




      ////////////////////////////////////////////////////////////////////////////////

      // My Fake DataBase
      // let items = [
      //     {
      //         // id: "1",
      //         name:"Nike Air",
      //         description:"blalbllblbalab", 
      //         color:"red", 
      //         size:"42", 
      //         price:"150"
      //     },

      //     {
      //         // id: "2",
      //         name:"Nike Air2",
      //         description:"blalbllblbalab", 
      //         color:"red", 
      //         size:"42", 
      //         price:"150"
      //     },

      //     {
      //         // id: "3",
      //         name:"Nike Air3",
      //         description:"blalbllblbalab", 
      //         color:"red", 
      //         size:"42", 
      //         price:"150"
      //     }

      // ];

      ////////////////////////////////////////////////////////////



      let cart = []; // Cart Array


      ///////////////// GET AND SET METHODS FOR THE COLOR 
      let saveColor = ''; // Saving my current clicked color

      function onClickSetColor(id) {
          console.log(id);
          saveColor = id; // Saving the color from the get method into the general variable saveColor
      }

      function onClickGetColor() {
          return saveColor; // Sending back the saved color from the first function
      }

      ///////////////////////////////////////////////////////////////////////////////////////////////
      let saveSize = '';

      function onClickSetSize(mySize) {
          saveSize = mySize;
      }

      function onClickGetSize() {
          return saveSize;
      }





      // Adding items in the cart Array & inserting the count next to the cart icon.
      function onAddToCart(item) {
          cart.push(item);
          localStorage.setItem("cart", JSON.stringify(cart));
          // console.log(cart);


          // if(addedObjects >= 9){
          //     cartCountID.innerHTML =  '  9+';
          // }
          // else
          // cartCountID.innerHTML =  ' ' + addedObjects;
          refreshCart();
          alert("Product Added Succesfully To Cart");
      }

      let i = 0;
      let myTempVar = [];

      function onDeleteItem(index) {
          // addedObjects--;
          // if(addedObjects == 0){
          //     cartCountID.innerHTML =  ' ';
          // }
          // else{
          //     cartCountID.innerHTML =  ' ' + addedObjects;
          // }

          cart.splice(index, 1);
          localStorage.setItem("cart", JSON.stringify(cart));
          refreshCart();
      }