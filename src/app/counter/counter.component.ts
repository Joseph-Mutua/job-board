import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared/shared.module';
import { increment, decrement, reset } from '../store/actions/counter.actions';

@Component({
  standalone: true,
  selector: 'app-counter',
  templateUrl: 'counter.component.html',
  imports: [SharedModule],
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ kamtu: number }>) {
    this.count$ = store.select('kamtu');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
