function adicionarVideo() {
  var video = document.querySelector('#video').value
  video = video.replace("watch?v=", "embed/")
  if (video.includes('https://www.youtube.com/')) { 
    listaVideosNaTela(video)
    }
}
function listaVideosNaTela(video) {
   var listaVideos = document.querySelector('#listaVideo')
   var elementoVideo =  '<iframe width="560" height="315" src="' + video + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
  listaVideos.innerHTML = listaVideos.innerHTML + elementoVideo;
   
}
video.value = "";
