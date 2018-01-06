import { Component } from '@angular/core';
import { MyPageComponent } from './my-page/my-page.component'
import { MyPage2Component } from './my-page2/my-page2.component'
 
@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {

	my_page;

	showpage1(){
		this.my_page = MyPageComponent;
	}

	showpage2(){
		this.my_page = MyPage2Component;
	}


}
