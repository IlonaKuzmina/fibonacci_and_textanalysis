import { Component } from '@angular/core';

@Component({
  selector: 'app-text-analysis',
  templateUrl: './text-analysis.component.html',
  styleUrls: ['./text-analysis.component.scss'],
})
export class TextAnalysisComponent {
  givenString!: string[];
  countedLetters!: {[key:string]: number};

  getString(givenString: string): void {
    this.givenString = givenString
      .toLocaleLowerCase()
      .replace(/\s/g, '')
      .split('');
    this.calculateLetters();
  }

  calculateLetters(): void {
    const stringArr = this.givenString;
    const letterObj: { [key: string]: number } = {};

    stringArr.forEach((letter) => {
      if (!letterObj[letter]) {
        letterObj[letter] = 1;
      } else {
        letterObj[letter] += 1;
      }
    });

    this.countedLetters = letterObj;
  }

}
