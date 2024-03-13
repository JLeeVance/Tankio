#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Plant, FreshwaterFish
from seeddata import plantseeds, fishseeds, tankseeds

plantsToSeed = plantseeds.plantseed
fishToSeed = fishseeds.fishseed
tanksToSeed = tankseeds.tankseed


if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        print("Deleting current data - Plants - Fish")
        Plant.query.delete()
        FreshwaterFish.query.delete()

        print("Seeing Plants")
        db.session.add_all(plantsToSeed)
        db.session.commit()

        print("Seeding FreshwaterFish")
        db.session.add_all(fishToSeed)
        db.session.commit()

        print("Seeding Tanks")
        db.session.add_all(tanksToSeed)
        db.session.commit()



