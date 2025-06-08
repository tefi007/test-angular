import { ChangeDetectionStrategy, Component, DestroyRef } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';
import { NotesApiService } from '../../services/notes-api.service';
import { NotesService } from '../../services/notes.service';

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

  constructor(
    private readonly _notesService: NotesService,
    private readonly _destroyRef: DestroyRef
  ) { }

  sendForm(): void {
    const note = {
      title: this.form.value.title || '',
      description: this.form.value.description || ''
    };

    this.form.reset();

    this._notesService.create(note)
      .pipe(
        takeUntilDestroyed(this._destroyRef), // отписать от подписки при уничтожении компонента
        take(1) // отписать, если поток ответил первый раз
      )
      .subscribe(); // из-за этой строчки происходит интернет запрос и создаётся запись в БД json-server
  }
}
