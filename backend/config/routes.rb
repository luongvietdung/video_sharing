Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'healthz#show'

  mount ActionCable.server => '/alerts'

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
  resource :user, only: :show, path: 'current_user'
end
