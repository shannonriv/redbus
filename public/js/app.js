'use strict';

window.addEventListener('load', function () {
  // slider payment-cash
  $('#responsive').lightSlider({
    item: 4,
    loop: false,
    slideMove: 4,
    easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
    speed: 600,
    responsive: [{
      breakpoint: 800,
      settings: {
        item: 3,
        slideMove: 3,
        slideMargin: 6
      }
    }, {
      breakpoint: 480,
      settings: {
        item: 3,
        slideMove: 3
      }
    }, {
      breakpoint: 320,
      settings: {
        item: 3,
        slideMove: 3
      }
    }]
  });
  // slider payment-internet
  $('#payment-internet').lightSlider({
    item: 5,
    responsive: [{
      breakpoint: 992,
      settings: {
        item: 3,
        slideMargin: 6
      }
    }]
  });
  // data of icon banks
  var data = {
    internetBanks: [{
      id: 'BCP',
      figcaption: '',
      url: 'assets/images/logo-bcp.svg',
      detail: ['Selecciona la opción Pago de servicios > EMPRESAS>PAGOEFECTIVO > SOLES.']
    }, {
      id: 'BBVA',
      figcaption: '',
      url: 'assets/images/logo-bbva.svg',
      detail: ['Selecciona la opción Pago de servicios > De Instituciones y Empresas > Busca por nombre > PAGOEFECTIVO > PAGOEFECTIVOSOLES.']
    }, {
      id: 'Interbank',
      figcaption: '',
      url: 'assets/images/logo-interbank.svg',
      detail: ['Selecciona la opción Pago a Instituciones o Empresa > Empresa: PAGOEFECTIVO > Servicio: PAGOEFECTIVO']
    }, {
      id: 'Scotiabank',
      figcaption: '',
      url: 'assets/images/logo-scotia.svg',
      detail: ['Selecciona la opción Pagos > Otras Instituciones > Otros > Busca por Empresa/Servicio: PAGOEFECTIVO > Selecciona: PAGOEFECTIVO SOLES']
    }, {
      id: 'Banbif',
      figcaption: '',
      url: 'assets/images/logo-banbif.svg',
      detail: ['Selecciona la opción Pago de servicios > Busca por Empresa y escribe PAGOEFECTIVO > Selecciona la empresa PAGOEFECTIVO']
    }],
    cashBanks: [{
      id: 'BCP',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-bcp.svg'
    }, {
      id: 'BBVA',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-bbva.svg'
    }, {
      id: 'Interbank',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-interbank.svg'
    }, {
      id: 'Banbif',
      figcaption: 'Agencias',
      url: 'assets/images/logo-banbif.svg'
    }, {
      id: 'Fullcarga',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-fullcarga.png'
    }, {
      id: 'Scotiabank',
      figcaption: 'Agentes y Bodegas Agencias',
      url: 'assets/images/logo-scotia.svg'
    }, {
      id: 'WesternUnion',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-wu.svg'
    }, {
      id: 'Kasnet',
      figcaption: 'Agentes y Bodegas',
      url: 'assets/images/logo-kasnet.png'
    }]
  };
  // print in document icon payment internet for slider
  data.internetBanks.map(function (element) {
    var itemSlider = '<li class="nav-item icon-bank" data-detail="' + element.detail + '">\n                            <img src="' + element.url + '" alt=' + element.id + ' class="icon-payment-slider img-payment-internet my-2">\n                        </li>';
    $('#payment-internet').append(itemSlider);
  });
  // event for get details icons
  $('.icon-bank').click(function () {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
    $('#instructions-tab1').html('');
    var detailIntBank = '<p class="d-flex font-size-payment-instruction">\n            <img src="assets/images/number-one-in-a-circle.png" alt="1" class="img-clock mx-1"><span>' + $(this).data('detail') + '</span></p>\n          <p class="d-flex font-size-payment-instruction">\n            <img src="assets/images/number-two-in-a-circle.png" alt="1" class="img-clock mx-1">\n            <span>Ingresa tu c\xF3digo CIP: 9125682 y sigue los pasos.</span>\n          </p>';
    $('#instructions-tab1').append(detailIntBank);
  });

  data.cashBanks.map(function (element) {
    var itemCarrousel = '<li id=' + element.id + ' class="icon-cash-bank" data-detail="' + element.detail + '">\n                          <img src=' + element.url + ' alt=' + element.id + '>\n                          <p class="text-center">' + element.figcaption + '</p>\n                        </li>';
    $('#responsive').append(itemCarrousel);
  });

  data.cashBanks.map(function (element) {
    var itemCarrousel = '<li id=' + element.id + ' class="icon-cash-bank" data-detail="' + element.detail + '">\n                          <img src=' + element.url + ' alt=' + element.id + '>\n                          <p class="text-center">' + element.figcaption + '</p>\n                        </li>';
    $('#responsive').append(itemCarrousel);
  });

  $('#responsive').on('click', 'li', function () {
    $(this).find('img').removeClass('active-bank').addClass('active-bank');
    $(this).siblings().find('img').removeClass('active-bank');
  });

  $('.icon-cash-bank').click(function () {
    switch (true) {
      case $(this).is('#BCP'):
        $('#instructions-tab2').html('');
        var detailCashBankBcp = '<div class="BCP">\n            <p class="float-left">\n              <span class="mr-2">(*)</span>Agentes BCP: Brinda el c\xF3digo de empresa 02186.</p>\n            <p class="float-right">\n              <span class="mr-2">(*)</span>Agencias BCP: Costo adicional: S/.1.00.</p>\n          </div>';
        $('#instructions-tab2').append(detailCashBankBcp);
        break;
      case $(this).is('#BBVA'):
        $('#instructions-tab2').html('');
        break;
      case $(this).is('#Interbank'):
        $('#instructions-tab2').html('');
        var detailCashBankInt = '<div class="Interbank">\n            <p class="float-left">\n              <span class="mr-2">(*)</span>Agentes Interbank: Brinda el siguiente c\xF3digo 2735001</p>\n            <p class="float-right">\n              <span class="mr-2">(*)</span>Agencias Market de Interbank: Costo adicional S/. 2.00.</p>\n          </div>';
        $('#instructions-tab2').append(detailCashBankInt);
        break;
      case $(this).is('#Banbif'):
        $('#instructions-tab2').html('');
        break;
      case $(this).is('#Fullcarga'):
        $('#instructions-tab2').html('');
        var detailCashBankFullC = '<div class="Fullcarga">\n            <p class="float-left">\n              <span class="mr-2">(*)</span>Encuentra a FullCarga en Bodegas, Farmacias, cabinas de Internet y Locutorios.</p>\n          </div>';
        $('#instructions-tab2').append(detailCashBankFullC);
        break;
      case $(this).is('#Scotiabank'):
        $('#instructions-tab2').html('');
        break;
      case $(this).is('#WesternUnion'):
        $('#instructions-tab2').html('');
        break;
      case $(this).is('#Kasnet'):
        $('#instructions-tab2').html('');
        break;
    }
  });

  $('#print-icon').on('click', function () {
    window.print();
  });
});