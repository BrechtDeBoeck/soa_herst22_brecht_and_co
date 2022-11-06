defmodule Api_Brecht_De_BoeckR0838388Web.OrderView do
  use Api_Brecht_De_BoeckR0838388Web, :view

  alias Api_Brecht_De_BoeckR0838388Web.OrderView
  alias Api_Brecht_De_BoeckR0838388Web.ProductView

  def render("list.json", %{orders: orders}) do
    render_many(orders, OrderView, "order.json")
  end

  def render("order.json", %{order: order}) do
    %{
      id: order.id,
      email: order.email,
      date: order.date,
      products: render_many(order.products, ProductView, "product.json")
    }
  end
end