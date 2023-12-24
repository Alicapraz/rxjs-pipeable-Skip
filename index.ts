import { from } from 'rxjs';
import { skip, filter } from 'rxjs/operators';

const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
numArrayObs.pipe(skip(3)).subscribe(console.log);

//Aynı işlemi filter ile de yapabiliriz
const numArrayObs2 = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
numArrayObs2
  .pipe(filter((val, index) => index > 2))
  .subscribe((val) => console.log(val));
