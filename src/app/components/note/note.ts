import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-note',
  imports: [],
  templateUrl: './note.html',
  styleUrl: './note.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Note {

}
