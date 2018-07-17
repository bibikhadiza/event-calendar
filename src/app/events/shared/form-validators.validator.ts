import { FormControl } from '@angular/forms';

export function restrictedWords(wordsCollection) {
  return (control: FormControl): {[key: string]: any} => {
    if (!wordsCollection) { return null; }
    const invalidWords = wordsCollection
      .map( w => control.value.includes(w) ? w : null)
      .filter(w => w !== null );

      return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(',')} : null;
  };
}
