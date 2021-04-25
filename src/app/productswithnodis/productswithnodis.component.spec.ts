import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductswithnodisComponent } from './productswithnodis.component';

describe('ProductswithnodisComponent', () => {
  let component: ProductswithnodisComponent;
  let fixture: ComponentFixture<ProductswithnodisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductswithnodisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductswithnodisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
