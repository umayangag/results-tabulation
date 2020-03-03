"""empty message

Revision ID: 5f61093c9695
Revises: ab9d4f52637d
Create Date: 2020-03-03 21:29:02.871678

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '5f61093c9695'
down_revision = 'ab9d4f52637d'
branch_labels = None
depends_on = None


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('election', 'isListed',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=False)
    op.alter_column('election_candidate', 'qualifiedForPreferences',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=False)
    op.add_column('election_invalidVoteCategory', sa.Column('invalidVoteCategoryType', sa.String(length=50), nullable=True))
    op.alter_column('invoice', 'confirmed',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=False)
    op.alter_column('invoice', 'delete',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=True)
    op.alter_column('invoice_stationaryItem', 'received',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=False)
    op.alter_column('proof', 'finished',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=True)
    op.alter_column('tallySheetVersion', 'isComplete',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=False)
    op.alter_column('templateRow', 'hasMany',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=False)
    op.alter_column('templateRow', 'isDerived',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=False)
    op.alter_column('templateRowColumn', 'grouped',
               existing_type=mysql.TINYINT(display_width=1),
               type_=sa.Boolean(),
               existing_nullable=False)
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('templateRowColumn', 'grouped',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=False)
    op.alter_column('templateRow', 'isDerived',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=False)
    op.alter_column('templateRow', 'hasMany',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=False)
    op.alter_column('tallySheetVersion', 'isComplete',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=False)
    op.alter_column('proof', 'finished',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=True)
    op.alter_column('invoice_stationaryItem', 'received',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=False)
    op.alter_column('invoice', 'delete',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=True)
    op.alter_column('invoice', 'confirmed',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=False)
    op.drop_column('election_invalidVoteCategory', 'invalidVoteCategoryType')
    op.alter_column('election_candidate', 'qualifiedForPreferences',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=False)
    op.alter_column('election', 'isListed',
               existing_type=sa.Boolean(),
               type_=mysql.TINYINT(display_width=1),
               existing_nullable=False)
    ### end Alembic commands ###
