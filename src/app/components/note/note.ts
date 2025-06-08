import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Note } from '../../models';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrl: './note.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteComponent {
	@Input({ required: true }) note!: Note;
}
