      /* Set the width of the side navigation to 250px */
      //   function openNav() {
      //       document.getElementById("mySidenav").style.width = "100%";
      //       document.getElementById("effect").style.paddingRight = "250px";
      //       document.getElementById("effect").style.transition = ".5s";
      //   }

      function openNav() {
          document.getElementById("mySidenav").classList.add("open");
      }

      /* Set the width of the side navigation to 0 */
      //   function closeNav() {
      //       document.getElementById("mySidenav").style.width = "0";
      //       document.getElementById("effect").style.transition = ".5s";
      //       document.getElementById("effect").style.paddingRight = "0";

      //   }

      function closeNav() {
          document.getElementById("mySidenav").classList.remove("open");
      }

      // Hamburger Menu Code

      //   let windowMedia = window.matchMedia("(min-width: 1025px");
      //   // Opening & Closing cart functions
      //   function openCart() {
      //       if (windowMedia.matches) {
      //           document.getElementById("myCartOpening").style.width = "30%";
      //           document.getElementById("effect").style.paddingRight = "250px";
      //           document.getElementById("effect").style.transition = ".5s";
      //       }
      //       else{
      //         document.getElementById("myCartOpening").style.width = "100%";
      //         document.getElementById("effect").style.paddingRight = "250px";
      //         document.getElementById("effect").style.transition = ".5s";
      //       }
      //   }

      function openCart() {
          document.getElementById("myCartOpening").classList.add("open");
      }



      /* Set the width of the side navigation to 0 */
      //   function closeCart() {
      //       document.getElementById("myCartOpening").style.width = "0";
      //       document.getElementById("effect").style.transition = ".5s";
      //       document.getElementById("effect").style.paddingRight = "0";
      //   }

      function closeCart() {
          document.getElementById("myCartOpening").classList.remove("open");
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
              //   console.log(myCartCount);
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
          if (cart != null) {
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
          //   console.log(id);
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
          if (cart.length == 0) {
              localStorage.clear();
          } else
              localStorage.setItem("cart", JSON.stringify(cart));

          refreshCart();
      }

      let master = document.getElementById("display-content");
      let linksMaster = document.querySelectorAll("#flex-Dis a");
      let displayMaster = document.querySelectorAll("#display-content div");

      function deskOpen(path){
        
        displayMaster.forEach(item => {
            item.style.display = "none";
        });

        linksMaster.forEach(item => {
            item.classList.remove("active");
        });


        document.getElementById(path).style.display = "block";
        document.getElementById(path + "-button").classList.add("active");

        linksMaster.forEach(element => {
            scrollToTop();
        });
      }

      function scrollToTop() {
        window.scrollTo({
          top: 1370,
          behavior:'smooth'
        });
      }

