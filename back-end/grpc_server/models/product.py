from sqlalchemy import Column, Integer, Text, String, DateTime, Float
from sqlalchemy.orm import Mapped, mapped_column

from .meta import Base

# op.create_table(
#         "product",
#         sa.Column("id", sa.Integer(), nullable=False),
#         sa.Column("name", sa.String(length=255), nullable=False),
#         sa.Column("description", sa.Text(), nullable=False),
#         sa.Column("price", sa.Float(), nullable=False),
#         sa.Column("image_url", sa.String(length=255), nullable=False),
#         sa.Column("stock", sa.Integer(), nullable=False),
#         sa.PrimaryKeyConstraint("id"),
#     )


class Product(Base):
    __tablename__ = "product"

    id: Mapped[int] = Column(Integer, primary_key=True)
    name: Mapped[str] = Column(String(255), nullable=False)
    description: Mapped[str] = Column(Text, nullable=False)
    price: Mapped[float] = Column(Integer, nullable=False)
    image_url: Mapped[str] = Column(String(255), nullable=False)
    stock: Mapped[int] = Column(Integer, nullable=False)
