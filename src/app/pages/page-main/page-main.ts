import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormCreateNote } from '../../components/form-create-note/form-create-note';
import { NotesList } from '../../components/notes-list/notes-list';

@Component({
  selector: 'app-page-main',
  imports: [
    FormCreateNote,
    NotesList
  ],
  templateUrl: './page-main.html',
  styleUrl: './page-main.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageMain {

}
