import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    isDisabled = true;

    constructor() {}

    async scrolling($event) {
         //実際のスクロールが行われる要素を取得
        const scrollElement = await $event.target.getScrollElement();

         //スクロールの全体の高さ
        const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;

         //今のscroll位置
        const currentScrollDepth = scrollElement.scrollTop;

         if(currentScrollDepth == scrollHeight) {
            console.log('scrolled!!');
            this.isDisabled = false;

         }
    }
}
