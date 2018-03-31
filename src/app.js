window.addEventListener('load', () => {
  const pictureSlider = (data) => {
    data.internetBanks.forEach(element => {
      let sliderContent = `<li>
                            <img src="${element.url}" alt=${element.id}>
                          </li>`;
    });
    $('#responsive').append(sliderContent);
  };

  $('#responsive').lightSlider({
    item: 4,
    loop: false,
    slideMove: 4,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 3,
          slideMargin: 6,
        }
      },
      {
        breakpoint: 480,
        settings: {
          item: 3,
          slideMove: 3
        }
      },
      {
        breakpoint: 320,
        settings: {
          item: 3,
          slideMove: 3
        }
      }
    ]
  });
});