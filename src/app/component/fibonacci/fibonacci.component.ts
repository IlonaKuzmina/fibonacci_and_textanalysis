import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
})
export class FibonacciComponent {
  @ViewChild('fibonacciInput') fibonacciInput: ElementRef | undefined;
  givenNumber!: number;
  fibonacciResult!: number[];
  result: any;

  getNumber(givenNumber: string): void {
    this.givenNumber = Number(givenNumber);
    this.focusInputElement();
    this.calculateFibonacci();
  }

  calculateFibonacci(): void {
    const fibSequence = [0, 1];
    const firstFibNumberLength = fibSequence.length;

    for (let i = 0; i < this.givenNumber - firstFibNumberLength; i++) {
      const nextFibNumber = fibSequence[i] + fibSequence[i + 1];
      fibSequence.push(nextFibNumber);
    }

    this.fibonacciResult = fibSequence;
  }

  focusInputElement(): void {
    this.fibonacciInput?.nativeElement.focus();
  }
}
