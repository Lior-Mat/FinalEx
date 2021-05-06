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

        let cart = [
            {
                name: "Pich",
                id: 1,
                size: 38,
                imgURL: "https://fdajkngbdfknflgdfgn.com"
            },
            {
                name: "Pich",
                id: 2,
                size: 38,
                imgURL: "https://fdajkngbdfknflgdfgn.com"
            },
            {
                name: "Pich",
                id: 3,
                size: 38,
                imgURL: "https://fdajkngbdfknflgdfgn.com"
            }
            
        ];

        function onAddToCart({name: Srting, id: Number, size: Number, imgURL: Srting}) {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("effect").style.transition = ".5s";
            document.getElementById("effect").style.paddingRight = "0";
        }

        let x = document.querySelectorAll()

