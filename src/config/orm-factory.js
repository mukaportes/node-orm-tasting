const ormFactory = (orm) => {
    switch (orm) {
        case 'sequelize':
            console.log('Sequelize chosen')
            break;
        case 'loopback':
            console.log('Loopback chosen')
            break;
        case 'waterline':
            console.log('Waterline chosen')
            break;
        case 'typeOrm':
            console.log('TypeORM chosen')
            break;
        case 'caminte':
            console.log('Caminte chosen')
            break;
        case 'objection':
            console.log('Objection.js chosen')
            break;
        case 'jsData':
            console.log('JsData chosen')
            break;
        case 'jugglingDb':
            console.log('JugglingDB chosen')
            break;
        case 'persistence':
            console.log('Persistence chosen')
            break;
        case 'mapper':
            console.log('Mapper chosen')
            break;
    
        default:
            throw new Error('Invalid ORM given.')
    }
}

module.exports = ormFactory;