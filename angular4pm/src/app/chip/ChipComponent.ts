import {Component, Input, Output, EventEmitter} from "@angular/core";



@Component({
    selector: "chip",
    templateUrl: "./chip.html",
    host: {
        "[class.pap-chip]": "true"
    }
})
export class ChipComponent {
    @Input() public label: string;
    /* tslint:disable:no-any */
    @Input() public payload: any;
    @Input() public onRemove: (payload: any, event: MouseEvent) => void;
    /* tslint:enable:no-any */
    @Input() public showRemoveBtn = true;
    @Input() public removeChipTxt: string="TATA";
    @Input() public showChipActionMenuBtn: boolean;
    @Output() public actionMenuEmitter = new EventEmitter<MouseEvent>();

    public showChipActionMenu: boolean;
    public supportChip: boolean;
    public showChipMenuTxt: string='Menu';

    constructor() {
        this.showChipActionMenu = true;
        this.supportChip = false;
    }

    public ngOnInit() {
        this.removeChipTxt="TATA";
    }

    public remove(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.onRemove(this.payload, event);
        
    }

    public openActionMenu(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        this.actionMenuEmitter.emit(event);
    }
}
