class Persona {
	constructor(personaId, nombre, ano_nacimiento, color_ojo, genero, color_pelo, altura,
				masa, color_piel, lugar_nacimiento, peliculas, especies, naves_espaciales,
				vehiculos, url, creado, editado,){
		this.personaId = personaId;
		this.nombre = nombre;
		this.ano_nacimiento = ano_nacimiento;
		this.color_ojo = color_ojo;
		this.genero = genero;
		this.color_pelo = color_pelo;
		this.altura = altura;
		this.masa = masa;
		this.color_piel = color_piel;
		this.lugar_nacimiento = lugar_nacimiento;
		this.peliculas = peliculas;
		this.especies = especies;
		this.naves_espaciales = naves_espaciales;
		this.vehiculos = vehiculos;
		this.url = url;
		this.creado = creado;
		this.editado = editado;
		
	}
}

module.exports = Persona;