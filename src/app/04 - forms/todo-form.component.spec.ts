import { TodoFormComponent } from './todo-form.component';
import { FormBuilder } from '@angular/forms';

describe('TodoFormComponent', () => {
// declare component
  let component: TodoFormComponent; 

  beforeEach(() => {
    //   initialize component
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
      expect(component.form.contains('name')).toBeTruthy();
      expect(component.form.contains('email')).toBeTruthy();
  });

  it('should make the name control required', () => {
    //   Arrange
      let control = component.form.get('name');

    //   Act
      control.setValue('');

    //   Assert
      expect(control.valid).toBeFalsy();
  });
});