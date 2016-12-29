import { Component, Input } from '@angular/core';

@Component ({
    selector: 'header-element',
    templateUrl: './header.element.html',
    styleUrls: ['./header.element.css']
})

export class HeaderElement {
    @Input() text: string;
}
