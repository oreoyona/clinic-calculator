import { Component, Input } from "@angular/core";

@Component({
    selector: 'apgar',
    templateUrl: 'apgar.component.html',
    styleUrls: ['apgar.component.css'],
    standalone: true,
})
export class ApgarComponent {
    @Input() modes: string[];
    @Input() currentMode: string;

    items = [
        "option 1", "option 2"
    ];

    message = "";

    onItemTap(event) {

        this.message = event

    }
}