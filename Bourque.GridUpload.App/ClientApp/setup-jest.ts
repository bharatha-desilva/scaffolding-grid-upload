import 'jest-preset-angular/setup-jest';
import 'jest-preset-angular/ngcc-jest-processor';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To work around the issue of the Angular Material theme file throwing warnings about not being loaded while running jest
// we can work around that issue using the following script, found in this Github issue ticket
//     https://github.com/thymikee/jest-preset-angular/issues/83
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const global: any;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
const style = global['document'].createElement('style');
// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
style.innerHTML = `
  .mat-theme-loaded-marker {
    display: none;
}`;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
global['document'].head.appendChild(style);
