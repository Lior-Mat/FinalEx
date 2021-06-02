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
          let display = "";

          if (storedItems != null) {
            cart = storedItems;
              storedItems.forEach(item => {

                  display += `<tr><td> <img src="` + item.img + `"\></td> <td> ` + item.name + `</td> <td> ` + item.price + ` ` + item.currency + `</td> <td><button onclick="onDeleteItem(id)">X</button></td></tr>`;
                  // console.log(totalPrice);
              });

              myCartCount = cart.length;
              console.log(myCartCount);
          } else {
              myCartCount = "";
          }

          getFinalPrice();


          if (myCartCount != 0)
              if (myCartCount > 9)
                  cartCountID.innerHTML = ` 9+`;
              else
                  cartCountID.innerHTML = ` ${myCartCount}`;
          else
              cartCountID.innerHTML = "";

          document.getElementById("myCartOpeningContent").innerHTML = '<table>' + display + '</table>';
      }

      function getFinalPrice() {
          let theFinalPrice = document.getElementById("finalPrice");
          //    console.log(theFinalPrice);
          totalPrice = 0;
          if(cart != null){
            cart.forEach(item => {
                totalPrice += parseInt(item.price);
            });
          }
          
          if (totalPrice == 0) {
              theFinalPrice.innerHTML = 'Too Quiet Over Here...';
          } else
              theFinalPrice.innerHTML = "The total price is: " + totalPrice + `$`;
      }

      let cart = []; // Cart Array

      let saveColor = ''; // Saving my current clicked color

      function onClickSetColor(id) {
          console.log(id);
          saveColor = id; // Saving the color from the get method into the general variable saveColor
      }

      function onClickGetColor() {
          return saveColor; // Sending back the saved color from the first function
      }

      let saveSize = '';

      function onClickSetSize(mySize) {
          saveSize = mySize;
      }

      function onClickGetSize() {
          return saveSize;
      }

      // Adding items in the cart Array & inserting the count next to the cart icon.
      function onAddToCart(item) {
          if (item.color == "") {
              alert("No color has been selected !");
          } else if (item.size == "") {
              alert("No size has been selected !");
          } else {
              cart.push(item);
              localStorage.setItem("cart", JSON.stringify(cart));
              refreshCart();
              alert("Product Added Succesfully To Cart");
          }

      }

      let i = 0;

      function onDeleteItem(index) {
          cart.splice(index, 1);
          if(cart.length == 0){
              localStorage.clear();
          }
          else
          localStorage.setItem("cart", JSON.stringify(cart));
          
          refreshCart();
      }