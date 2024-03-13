#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import *


# Views go here!

class Fish(Resource):

    def get(self):
        fishes = [fish.to_dict() for fish in FreshwaterFish.query.all()]
        return make_response(fishes,  200)
       

api.add_resource(Fish, '/freshwater_fish')

class Plants(Resource):

    def get(self):
        plants = [plant.to_dict() for plant in Plant.query.all()]
        return make_response(plants, 200)

api.add_resource(Plants, '/plants')




if __name__ == '__main__':
    app.run(port=5555, debug=True)

