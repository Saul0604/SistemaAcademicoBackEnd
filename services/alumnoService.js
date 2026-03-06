class alumnoService {
    constructor() {
        this.alumnos = [];
    }

    create(nombre, matricula) {
        const newAlumno = {
            id: this.alumnos.length > 0 ? Math.max(...this.alumnos.map(a => a.id)) + 1 : 1,
            nombre: nombre,
            matricula: matricula
        };
        this.alumnos.push(newAlumno);
        return newAlumno;
    }

    getAll() {
        return this.alumnos;
    }

    update(id, nombre, matricula) {
        const index = this.alumnos.findIndex(item => item.id == id);
        if (index === -1) {
            throw new Error('ID No encontrado');
        }
        
        this.alumnos[index] = {
            id: this.alumnos[index].id,
            nombre: nombre || this.alumnos[index].nombre,
            matricula: matricula || this.alumnos[index].matricula
        };
        
        return this.alumnos[index];
    }

    delete(id) {
        const index = this.alumnos.findIndex(item => item.id == id);
        if (index === -1) {
            throw new Error('ID No encontrado');
        }
        const deletedAlumno = this.alumnos[index];
        this.alumnos.splice(index, 1);
        return deletedAlumno;
    }
}

module.exports = alumnoService;