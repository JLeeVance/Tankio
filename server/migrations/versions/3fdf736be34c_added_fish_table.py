"""added fish table

Revision ID: 3fdf736be34c
Revises: 6de371e80242
Create Date: 2024-03-12 19:00:09.148167

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3fdf736be34c'
down_revision = '6de371e80242'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('freshwaterfishes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('common_name', sa.String(), nullable=True),
    sa.Column('scientific_name', sa.String(), nullable=True),
    sa.Column('bio', sa.String(), nullable=True),
    sa.Column('origin', sa.String(), nullable=True),
    sa.Column('care_level', sa.String(), nullable=True),
    sa.Column('max_size', sa.Integer(), nullable=True),
    sa.Column('ph_range', sa.String(), nullable=True),
    sa.Column('bioload', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('freshwaterfishes')
    # ### end Alembic commands ###