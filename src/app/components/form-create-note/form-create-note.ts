import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-create-note',
  imports: [
    ReactiveFormsModule
	],
  templateUrl: './form-create-note.html',
  styleUrl: './form-create-note.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCreateNote {
  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.required])
  });
}
