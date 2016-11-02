import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  	<h1>My First Angular App</h1>
  	<h2 i18n="header">Login form</h2>
	<div>
	  <span i18n>Email</span>
	  <input type="text" placeholder="Your email" i18n-placeholder>
	</div>
	<div>
	  <span i18n>Password</span>
	  <input type="password" placeholder="Password" i18n-placeholder>
	</div>

	<hr>

	<div i18n>If you want to search something, go to <a href="http://google.com">Google</a></div>
  	`
})
export class AppComponent { }
