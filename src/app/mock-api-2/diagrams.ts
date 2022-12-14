import { Diagram, DiagramState } from "../types/diagram.type";

export const DIAGRAMS: Diagram[] = [
    new Diagram()
        .set('id_diag', 1)
        .set('name_diag', 'Diagram 1')
        .set('description', 'Description 1')
        .set('id_base', 2)
        .set('id_body', 1)
        .set('id_blade', 3)
        .set('state', DiagramState.Pendiente)
        .set('create_by', 1)
        .set('edit_by', 0)
        .set('delete_by', 0),
    new Diagram()
        .set('id_diag', 2)
        .set('name_diag', 'Diagram 2')
        .set('description', 'Description 2')
        .set('id_base', 2)
        .set('id_body', 1)
        .set('id_blade', 3)
        .set('state', DiagramState.Aprobado)
        .set('create_by', 1)
        .set('edit_by', 0)
        .set('delete_by', 0),
    new Diagram()
        .set('id_diag', 3)
        .set('name_diag', 'Diagram 3')
        .set('description', 'Description 3')
        .set('id_base', 2)
        .set('id_body', 1)
        .set('id_blade', 3)
        .set('state', DiagramState.Rechazado)
        .set('create_by', 1)
        .set('edit_by', 0)
        .set('delete_by', 0),
];