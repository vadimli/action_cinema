import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Host,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appEnterTheViewportNotifier]',
})
export class EnterTheViewportNotifierDirective implements AfterViewInit, OnDestroy {
  // Издатель события, который сработает при попадании элемента с директивой на экран
  // Издаёт true, когда элемент появляется на экране и false когда выходит с области видимости.
  @Output() visibilityChange = new EventEmitter<boolean>();

  private observer!: IntersectionObserver;

  // Ссылка на HTML элемент, содержащий директиву
  constructor(@Host() private elementRef: ElementRef) {}

  // Здесь мы создадим сам наблюдатель и настройки к нему.
  // А еще подпишемся на отслеживание компонента.
  public ngAfterViewInit(): void {
    const options: unknown = { root: null, rootMargin: '0px', threshold: 0.0 };
    this.observer = new IntersectionObserver(this.callback, options);
    this.observer.observe(this.elementRef.nativeElement);
  }

  public ngOnDestroy() {
    this.observer.disconnect();
  }
  // Обыкновенный колбэк, который проверяет наличие на экране IntersectionObserver,
  // как только элемент попадёт на экран, сработает и издаст true,
  // выйдет за пределы false.

  private callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      this.visibilityChange.emit(entry.isIntersecting);
    });
  };
}
