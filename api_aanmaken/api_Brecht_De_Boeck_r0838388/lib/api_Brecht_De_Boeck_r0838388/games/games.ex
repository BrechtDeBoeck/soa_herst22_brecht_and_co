defmodule Api_Brecht_De_BoeckR0838388.GamesContext.Game do
  use Ecto.Schema
  import Ecto.Changeset
  alias Api_Brecht_De_BoeckR0838388.OrderContext.Order

  schema "product" do
    field(:title, :string)
    field(:description, :string)
    field(:price, :integer)
    field(:type, :string, default: "Game")
    field(:picture_url, :string)

    many_to_many(:orders, Order, join_through: "order_product")
  end

  def changeset(game, attrs) do
    game
    |> cast(attrs, [
      :title,
      :description,
      :price,
      :picture_url
    ])
    |> validate_required([
      :title,
      :developer,
      :price,
      :type,
      :picture_url
    ])
  end
end