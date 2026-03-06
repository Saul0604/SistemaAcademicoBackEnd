class alumnoService{
    constructor(){
        this.alumnos=[];
    }
    async create(nombre, matricula){
        const newAlumno = {
            id: this.alumnos.length+1,
            nombre: nombre,
            matricula: matricula
        }
    }
    async getAll(){
        return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve(this.alumnos);
      }, 10000)
        })
    }
    async Update(id,nombre, matricula){
        const index = this.alumnos.findIndex(item => item.id == id);
        if (index == -1){
      throw Error('Id Not Found');
        }
        const alumnoModificado = this.alumnos[index];
        this.alumnos[index] = {
        ...nombre,
        ...matricula
        };
    return this.alumnos[index]
    }
    async delete(id){
        const index = this.alumnos.findIndex(item => item.id == id);
        if (index == -1){
            throw Error('Product Not Found');
        }
        this.products.splice(index, 1);
            return id
    }
}

module.exports = alumnoService;