const schema = {
    type: 'object',
      properties: {
        clientId: {type: 'string', minLength: 2, maxLength: 5,},
        firstName: {type: 'string'},
        lastName: {type: 'string'}, 
        email: {type: 'string', format: 'email'},
        gender: {type: 'string'},
        ipAddress: {type: 'string', format: 'ipv4'},
        
      },
    additionalProperties: false,
    required: ['firstName'],
  };

  module.exports = {schema};



 

