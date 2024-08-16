import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  filterForm: FormGroup;

  categories = ["men's clothing", "jewelery", "electronics", "women's clothing"];
  priceRanges = [' <$50', '$50 - $100', '$100 - $200', 'Above $200'];

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group(
      this.buildFormControls([...this.categories, ...this.priceRanges])
    );
  }

  buildFormControls(items: string[]) {
    const controls: { [key: string]: boolean } = {};
    items.forEach(item => controls[item] = false);
    return controls;
  }

  onSubmit() {
    const selectedFilters = this.filterForm.value;
    console.log('Selected Filters:', selectedFilters);
  }
}
