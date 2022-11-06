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
    query = from(o in "order", join: op in "order_product", on: o.id == op.order_id)
    query = from([o, op] in query, join: p in "product", on: p.id == op.product_id)

    Repo.all(query)
  end

  def update_order(%Order{} = order, %Order{} = current_order, attrs) do
    order
    |> Order.changeset(attrs)
    |> Repo.update()
  end

  def delete_order(%Order{} = order), do: Repo.delete(order)
end