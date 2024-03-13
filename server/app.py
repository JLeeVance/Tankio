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

class FishById(Resource):

    def get(self, id):
        fish = FreshwaterFish.query.filter(FreshwaterFish.id == id).first()

        if not fish:
            return make_response({'error': 'No fish found}'}, 404)
        
        return make_response(fish.to_dict(), 200)
    
api.add_resource(FishById, '/freshwater_fish/<int:id>')


class Plants(Resource):

    def get(self):
        plants = [plant.to_dict() for plant in Plant.query.all()]
        return make_response(plants, 200)

api.add_resource(Plants, '/plants')

class PlantById(Resource):

    def get(self, id):
        plant = Plant.query.filter(Plant.id == id).first()

        if not plant:
            return make_response({'error':'No plant found'}, 404)
        
        return make_response(plant.to_dict(), 200)

api.add_resource(PlantById, '/plants/<int:id>')

class OwnedPlant(Resource):

    def get(self):
        owned = [owned.to_dict() for owned in OwnedPlants.query.all()]

        if not owned:
            return make_response({'error':'No instances of OwnedPlants founnd'}, 404)
        
        return make_response(owned, 200)
    
api.add_resource(OwnedPlant, '/owned_plants')

class OwnedFishes(Resource):

    def get(self):
        owned = [owned.to_dict() for owned in OwnedFish.query.all()]

        if not owned:
            return make_response({'error':'We could not find any OwnedFish'})
        
        return make_response(owned, 200)
    
api.add_resource(OwnedFishes, '/owned_fish')


if __name__ == '__main__':
    app.run(port=5555, debug=True)