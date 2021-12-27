import {
  AfterContentChecked,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { Autoplay, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination } from 'swiper/core';
import { ActivatedRoute, Router } from '@angular/router';

SwiperCore.use([Pagination, Autoplay]);
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None,
  // kayan yazi animasyon basladi
  animations: [
    trigger('scroll', [
      state('on', style({ left: '-16rem' })),
      transition('* => *', [
        style({ left: '32rem' }),
        animate(10000, style({ left: '-50rem' })),
      ]),
    ]),
  ],
})
// kayan yazi animasyon bitti
export class Tab1Page implements AfterContentChecked {
  @ViewChild('swiper') swiper: SwiperComponent;
  hasRunContentCheck = false;
  config: SwiperOptions = {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { clickable: true },
  };

  @ViewChild('swiper1') swiper1: SwiperComponent;

  config1: SwiperOptions = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    pagination: { clickable: true },
  };

  @ViewChild('swiper2') swiper2: SwiperComponent;
  config2: SwiperOptions = {
    slidesPerView: 1,
    // slidesPerGroup: 1,
    // pagination: { clickable: true },
  };

  // kayan resimler
  public topslideimage = [
    '../assets/1.png',
    '../assets/2.png',
    '../assets/4.png',
    '../assets/1.png',
    '../assets/2.png',
    '../assets/4.png',
  ];
  // kayan yazi
  public scrollingtext = [
    {
      habericerik:
        'P2P Ticareti ile Ücretsiz 4-10USDT Kazanın! Herhangi Birine Tavsiye Ederek Tavsiye Başına 2 USDT Daha Kazanın!​',
      img: '../assets/1.png',
    },
  ];
  // orta kisimdaki coin bilgileri
  public cointext = [
    {
      coinname: 'BTC/USDT',
      percent: '+0.75%',
      rating: '66761',
      rating2: '$66761',
    },
    {
      coinname: 'ETC/USDT',
      percent: '+0.75%',
      rating: '4056',
      rating2: '$4056',
    },
    {
      coinname: 'DOGE/USDT',
      percent: '+0.75%',
      rating: '0.25',
      rating2: '$0.25',
    },
    {
      coinname: 'BTC/USDT',
      percent: '+0.75%',
      rating: '66761',
      rating2: '$66761',
    },
    {
      coinname: 'ETC/USDT',
      percent: '+0.75%',
      rating: '4056',
      rating2: '$4056',
    },
    {
      coinname: 'DOGE/USDT',
      percent: '+0.75%',
      rating: '0.25',
      rating2: '$0.25',
    },
    {
      coinname: 'BTC/USDT',
      percent: '+0.75%',
      rating: '66761',
      rating2: '$66761',
    },
    {
      coinname: 'ETC/USDT',
      percent: '+0.75%',
      rating: '4056',
      rating2: '$4056',
    },
    {
      coinname: 'DOGE/USDT',
      percent: '+0.75%',
      rating: '0.25',
      rating2: '$0.25',
    },
    {
      coinname: 'BTC/USDT',
      percent: '+0.75%',
      rating: '66761',
      rating2: '$66761',
    },
    {
      coinname: 'ETC/USDT',
      percent: '+0.75%',
      rating: '4056',
      rating2: '$4056',
    },
    {
      coinname: 'DOGE/USDT',
      percent: '+0.75%',
      rating: '0.25',
      rating2: '$0.25',
    },
  ];
  // orta kisimdaki icon ve basliklari
  public c4contents = [
    {
      title: 'Yatirma',
      img: 'https://assets.staticimg.com/kucoin_m/0.6.5/static/deposit.adc109ea.svg',
    },
    {
      title: 'Ticaret Botu',
      img: 'https://assets.staticimg.com/kucoin_m/0.6.5/static/trading_bot.b132e811.svg',
    },
    {
      title: 'KuCoin Win',
      img: 'https://assets.staticimg.com/kucoin_m/0.6.5/static/trading_bot.b132e811.svg',
    },
    {
      title: 'Staking',
      img: 'https://assets.staticimg.com/kucoin_m/0.6.5/static/credit_card.5f1dc02e.svg',
    },
    {
      title: 'Kripto Borc Verme',
      img: 'https://assets.staticimg.com/kucoin_m/0.6.5/static/blog.60e2aa54.svg',
    },
    {
      title: 'Rewards Hub',
      img: 'https://assets.staticimg.com/kucoin_m/0.6.5/static/task_center_light.ab34be58.svg',
    },
    {
      title: 'Marjin Ticareti',
      img: 'https://assets.staticimg.com/kucoin_m/0.6.5/static/transfer.bfde9f8a.svg',
    },
    {
      title: 'Daha Fazla',
      img: 'https://assets.staticimg.com/kucoin_m/0.6.5/static/blog.60e2aa54.svg',
    },
  ];
  // en alt kisimdaki yukselen ve dusen coin listesi
  public up = [
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
    {
      id: 'BTC',
      id2: 'USDT',
      price: '5.3299',
      price$: '5.23234',
      change: '+150.3%',
    },
  ];

  public down = [
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
    {
      id: 'ETC',
      id2: 'USDT',
      price: '0.3299',
      price$: '0.23234',
      change: '-50.3%',
    },
  ];

  constructor(private activatedRoute: ActivatedRoute, public router: Router) {}
  // 3 tane swiperin content olustuktan sonra angular tarafindan algilanmasi
  ngAfterContentChecked() {
    if ((this.swiper, this.swiper1, this.swiper2)) {
      this.swiper.updateSwiper({});
      this.swiper1.updateSwiper({});
      this.swiper2.updateSwiper({});
    }
  }

  // yukselen ve dusenler kismindaki slide ileri geri
  slideNext() {
    this.swiper2.swiperRef.slideNext(500);
  }
  slidePrev() {
    this.swiper2.swiperRef.slidePrev(500);
  }

  // kayan yazi
  state = 0;

  scrollDone() {
    this.state++;
  }

  news() {
    this.router.navigate(['news']);
  }
}
