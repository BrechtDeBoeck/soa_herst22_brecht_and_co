defmodule Api_Brecht_De_BoeckR0838388Web.Router do
  use Api_Brecht_De_BoeckR0838388Web, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", Api_Brecht_De_BoeckR0838388Web do
    pipe_through :api

    #Get data from external API
    get("/games", GameController, :list)
    post("/games", GameController, :create)
    put("/games/:id", GameController, :update)
    patch("/games/:id", GameController, :update)
    delete("/games/:id", GameController, :delete)

    #Create orders
    get("/orders", OrderController, :list)
    post("/orders", OrderController, :create)
    put("/orders/:id", OrderController, :update)
    patch("/orders/:id", OrderController, :update)
    delete("/orders/:id", OrderController, :delete)
  end

  # Enables LiveDashboard only for development
  #
  # If you want to use the LiveDashboard in production, you should put
  # it behind authentication and allow only admins to access it.
  # If your application does not have an admins-only section yet,
  # you can use Plug.BasicAuth to set up some basic authentication
  # as long as you are also using SSL (which you should anyway).
  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/live" do
      pipe_through [:fetch_session, :protect_from_forgery]

      live_dashboard "/dashboard", metrics: Api_Brecht_De_BoeckR0838388Web.Telemetry
    end
  end

  # Enables the Swoosh mailbox preview in development.
  #
  # Note that preview only shows emails that were sent by the same
  # node running the Phoenix server.
  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through [:fetch_session, :protect_from_forgery]

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
