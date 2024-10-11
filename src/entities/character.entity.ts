export class character {
  private _name: string;
  private _image: string;
  private _race: Race;
  private _alignment: Alignment;
  private _attributes: Attributes;
  private _skills: Skills;
  private _equipment: Equipment;

  constructor(
    name: string,
    image: string,
  ) {
    this._name = name;
    this._image = image;
    
    this._race = new Race(); 
    this._alignment = new Alignment();
    this._attributes = new Attributes(); 
    this._skills = new Skills();
    this._equipment = new Equipment(); 
  }
  