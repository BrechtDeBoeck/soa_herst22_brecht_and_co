defmodule Api_Brecht_De_BoeckR0838388.GamesContext do
  import Ecto.Query, only: [from: 2]

  alias __MODULE__.Game
  alias Api_Brecht_De_BoeckR0838388.Repo

  def change_game(%Game{} = game) do
    game |> Game.changeset(%{})
  end

  def create_game(attrs) do
    %Game{}
    |> Game.changeset(attrs)
    |> Repo.insert()
  end

  def list_games() do
    query =
      from(p in "product",
      where: p.type == "Game"
      )

    Repo.all(query)
  end

  def update_game(%Game{} = game, %Game{} = current_game, attrs) do
    game
    |> Game.changeset(attrs)
    |> Repo.update()
  end

  def delete_game(%Game{} = game), do: Repo.delete(game)
end