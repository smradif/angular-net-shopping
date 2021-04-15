import { Directive } from "@angular/core";
import { SubSink } from "../utils/sub-sink.util";

@Directive({
    selector: 'app-base',
  })
export class BaseComponent {
    public subs = new SubSink();

    public ngOnDestroy() {
        this.subs.unsubscribe();
    }
}