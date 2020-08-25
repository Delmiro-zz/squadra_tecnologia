import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SistemaDetailsComponent } from './sistema-details.component';

describe('SistemaDetailsComponent', () => {
  let component: SistemaDetailsComponent;
  let fixture: ComponentFixture<SistemaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SistemaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
