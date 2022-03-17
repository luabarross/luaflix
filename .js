var listaFilmes = [
  "https://th.bing.com/th/id/R.bfc1226c7722b61417b0dd0434f3d581?rik=ridCnoIzNhVmUg&pid=ImgRaw&r=0",
  "https://http2.mlstatic.com/3-livros-gravity-falls-poster-a3-mega-pacote-2019-D_NQ_NP_813531-MLB31011720479_062019-F.jpg",
  "https://images.justwatch.com/poster/242356958/s332",
  "https://i0.wp.com/gavetadebaguncas.com.br/wp-content/uploads/2019/06/desencanto-resenha-poster.jpg?fit=1383%2C2048&ssl=1",
  "https://baixarfilmestorrent4k.net/wp-content/uploads/2015/08/bojack-horseman-2a-temporada-poster.jpg",
  "https://www.aoseugosto.com/wp-content/uploads/2020/11/Final-Space-1a-2a-Temporada-Completa-2019-Google-Drive-Torrent-Dublado-864x1024.jpg"
];

var desenhos = [
  "https://www.bing.com/videos/search?q=coraline+trailer&view=detail&mid=2C217063CE0F465DA8542C217063CE0F465DA854&FORM=VIRE",
  "https://www.bing.com/videos/search?q=trailer+de+gravity+falls+legendado&qpvt=trailer+de+gravity+falls+legendado&view=detail&mid=ED9D82C5984A31EC7DF4ED9D82C5984A31EC7DF4&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dtrailer%2Bde%2Bgravity%2Bfalls%2Blegendado%26qpvt%3Dtrailer%2Bde%2Bgravity%2Bfalls%2Blegendado%2B%26FORM%3DVDRE",
  "https://www.bing.com/videos/search?q=trailer+de+star+vs+the+forces+of+evil+official&docid=608013880098519147&mid=23BAAB68C58BF4D9C40A23BAAB68C58BF4D9C40A&view=detail&FORM=VIRE",
  "https://www.bing.com/videos/search?q=trailer+de+desencanto+ingles&docid=608029535254617988&mid=3C771FB236E0886B2AB03C771FB236E0886B2AB0&view=detail&FORM=VIRE",
  "https://www.bing.com/videos/search?q=trailer+de+bojack+horseman+ingles&view=detail&mid=37EB669686BDAB9BCC8537EB669686BDAB9BCC85&FORM=VIRE",
  "https://www.bing.com/videos/search?q=trailer+de+final+space+temporada+1&&view=detail&mid=278C660248E7E66FCD29278C660248E7E66FCD29&&FORM=VRDGAR&ru=%2Fvideos%2Fsearch%3Fq%3Dtrailer%2Bde%2Bfinal%2Bspace%2Btemporada%2B1%26qs%3Dn%26form%3DQBVR%26sp%3D-1%26pq%3Dtrailer%2Bde%2Bfinal%2Bspace%2Btemporada%2B%26sc%3D0-33%26sk%3D%26cvid%3D49ED78AF19BD4BA7862F6C8DC49CEF4B"
];

var conteudoA = document.createTextNode("id='link'");

for (var d = 0; d < desenhos.length; d++) {
  var a = document.createElement("a");
  a.setAttribute("id", `desenho_${d}`);
  a.setAttribute("href", desenhos[d]);
  document.body.appendChild(a);
}

for (var i = 0; i < listaFilmes.length; i++) {
  var img = document.createElement("img");
  img.setAttribute("id", `imagens_${i}`);
  img.setAttribute("src", listaFilmes[i]);
  img.setAttribute("class", "imagens");
  document.getElementById(`desenho_${i}`).appendChild(img);
}
