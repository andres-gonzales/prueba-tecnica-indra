
const AWS = require('aws-sdk')
const axios = require('axios');
const Persona = require('../modelo/persona.js')
const { TABLA_PERSONAS, IS_OFFLINE } = process.env
const dynamoDb =
	IS_OFFLINE === 'true'
    ? new AWS.DynamoDB.DocumentClient({
		region: 'localhost',
		endpoint: 'http://localhost:8000',
	})
    : new AWS.DynamoDB.DocumentClient()
	
class Persona_Logica {
	
	constructor(){
		
	}
	
	async getPersonas(){
		const params = {
			TableName: TABLA_PERSONAS,
		}
		
		try {
			const data = await dynamoDb.scan(params).promise()
			return data.Items
		} catch (err) {
			//mensaje indicando el error
			console.log("Error:", err.message)
			return null
		}
	}
	
	async registrarPersona(id){
		
		
		var cadena = 'https://swapi.py4e.com/api/people/' + id
		var response = null
		//llamar al api de Star Wars
		try{
			response = await axios.get(cadena)
		} catch (err) {
			//mensaje indicando el error
			console.log("Error:", err.message)
			return null
		}
		
		//inicializar objeto persona
		let persona = new Persona(id, response.data.name, response.data.birth_year, response.data.eye_color, response.data.gender, response.data.hair_color, response.data.height,
									response.data.mass, response.data.skin_color, response.data.homeworld, response.data.films, response.data.species, response.data.starships,
									response.data.vehicles, response.data.url, response.data.created, response.data.edited)
  
		//declara parametros para insertar en la tabla
		const params = {
			TableName: TABLA_PERSONAS,
			Item: persona,
		}

		try {
			const data = await dynamoDb.put(params).promise()
			return persona
		} catch (err) {
			//mensaje indicando el error
			console.log("Error:", err.message)
			return null
		}
	}
}
module.exports = Persona_Logica;