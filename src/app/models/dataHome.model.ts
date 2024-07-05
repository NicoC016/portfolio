export class DataModel{
    name!: string;
    imagePresentation!:string;
    aboutMe!: string;
    age!: string;
    direction!: string;
    job!: string;
    skillInformation!: string;
    notes!: NotesModel[];
    skill!: SkillModel[];
    informationContact!:contactModel[];
    videos: VideosModel[];

    constructor(){
        this.name = '';
        this.imagePresentation = '';
        this.aboutMe = '';
        this.age = '';
        this.direction = '';
        this.job = '';
        this.skillInformation = '';
        this.notes = [];
        this.skill = [];
        this.informationContact = [];
        this.videos = [];
    }
}


export class NotesModel{
    urlImage!:string;
    urlNota!:string;
    title!: string;
}
export class SkillModel{
    name!: string;
    rate!: string;
    urlImageLogo!: string
}

export class contactModel{
    linkedn!: string;
    mail!: string;
    phone!: string
}

export class VideosModel{
    url!:string
}