import {Component, Output, EventEmitter} from '@angular/core';

@Component(
{
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.Component.css']
})

export class headerComponent{
@Output() featureSelector = new EventEmitter<string>();

    onSelect(feature:string)
    {
        this.featureSelector.emit(feature);
    }
}