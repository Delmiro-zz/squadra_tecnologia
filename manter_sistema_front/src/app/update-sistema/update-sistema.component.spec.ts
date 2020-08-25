import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateSistemaComponent } from './update-sistema.component';

describe('UpdateEmployeeComponent', () => {
  let component: UpdateSistemaComponent;
  let fixture: ComponentFixture<UpdateSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
