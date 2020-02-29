import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  isSpinnerVisibile$: Observable<boolean> = this.layoutService.isNavigationPending$;

  constructor(private layoutService: LayoutService, private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.layoutService.isNavigationPending$.subscribe(pending => {


      if (pending) {
        this.spinner.show()
      } else {
        this.spinner.hide(undefined, 300)
      }

    })
  }

}
