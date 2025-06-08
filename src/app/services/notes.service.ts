import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap, tap } from 'rxjs';
import { Note, NoteCreate } from '../models';
import { NotesApiService } from './notes-api.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

	private readonly _notes$$ = new BehaviorSubject<Note[]>([]);

  constructor(
		private readonly _notesApiService: NotesApiService
	) { }

	getAll(): Observable<Note[]> {
		return this._notesApiService.getAll().pipe(
			tap((notes) => {
				this._notes$$.next(notes);
			}),
			switchMap(() => this._notes$$.asObservable())
		);
	}

	create(noteCreate: NoteCreate): Observable<Note> {
		return this._notesApiService.create(noteCreate).pipe(
			switchMap((noteCreated) => {
				return this.getAll().pipe(
					map(() => noteCreated)
				);
			})
		);
	}


}
