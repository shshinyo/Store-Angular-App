import { FormControl } from '@angular/forms';

export interface IAddEditProductFormGroup {
  title: FormControl<string | null>;
  price: FormControl<number | null>;
  description: FormControl<string | null>;
  image: FormControl<string | null>;
  category: FormControl<string | null>;
}
