import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
public text1:any;
public img1:any;

public cardtextimg = [
  {
  habericerik: 'Herhangi Birine Tavsiye Ederek Tavsiye Başına 2 USDT Daha Kazanın!​',
  img: 'https://firebasestorage.googleapis.com/v0/b/ionicdeneme-db26d.appspot.com/o/4.png?alt=media&token=962f34a4-d013-4706-84aa-1ac3267c8291',
}
];
  constructor(private activatedRoute:ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.text1 = this.activatedRoute.snapshot.paramMap.get('text');
    this.img1 = this.activatedRoute.snapshot.paramMap.get('img');
  }

}
