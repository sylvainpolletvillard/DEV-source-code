import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'c3m-btn-file',
    templateUrl: './btn-file.component.html',
    styleUrls: ['./btn-file.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class BtnFileComponent {
    /* File List */
    files: FileList;

    /* OnChange method */
    onChange(files: FileList) {
        this.files = files;
    }
}
