var images = [ "https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.pinimg.com/originals/87/b8/3b/87b83ba77a10a1d3313ed7872918524d.jpg", "https://comps.canstockphoto.com/grandfather-wearing-eyeglasses-image_csp60220375.jpg", "https://st.depositphotos.com/1077687/1903/v/950/depositphotos_19036597-stock-illustration-cartoon-boy.jpg", "https://image.shutterstock.com/image-vector/illustration-cute-baby-boy-clapping-260nw-102969851.jpg", "https://i.pinimg.com/736x/f8/a9/dd/f8a9dd5024d6ebed33ae33db724d84e3.jpg" ];
var names = ["Fmaily Book","Ilangeethan", "chandrasekhar", "Shobhith Ilangeethan", "Paarthiv Ilangeethan", "Gayatheir devi Ilangeethan"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}


