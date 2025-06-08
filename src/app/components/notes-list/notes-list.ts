import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { AsyncPipe } from '@angular/common';
import { NoteComponent } from '../note/note';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-notes-list',
  imports: [
		AsyncPipe,
		NoteComponent
	],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesList {
	private readonly _notesService = inject(NotesService)
	notes$ = this._notesService.getAll();

	constructor(
	) {
		// const obs$ = new Observable<number>((observer) => {
		// 	observer.next(5);
		// });

		// obs$.pipe(
		// 	tap((value) => {
		// 		console.log('Произошло получение данных в потоке', value);
		// 	}),
		// 	map(() => 10),
		// 	tap((value) => {
		// 		console.log('Произошло получение данных в потоке', value);
		// 	})
		// ).subscribe((value) => {
		// 	console.log(value, 'Подписка');
		// });
	}
}
