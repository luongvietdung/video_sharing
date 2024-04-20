Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  devise_for :users, defaults: { format: :json }, path: '', path_names: {
    sign_in: 'signin',
    sign_out: 'signout'
  },
  controllers: {
    sessions: 'users/sessions'
  }
  post 'signup', to: 'users/registrations#create', defaults: { format: :json }

  resources :videos, only: [:create, :index] do
    resource :vote, only: :create
  end
  resource :user, only: :show, path: "current_user"
end
