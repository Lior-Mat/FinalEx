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

function refreshCart(){

    let display = "";
        
        cart.forEach( item => {

            display += `<tr><td> <img src="`+ item.img +`"\></td> <td> `+ item.name +`</td> <td> `+ item.price +` `+ item.currency +`</td></tr>`;
            console.log(totalPrice);
        });
        
        document.getElementById("myCartOpeningContent").innerHTML = '<table>'+ display +'</table>';  
}

function getFinalPrice(){
   let theFinalPrice = document.getElementById("finalPrice");
//    console.log(theFinalPrice);
    totalPrice = 0;
    cart.forEach( item => {
        totalPrice += parseInt(item.price);
    });
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
        let addedObjects = 0; // Cart Count

///////////////// GET AND SET METHODS FOR THE COLOR 
        let saveColor = ''; // Saving my current clicked color

        function onClickSetColor(id){
            console.log(id);
            saveColor = id; // Saving the color from the get method into the general variable saveColor
        }

        function onClickGetColor(){
            return saveColor; // Sending back the saved color from the first function
        }

///////////////////////////////////////////////////////////////////////////////////////////////
        let saveSize = '';

        function onClickSetSize(mySize){
            saveSize = mySize;
        }

        function onClickGetSize(){
            return saveSize;
        }

        

        
        
        // Adding items in the cart Array & inserting the count next to the cart icon.
        function onAddToCart(item) {
            addedObjects++;
            cart.push(item);
            console.log(cart);

            if(addedObjects >= 9){
                cartCountID.innerHTML =  '  9+';
            }
            else
            cartCountID.innerHTML =  ' ' + addedObjects;
            getFinalPrice();
            refreshCart();
        }

