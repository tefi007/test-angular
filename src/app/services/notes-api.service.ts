import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteCreate, Note } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {
	private _url = 'http://localhost:3000';

  constructor(
		private readonly _http: HttpClient
	) { }

	getAll(): Observable<Note[]> {
		return this._http.get<Note[]>(`${this._url}/notes`);
	}

	create(noteCreate: NoteCreate): Observable<Note> {
		return this._http.post<Note>(`${this._url}/notes`, {
			title: noteCreate.title,
			description: noteCreate.description
		});
	}

	deleteById(id: string) {}
}
