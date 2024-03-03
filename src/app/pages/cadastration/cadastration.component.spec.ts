import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrationComponent } from './cadastration.component';

describe('CadastrationComponent', () => {
  let component: CadastrationComponent;
  let fixture: ComponentFixture<CadastrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
