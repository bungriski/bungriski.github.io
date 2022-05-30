document.getElementById("imgload").onload = function() {NamaUndangan()};
//Menampilkan Nama Undangan
function NamaUndangan(){
    var url = new URL((document.location));

    var search_params = url.searchParams; 

    var nama = search_params.get('nama');

    if (nama == null) {
        
    } else { 
        document.getElementById("NamaUndanganAwal").innerHTML = nama;
        document.getElementById("NamaUndangan").innerHTML = nama;
        document.getElementById("DataUndanganAwal").style.display = "block"; 
        document.getElementById("DataUndanganUtama").style.display = "block"        
                        
    }
    
}

// Memutar Backsound
var x = document.getElementById("BungAudio"); 
function playAudio() { 
    x.play();
} 

// Navbar auto close
$('.navbar-collapse').click(function(){
  $(".navbar-collapse").collapse('hide');
});


