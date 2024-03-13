from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

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

    def __repr__(self):
        return f'<Plant  {self.common_name} | {self.filtration}'


class FreshwaterFish(db.Model, SerializerMixin):

    __tablename__='freshwaterfishes'

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

    def __repr__(self):
        return f'<Fish {self.common_name} | {self.origin} | {self.bioload}'



