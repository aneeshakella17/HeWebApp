

function readURL(input){
   if(true) {
     var reader = new FileReader();
     formdata = new FormData();
     reader.onload = function(e) {

        $('#blah').attr('src', e.target.result).width(150)
                    .height(200);
         formdata.append('image',  e.target.result);
         $.ajax({c
            type: "POST",
            url: "/send",
		    data: formdata,
		    cache: false,
		    processData: false,
		    contentType: false
         }).done(function(response){
            console.log("HI");
            console.log(response);
            $('#output').attr('src', response).width(150)
                    .height(200);
            document.getElementById("download").disabled=false;
            document.getElementById("download").style.display = "inline-block";
          });

     }
     reader.readAsDataURL(input.files[0]);
     document.getElementById("arrow").style.display = "inline-block";
  }


}




