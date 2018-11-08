var links = [
    'https://www.quanzhanketang.com/css/img_fjords.jpg',
    'https://pbs.twimg.com/media/DUzqrrSX0AAEWqB.jpg',
    'https://img.youtube.com/vi/pChmieCDWpo/0.jpg',
    'https://img.youtube.com/vi/pChmieCDWpo/0.jpg',
    'https://jssorcdn7.azureedge.net/demos/img/gallery/720x480/006.jpg'
];

var $gallery = $('div');

for (var i = 0; i < links.length; i++) {
    var $img = $('<img>');
    $img.attr('src', links[i]);
    $img.width(Math.random() * 400);
    $gallery.append($img);


}


var $images =$('img')

for (j = 0; j < $images.length; j++){ 

$images.eq(j)

  console.log($images.eq(j))



    if ($images.width < 200) {

        $images.addClass("border")
      
    }

}


var $title = $('<h1>Amazing Gallery</h1>');
$gallery.before($title)







