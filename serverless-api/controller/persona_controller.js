//const uuid = require('node-uuid')
const Persona = require('../modelo/persona.js')
const Persona_Logica = require('../logica/persona_logica.js')


module.exports = function(app){

	//inicializa la logica para acceder a sus métodos
	let logica = new Persona_Logica()

	//GET que lista a todas las personas que se encuentran en la base de datos
	app.get('/personas', (req, res) => {
		
		//Busca personas en la base de datos
		logica.getPersonas().then(personas => {
			
			//En caso de error
			if(personas == null){
				res.status(400).json({ error: 'Error al obtener personas' })
			}
			//Retorna la lista de personas
			else{
				res.json({ personas })
			}
		})
		
	})

	app.post('/persona/registrar/:id', (req, res) => {
		try{
			logica.registrarPersona(req.params.id).then(persona => {
				//En caso de error
				if(persona == null){
					res.status(400).json({ error: 'Error al registrar persona' })
				}
				//Retorna la persona registrada
				else{
					res.json({ persona })
				}
			})
		}catch{
			res.status(400).json({ error: 'Error al registrar persona' })
		}
	})
	
}