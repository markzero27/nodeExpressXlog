const express = require('express');
const router = express.Router();
let trips = require('../../data/trips');
const companies = require('../../data/companies');
const uuid = require('uuid');

router.get('/', (req, res) => {
  res.json(trips);
});

router.get('/:id', (req, res) => {
  const found = trips.some((trip) => trip.id == req.params.id);
  if (found) {
    res.json({
      message: 'success',
      data: trips.find((trip) => trip.id == req.params.id),
    });
  } else {
    res.json({ message: 'Trip not found!', data: null });
  }
});

router.post('/', (req, res) => {
  const newTrip = {
    status: 0,
    id: uuid.v4(),
    tripId: `TR-${20200000 + trips.length}`,
    company: companies.find((company) => company.id == req.body.companyId),
    deliveryDate: req.body.deliveryDate,
    origin: {
      address: req.body.originAddress,
      longitude: req.body.originLng,
      latitude: req.body.originLat,
    },
    destination: {
      address: req.body.destinationAddress,
      longitude: req.body.destinationLng,
      latitude: req.body.destinationLat,
    },
  };
  trips.push(newTrip);
  res.json(newTrip);
});

router.put('/:id', (req, res) => {
  const found = trips.some((trip) => trip.id == req.params.id);

  if (found) {
    const i = trips.findIndex((trip) => trip.id == req.params.id);
    trips[i].status = req.body.status;
    res.json({
      message: 'success',
      data: trips[i],
    });
  } else {
    res.json({ message: 'Trip not found!', data: null });
  }
});

router.delete('/:id', (req, res) => {
  const found = trips.some((trip) => trip.id == req.params.id);

  if (found) {
    trips = trips.filter((trip) => trip.id != req.params.id);
    res.json({
      message: 'success',
      data: trips,
    });
  } else {
    res.json({ message: 'Trip not found!', data: null });
  }
});

router.get('/status/:status', (req, res) => {
  const found = trips.some((trip) => trip.status == req.params.status);
  if (found) {
    setTimeout(() => {
      res.json({
        message: 'success',
        data: trips.filter((trip) => trip.status == req.params.status),
      });
    }, 500);
  } else {
    res.json({ message: 'Trip not found!', data: null });
  }
});

module.exports = router;
