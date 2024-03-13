from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates

from config import db, bcrypt

# Models go here!

class Plant(db.Model, SerializerMixin):

    __tablename__ = 'plants'

    id = db.Column(db.Integer, primary_key=True)
    common_name = db.Column(db.String)
    scientific_name = db.Column(db.String)
    bio = db.Column(db.String)
    origin = db.Column(db.String)
    care_level = db.Column(db.String)
    lighting_needs = db.Column(db.String)
    substrate = db.Column(db.String)
    image = db.Column(db.String)
    filtration = db.Column(db.Integer)

    ownedplants = db.relationship('OwnedPlants', back_populates = 'plant', cascade = 'all, delete')

    serialize_rules = ('-ownedplants.plant',)

    def __repr__(self):
        return f'<Plant  {self.common_name} | {self.filtration}'


class FreshwaterFish(db.Model, SerializerMixin):

    __tablename__ = 'freshwaterfishes'

    id = db.Column(db.Integer, primary_key=True)
    common_name = db.Column(db.String)
    scientific_name = db.Column(db.String)
    bio = db.Column(db.String)
    origin = db.Column(db.String)
    care_level = db.Column(db.String)
    max_size = db.Column(db.Integer)
    ph_range = db.Column(db.String)
    bioload = db.Column(db.Integer)
    image = db.Column(db.String)

    ownedfishes = db.relationship('OwnedFish', back_populates = 'fish', cascade = 'all, delete')

    serialize_rules = ('-ownedfishes.fish',)

    def __repr__(self):
        return f'<Fish {self.common_name} | {self.origin} | {self.bioload}'


''' up: Static Tables '''


class User(db.Model, SerializerMixin):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String, unique = True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    _password_hash = db.Column(db.String)
    bio = db.Column(db.String, nullable = True)

    ownedplants = db.relationship('OwnedPlants', back_populates = 'user' , cascade = 'all, delete')
    ownedfishes = db.relationship('OwnedFish', back_populates = 'user', cascade = 'all, delete')

    serialize_rules = ('-ownedplants.user', '-ownedfishes.user',)

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8')
        )
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    '''    
           up: logic for password security                       
           down: validations for username & names                 
    '''

    @validates('username')
    def validates_username(self, key, value):
        if not value or not 3 <= len(value) <= 20:
            return ValueError('The username must be between 3 and 20 characters long')
        else:
            return value

    @validates('first_name' , 'last_name')
    def validates_names(self, key, value):
        if not value or not 2 <= len(value) <= 20:
            return ValueError('Your first and last name must be between 2 and 20 characters long')
        else:
            return value
    
    serialize_rules = ('-_password_hash', '-password_hash',)
    
    def __repr__(self):
        return f'<User {self.username} | {self.first_name}'
    


class OwnedPlants(db.Model, SerializerMixin):

    __tablename__ = 'ownedplants'

    id = db.Column(db.Integer, primary_key = True)
    plant_id = db.Column(db.Integer, db.ForeignKey('plants.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    plant = db.relationship(Plant, back_populates = 'ownedplants')
    user = db.relationship(User, back_populates = 'ownedplants')

    serialize_rules = (
        '-plant.ownedplants', 
        '-user.ownedplants',
        '-plant.bio',
        '-user.bio',
        '-user.ownedfishes',
        )

    def __repr__(self):
        return f'<OwnedPlant | {self.plant_id} | {self.user_id}'


class OwnedFish(db.Model, SerializerMixin):

    __tablename__ = 'ownedfishes'

    id = db.Column(db.Integer, primary_key = True)
    fish_id = db.Column(db.Integer, db.ForeignKey('freshwaterfishes.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    
    fish = db.relationship(FreshwaterFish, back_populates = 'ownedfishes')
    user = db.relationship(User, back_populates = 'ownedfishes')

    serialize_rules = (
        '-fish.ownedfishes', 
        '-fish.bio',
        '-user.ownedfishes',
        '-user.bio',
        '-user.ownedplants'
        )



class Tank(db.Model, SerializerMixin):

    __tablename__ = 'tanks'

    id = db.Column(db.Integer, primary_key = True)
    size = db.Column(db.Integer)                    # Measured in Gallons
    maximum_bioload = db.Column(db.Integer)         # Base value for logic in TankTester

    def __repr__(self):
        return f'<Tank {self.size} | {self.maximum_bioload}'
    