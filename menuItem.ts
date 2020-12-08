export class MenuItem{
  private _label:string;
  private _items:SubMenuItem[];
  private _routerLink:string;
  private _logo:string;
  constructor(label: string, items: SubMenuItem[], routerLink: string,
              logo: string) {
    this._label = label;
    this._items = items;
    this._routerLink = routerLink;
    this._logo = logo;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get items(): SubMenuItem[] {
    return this._items;
  }

  set items(value: SubMenuItem[]) {
    this._items = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }

  get logo(): string {
    return this._logo;
  }

  set logo(value: string) {
    this._logo = value;
  }

}


export class SubMenuItem{

  private _label:string;
  private _routerLink:string;
  private _icon:string;
  constructor(label: string, routerLink: string, icon: string) {
    this._label = label;
    this._routerLink = routerLink;
    this._icon = icon;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

}
