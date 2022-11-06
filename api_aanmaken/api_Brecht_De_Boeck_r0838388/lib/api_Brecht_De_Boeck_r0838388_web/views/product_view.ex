defmodule Api_Brecht_De_BoeckR0838388Web.ProductView do
  use Api_Brecht_De_BoeckR0838388Web, :view

  alias Api_Brecht_De_BoeckR0838388Web.ProductView

  def render("list.json", %{products: products}) do
    render_many(products, ProductView, "product.json")
  end

  def render("product.json", %{product: game}) do
    %{
      id: game.id,
      description: game.description,
      price: game.price,
      type: game.type,
      picture_url: game.picture_url
    }
  end
end