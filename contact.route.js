const express = require("express");
const { router } = require("../../app");
const contact = require("../controllers/contact.controller");

const route = express.Router();

router.route("/")
    .get(contact.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contact.update)
    .delete(contact.delete);

module.exports = router;