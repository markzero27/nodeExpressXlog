const uuid = require('uuid');

const Trips = [
  {
    status: 2,
    id: uuid.v4(),
    tripId: 'TR-20200001',
    company: {
      id: uuid.v4(),
      address: 'SMCO stall 151, G/F SM City Cagayan de Oro',
      imageUrl: '',
      name: 'Royalty Lorem',
    },
    deliveryDate: new Date().toISOString(),
    origin: {
      address: 'Mastersons Avenue corner Gran Via Street',
      latitude: 0.0,
      longitude: 0.0,
    },
    destination: {
      address: '408 A & B Regina Building 408 Escolta Street 1113',
      latitude: 0.0,
      longitude: 0.0,
    },
  },
  {
    status: 0,
    id: uuid.v4(),
    tripId: 'TR-20200002',
    company: {
      id: uuid.v4(),
      address: 'Mastersons Avenue corner Gran Via ',
      imageUrl: '',
      name: 'Royalty Lorem',
    },
    deliveryDate: new Date().toISOString(),
    origin: {
      address: '408 A & B Regina Building 408 Escolta Street 1113 ',
      latitude: 0.0,
      longitude: 0.0,
    },
    destination: {
      address: 'Street SMCO stall 151, G/F SM City Cagayan de Oro',
      latitude: 0.0,
      longitude: 0.0,
    },
  },
  {
    status: 1,
    id: uuid.v4(),
    tripId: 'TR-20200003',
    company: {
      id: uuid.v4(),
      address: 'SMCO stall 151, G/F SM City Cagayan de Oro',
      imageUrl: '',
      name: 'Royalty Lorem',
    },
    deliveryDate: new Date().toISOString(),
    origin: {
      address: 'Mastersons Avenue corner Gran Via Street',
      latitude: 0.0,
      longitude: 0.0,
    },
    destination: {
      address: '408 A & B Regina Building 408 Escolta Street 1113',
      latitude: 0.0,
      longitude: 0.0,
    },
  },
  {
    status: 3,
    id: uuid.v4(),
    tripId: 'TR-20200004',
    company: {
      id: uuid.v4(),
      address: 'Mastersons Avenue corner Gran Via ',
      imageUrl: '',
      name: 'Royalty Lorem',
    },
    deliveryDate: new Date().toISOString(),
    origin: {
      address: '408 A & B Regina Building 408 Escolta Street 1113 ',
      latitude: 0.0,
      longitude: 0.0,
    },
    destination: {
      address: 'Street SMCO stall 151, G/F SM City Cagayan de Oro',
      latitude: 0.0,
      longitude: 0.0,
    },
  },
  {
    status: 2,
    id: uuid.v4(),
    tripId: 'TR-20200005',
    company: {
      id: uuid.v4(),
      address: 'SMCO stall 151, G/F SM City Cagayan de Oro',
      imageUrl: '',
      name: 'Royalty Lorem',
    },
    deliveryDate: new Date().toISOString(),
    origin: {
      address: 'Mastersons Avenue corner Gran Via Street',
      latitude: 0.0,
      longitude: 0.0,
    },
    destination: {
      address: '408 A & B Regina Building 408 Escolta Street 1113',
      latitude: 0.0,
      longitude: 0.0,
    },
  },
  {
    status: 0,
    id: uuid.v4(),
    tripId: 'TR-20200006',
    company: {
      id: uuid.v4(),
      address: 'Mastersons Avenue corner Gran Via ',
      imageUrl: '',
      name: 'Royalty Lorem',
    },
    deliveryDate: new Date().toISOString(),
    origin: {
      address: '408 A & B Regina Building 408 Escolta Street 1113 ',
      latitude: 0.0,
      longitude: 0.0,
    },
    destination: {
      address: 'Street SMCO stall 151, G/F SM City Cagayan de Oro',
      latitude: 0.0,
      longitude: 0.0,
    },
  },
  {
    status: 1,
    id: uuid.v4(),
    tripId: 'TR-20200007',
    company: {
      id: uuid.v4(),
      address: 'SMCO stall 151, G/F SM City Cagayan de Oro',
      imageUrl: '',
      name: 'Royalty Lorem',
    },
    deliveryDate: new Date().toISOString(),
    origin: {
      address: 'Mastersons Avenue corner Gran Via Street',
      latitude: 0.0,
      longitude: 0.0,
    },
    destination: {
      address: '408 A & B Regina Building 408 Escolta Street 1113',
      latitude: 0.0,
      longitude: 0.0,
    },
  },
  {
    status: 3,
    id: uuid.v4(),
    tripId: 'TR-20200008',
    company: {
      id: uuid.v4(),
      address: 'Mastersons Avenue corner Gran Via ',
      imageUrl: '',
      name: 'Royalty Lorem',
    },
    deliveryDate: new Date().toISOString(),
    origin: {
      address: '408 A & B Regina Building 408 Escolta Street 1113 ',
      latitude: 0.0,
      longitude: 0.0,
    },
    destination: {
      address: 'Street SMCO stall 151, G/F SM City Cagayan de Oro',
      latitude: 0.0,
      longitude: 0.0,
    },
  },
];

module.exports = Trips;
