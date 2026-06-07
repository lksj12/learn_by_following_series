export interface IListItem {
    id: string;
    item: string;
    checked: boolean;
}

export default class ListItem implements IListItem {
    private _id: string;
    private _item: string;
    private _checked: boolean;

    constructor(
        id: string = "",
        item: string = "",
        checked: boolean = false
    ) {
        this._id = id;
        this._item = item;
        this._checked = checked;
    }

    get id(): string {
        return this._id;
    }

    get item(): string {
        return this._item;
    }

    get checked(): boolean {
        return this._checked;
    }

    set id(id: string) {
        this._id = id;
    }

    set item(item: string) {
        this._item = item;
    }

    set checked(checked: boolean) {
        this._checked = checked;
    }
}