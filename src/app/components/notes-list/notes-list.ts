import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  imports: [],
  templateUrl: './notes-list.html',
  styleUrl: './notes-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesList {

}
