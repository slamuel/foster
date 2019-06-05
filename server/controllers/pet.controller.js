const Pet = require('mongoose').model('Pet');
const { Http } = require('@status/codes');

module.exports = {
    // gets all of resources (Bike)
    index(request, response) {
    Pet.find({})
        .then(pets => response.json(pets))
        .catch(error => response.status(Http.InternalServerError).json(error));
    },

    // create a resource
    create(request, response) {
    Pet.create(request.body)
        .then(pet => response.json(pet))
        .catch(error => {
        const errors = Object.keys(error.errors).map(
            key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
        });
    },

    // get single resource
    show(request, response) {
    const { pet_id: petId } = request.params;
    Pet.findById(petId)
        .then(pet => response.json(pet))
        .catch(error => response.status(Http.NoContent).json(error));
    },

    // update a resource
    update(request, response) {
    const { pet_id: petId } = request.params;
    Pet.findByIdAndUpdate(petId, { $set: request.body }, { new: true })
        .then(pet => response.json(pet))
        .catch(error => {
        const errors = Object.keys(error.errors).map(
            key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
        });
    },

    // remove/delete/destroy single resource
    destroy(request, response) {
    const { pet_id: petId } = request.params;
    Pet.findByIdAndRemove(petId)
        .then(pet => response.json(pet))
        .catch(error => response.status(Http.InternalServerError).json(error));
    }
};