const mongodb = require('../db/connect');
const {ObjectId} = require('mongodb');

const getContact = async (req, res, next) => {
  const contactId = req.params.id;
  const result = await mongodb.getDb().db().collection('contacts').findOne({ _id: new ObjectId(contactId) });
  if (result) {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "Contact not found" });
  }
};

const getContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

module.exports = { getContacts, getContact };