import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { LayoutService } from 'src/app/services/layout/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, OnDestroy {

  constructor(private layoutService: LayoutService, private spinner: NgxSpinnerService) { }

  private subscription: Subscription;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.layoutService.isNavigationPending$
    .subscribe(pending => {
      pending ? this.spinner.show() : this.spinner.hide(undefined, 300);
    });
  }

}
