export class Alert {
    _type: AlertType;
    _text: string;
    _autoClose: boolean;
    _autoCloseTime: number;
    _dismissable: boolean;

    constructor(type: AlertType, text: string, autoClose: boolean, autoCloseTime: number, dismissable: boolean = true) {
        this._type = type;
        this._text = text;
        this._autoClose = autoClose;
        this._autoCloseTime = autoCloseTime;
        this._dismissable = dismissable;
    }

    get type() {
        return this._type;
    }

    get text() {
        return this._text;
    }

    get autoClose() {
        return this._autoClose;
    }
    
    get autoCloseTime() {
        return this._autoCloseTime;
    }

    get dismissable() {
        return this._dismissable;
    }
}

export enum AlertType {
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
    Danger = 'danger'
}