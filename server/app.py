#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource


# Local imports
from config import app, db, api


# Add your model imports
from models import *


# Views go here!
allowed_endpoints = ['signup', 'login', 'check_session']

# @app.before_request
# def check_if_logged_in():
#     if not session.get('user_id') and request.endpoint not in allowed_endpoints:
#         return {'error': 'Unauthorized'}, 401




class Users(Resource):

    def get(self):
        users = [user.to_dict() for user in User.query.all()]

        return make_response(users, 200)

api.add_resource(Users, '/users')

class UsersById(Resource):

    def get(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            return make_response({'error':'No User found by the given Id'})
        
        return make_response(user.to_dict(), 200)

    def patch(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            return make_response({'error':'No User found by the given Id'})
        try:
            patch_data = request.get_json()
            if 'password' in patch_data.keys():
                    user.password_hash = patch_data['password']
            for key, value in patch_data.items():
                setattr(user, key, value)

            db.session.commit()
            return make_response(user.to_dict(), 202)
        except Exception as e:
            return make_response({'errors':[str(e)]}, 400)

    def delete(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            return make_response({'error':'No User found by the given Id'})
        
        db.session.delete(user)
        return make_response({}, 204)

api.add_resource(UsersById, '/users/<int:id>')




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
        
        print(plant.image)
        return make_response(plant.to_dict(), 200)

api.add_resource(PlantById, '/plants/<int:id>')



class OwnedPlant(Resource):

    def get(self):
        owned = [owned.to_dict() for owned in OwnedPlants.query.all()]

        if not owned:
            return make_response({'error':'No instances of OwnedPlants founnd'}, 404)
        
        return make_response(owned, 200)
    
    def post(self):
        json_data = request.get_json()
        try:
            new_owned = OwnedPlants()
            new_owned.user_id = json_data['user_id']
            new_owned.plant_id = json_data['plant_id']
            db.session.add(new_owned)
            db.session.commit()
            
            return make_response(new_owned.to_dict(), 201)
        except Exception as e:
            return make_response({'errors':[str(e)]}, 422)
              
api.add_resource(OwnedPlant, '/owned_plants')

class OwnedPlantById(Resource):

    def get(self, id):
        owned = OwnedPlants.query.filter(OwnedPlants.id == id).first()

        if not owned:
            return make_response({'error':'No OwnedPlant found by the given Id'})
        
        return make_response(owned.to_dict(), 200)
    
    def delete(self, id):
        owned = OwnedPlants.query.filter(OwnedPlants.id == id).first()
        if not owned:
            return make_response({'error':'No OwnedPlant found by the given Id'})
        
        db.session.delete(owned)
        db.session.commit()

        return make_response({}, 204)


api.add_resource(OwnedPlantById, '/owned_plants/<int:id>')



class OwnedFishes(Resource):

    def get(self):
        owned = [owned.to_dict() for owned in OwnedFish.query.all()]
        if not owned:
            return make_response({'error':'We could not find any OwnedFish'})
        
        return make_response(owned, 200)
    
    def post(self):
        json_data = request.get_json()
        new_owned = OwnedFish()
        try:
            new_owned.fish_id = json_data['fish_id']
            new_owned.user_id = json_data['user_id']

            db.session.add(new_owned)
            db.session.commit()

            return make_response(new_owned.to_dict(), 201)
        except Exception as e:
            return make_response([str(e)], 422)
    
api.add_resource(OwnedFishes, '/owned_fish')



class OwnedFishesById(Resource):

    def get(self, id):
        owned = OwnedFish.query.filter(OwnedFish.id == id).first()

        if not owned:
            return make_response({'error':'No OwnedFish by the given Id.'})
        
        return make_response(owned.to_dict(), 200)

    def delete(self, id):
        owned = OwnedFish.query.filter(OwnedFish.id == id).first()

        if not owned:
            return make_response({'error':'No OwnedFish by the given Id.'})
        db.session.delete(owned)
        db.session.commit()

        return make_response({}, 204)
        
api.add_resource(OwnedFishesById, '/owned_fish/<int:id>')

class Tanks(Resource):

    def get(self):
        tanks = [tank.to_dict() for tank in Tank.query.all()]

        return make_response(tanks, 200)
    
api.add_resource(Tanks, '/tanks')



class CheckSession(Resource):
    
    def get(self):
        user = User.query.filter(User.id == session.get('user_id')).first()
        if not user:
            return make_response({'error': "Unauthorized: you must be logged in to make that request"}, 401)
        else:
            return make_response(user.to_dict(), 200)

api.add_resource(CheckSession, '/check_session', endpoint='check_session')



class Signup(Resource):
    
    def post(self):
        json = request.get_json()
        try:
            user = User(
                username=json['username'],
                first_name=json['first_name'],
                last_name = json['last_name'],
            )
            user.password_hash = json['password']
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            return make_response(user.to_dict(), 201)

        except Exception as e:
            return make_response({'errors': str(e)}, 422)
    
api.add_resource(Signup, '/signup', endpoint='signup')



class Login(Resource):

    def post(self):
        username = request.get_json()['username']

        user = User.query.filter(User.username == username).first()
        password = request.get_json()['password']

        if not user:
            response_body = {'error': 'User not found'}
            status = 404
        else:
            if user.authenticate(password):
                session['user_id'] = user.id
                response_body = user.to_dict()
                status = 200
            else:
                response_body = {'error': 'Invalid username or password'}
                status = 401
        return make_response(response_body, status)

api.add_resource(Login, '/login', endpoint='login')



class Logout(Resource):
    
    def delete(self):
        session['user_id'] = None
        return {}, 204
    
api.add_resource(Logout, '/logout', endpoint='logout')



if __name__ == '__main__':
    app.run(port=5555, debug=True)