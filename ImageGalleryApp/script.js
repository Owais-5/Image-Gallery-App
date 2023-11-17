document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    const createThumbnailHandler = (imageId) => () => {
      $(`#img${imageId}`).animate({
        height: '500px',
        width: '500px'
      });
    };
  
    thumbnails.forEach((thumbnail, index) => {
      const imageId = index + 1;
      thumbnail.addEventListener('click', createThumbnailHandler(imageId));
  
      thumbnail.addEventListener('mouseleave', () => {
        $(`#img${imageId}`).animate({
          height: '200px',
          width: '200px'
        });
      });
    });
  });
  