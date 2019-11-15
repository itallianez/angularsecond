import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  template:`
    <div class="wrapper warning">
        <p>Warning</p>
    </div>
    <style>
      .wrapper{
        max-width: 767px;
        margin: 0 auto;
        border-radius: 15px;
        border: 3px solid rgb(215, 0, 44);
        padding: 20px;
        background: rgba(215, 0, 44, 0.3);
      }
      p{
          color: rgba(215, 0, 144, 0.9);
          font-size: 24px;
          font-weight: 600;
      }
    </style>
  `,
  styles: [' ']
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
