var cart_load = ()=>{
    $(document).ready(function(){
        $.get("https://fakestoreapi.com/carts", function(data, status){
            // console.log(data)
            // console.log(status)
            // document.write(data)
            data.map((details)=>{
                document.write(details.id+ "<br>")

                details.products.map((product_info)=>{
                    for(var z in product_info){
                        document.write(z + " :--" + product_info[z]  + "<br>");
                    }
                })
                document.write("<br>******************************<br>")
             })

        })
    })
}
cart_load()
