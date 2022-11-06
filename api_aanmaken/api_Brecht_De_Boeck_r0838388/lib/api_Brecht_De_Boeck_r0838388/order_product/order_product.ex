defmodule Api_Brecht_De_BoeckR0838388.OrderProductContext.OrderProduct do
  use Ecto.Schema
  import Ecto.Changeset
  alias Api_Brecht_De_BoeckR0838388.OrderContext.Order
  alias Api_Brecht_De_BoeckR0838388.GamesContext.Game

  schema("order_product") do
    belongs_to(:order_id, Order)
    belongs_to(:product_id, Game)
  end

  def changeset(order_product, attrs) do
    order_product
    |> cast(attrs, [:order_id, :product_id])
    |> validate_required([:order_id, :product_id])
  end
end