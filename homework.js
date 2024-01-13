var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Martin Joseph", "Nathan Martin", "Samuel Martin", "Anupa James"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store lis
    var updatedImage = [images];
    
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names] ;
 
    document.getElementById("familymember").src = updatedImage;
    document.getElementById("familymembername").innerHTML = updatedName;
}
