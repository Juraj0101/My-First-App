let data = [
    {
      photo: 'images/photo1.jpg',
      title: 'Rocks in the desert',
      description: "It's very hot in here"
    },
    {
      photo: 'images/photo2.jpg',
      title: 'Waterfall',
      description: 'If you close your eyes you can feel it'
    },
    {
        photo: 'images/photo3.jpg',
        title: 'Sunflowers',
        description: 'Guess where the sun is'
    },
    {
        photo: 'images/photo4.jpg',
        title: 'Lake in the mountains',
        description: 'What a beautiful view'
    },
    {
        photo: 'images/photo5.jpg',
        title: 'Sunset',
        description: 'The end of another day'
    },
    {
        photo: 'images/photo6.jpg',
        title: 'Green aurora',
        description: "It's just stunning"
    },
    {
        photo: 'images/photo7.jpg',
        title: 'Another lake',
        description: 'Water is crystal clear here'
    },
    {
        photo: 'images/photo8.jpg',
        title: 'Winter',
        description: "You can't see any bears because they are sleeping"
    },
  ];


let currentPhoto = 0;

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', data[photoNumber].photo);
  $('#title').text(data[photoNumber].title);
  $('#description').text(data[photoNumber].description);
};

loadPhoto(currentPhoto); // Load initial photo

$('.fa-angle-left').click(function() {
  if (currentPhoto > 0) {
    currentPhoto--;
    loadPhoto(currentPhoto);
  }
});

$('.fa-angle-right').click(function() {
  if (currentPhoto < data.length - 1) {
    currentPhoto++;
    loadPhoto(currentPhoto);
  }
});

let thumbnailData = [
    {
        photo: 'images/photo1.jpg'
    },
    {
        photo: 'images/photo2.jpg'
    },
    {
        photo: 'images/photo3.jpg'
    },
    {
        photo: 'images/photo4.jpg'
    },
    {
        photo: 'images/photo5.jpg'
    },
    {
        photo: 'images/photo6.jpg'
    },
    {
        photo: 'images/photo7.jpg'
    },
    {
        photo: 'images/photo8.jpg'
    },
]

let thumbnailsContainer = $('#thumbnails');
thumbnailData.forEach((thumbnailData, index) => {
  let thumbnail = $('<div class="thumbnail">')
    .append(`<img src="${thumbnailData.photo}" ${index + 1}" data-number="${index}">`);
  thumbnailsContainer.append(thumbnail);

  thumbnail.click(function(event) {
    let clickedPhotoNumber = $(event.target).attr('data-number');
    currentPhoto = parseInt(clickedPhotoNumber);
    loadPhoto(currentPhoto);
  });
});
