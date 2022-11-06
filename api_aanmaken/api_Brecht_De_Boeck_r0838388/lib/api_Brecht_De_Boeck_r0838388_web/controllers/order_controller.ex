defmodule Api_Brecht_De_BoeckR0838388Web.OrderController do
  use Api_Brecht_De_BoeckR0838388Web, :controller

  alias Api_Brecht_De_BoeckR0838388.OrderContext
  alias Api_Brecht_De_BoeckR0838388.OrderContext.Order
  alias Api_Brecht_De_BoeckR0838388.OrderProductContext

  def list(conn, _params) do
    orders = OrderContext.list_orders()
    render(conn, "list.json", orders: orders)
  end

  def create() do

  end

  def update() do

  end

  def delete() do

  end

  def test(conn, _params) do
    render(conn, "test.json")
  end
end