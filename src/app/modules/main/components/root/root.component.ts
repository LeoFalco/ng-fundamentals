import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/services/layout/layout.service';

declare class Favico {
  constructor({ animation }: { animation: string })

  badge(value: number): void;
}

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

    const favicon = new Favico({
      animation: 'popFade'
    });

    favicon.badge(1);

    this.subscription = this.layoutService.isNavigationPending$
    .subscribe(pending => {
      pending ? this.spinner.show() : this.spinner.hide(undefined, 300);
    });
  }

}
