import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Excercise';
  firstName="Gedef";
  lastName="Shibabaw";
  isDisabled=true;
  myClass="red";

  cssStringVar: string= 'red size20';

  getClass(){
    return 'red';
  }
  hasError(){
    return true;
  
  }

  getBackground(){

    return 'Green';
  }
  onSave(){
    alert("Registerd Succuessfully")
  }


}
