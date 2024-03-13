"""empty message

Revision ID: 336b73371513
Revises: 3fdf736be34c
Create Date: 2024-03-12 19:02:26.868736

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '336b73371513'
down_revision = '3fdf736be34c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('freshwaterfishes', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('freshwaterfishes', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###