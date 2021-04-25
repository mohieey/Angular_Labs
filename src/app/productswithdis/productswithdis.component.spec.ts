import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductswithdisComponent } from './productswithdis.component';

describe('ProductswithdisComponent', () => {
  let component: ProductswithdisComponent;
  let fixture: ComponentFixture<ProductswithdisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductswithdisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductswithdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
