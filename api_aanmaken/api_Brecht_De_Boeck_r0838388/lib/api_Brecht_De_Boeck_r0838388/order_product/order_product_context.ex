defmodule Api_Brecht_De_BoeckR0838388.OrderProductContext do
  alias __MODULE__.OrderProduct
  alias Api_Brecht_De_BoeckR0838388.OrderContext.Order
  alias Api_Brecht_De_BoeckR0838388.GamesContext.Game
  alias Api_Brecht_De_BoeckR0838388.Repo

  def change_order_product(%OrderProduct{} = order_product) do
    order_product |> OrderProduct.changeset(%{})
  end

  def add_product_to_order(attrs) do
    %OrderProduct{}
    |> OrderProduct.changeset(attrs)
    |> Repo.insert()
  end
end