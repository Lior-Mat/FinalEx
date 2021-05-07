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
        
        // My Fake DataBase
        let items = [
            {
                // id: "1",
                name:"Nike Air",
                description:"blalbllblbalab", 
                color:"red", 
                size:"42", 
                price:"150"
            },

            {
                // id: "2",
                name:"Nike Air2",
                description:"blalbllblbalab", 
                color:"red", 
                size:"42", 
                price:"150"
            },

            {
                // id: "3",
                name:"Nike Air3",
                description:"blalbllblbalab", 
                color:"red", 
                size:"42", 
                price:"150"
            }
            
        ];
////////////////////////////////////////////////////////////

        let cart = []; // Cart Array
        let addedObjects = 0; // Cart Count

        
        
        // Adding items in the cart Array & inserting the count next to the cart icon.
        function onAddToCart(item) {
            addedObjects++;
            cart.push(item);
            console.log(cart);

            if(addedObjects >= 9){
                cartCountID.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i>' + '' + '  9+';
            }
            else
            cartCountID.innerHTML = '<i class="fa fa-shopping-cart" aria-hidden="true"></i>' + '  ' + addedObjects;
        }

