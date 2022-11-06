defmodule Api_Brecht_De_BoeckR0838388.OrderContext do
  import Ecto.Query, only: [from: 2]

  alias __MODULE__.Order
  alias Api_Brecht_De_BoeckR0838388.Repo

  def change_order(%Order{} = order) do
    order |> Order.changeset(%{})
  end

  def create_order(attrs) do
    %Order{}
    |> Order.changeset(attrs)
    |> Repo.insert()
  end

  def list_orders() do
    from(o in Order, preload: [order_products: :products])
    |> Repo.all()
  end

  def update_order(%Order{} = order, %Order{} = current_order, attrs) do
    order
    |> Order.changeset(attrs)
    |> Repo.update()
  end

  def delete_order(%Order{} = order), do: Repo.delete(order)
end