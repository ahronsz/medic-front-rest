export class Confirmacion {
    cod_cit: string;
    especialidad: string;
    fecha: string;
    hora: string;
    estado: string;
    medico: Medico;
    sala: Sala;
    paciente: Paciente;
}

export class Medico {
    tipo: string;
    nombres: string;
    apellidos: string;
    foto: string;
}

export class Sala {
    numero: string;
    piso: string;
}

export class Paciente {
    nombres: string;
    apellidos: string;
}