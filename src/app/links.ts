export class Link {
    constructor(public text: string, public fragment: string) {}
}

export const NAV_LINKS: Link[] = [
    new Link('Partes', 'parts'),
    new Link('Armado', 'assembly'),
    new Link('Usuarios', 'users'),
    new Link('Diagramas', 'diagrams'),
    new Link('Op Diagrams', 'operator_diagrams'),
];

export const PROFILE_LINKS: Link[] = [
    new Link('Perfil', 'profile')
];