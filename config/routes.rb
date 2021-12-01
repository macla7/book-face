Rails.application.routes.draw do
  resources :group_invites
  default_url_options :host => "example.com"
  
  scope '/api' do
    resources :users do
      member do
        get 'notifications'
      end
    end
    resources :groups
    resources :group_invites
    resources :memberships

    # or should I be quierying memberships for this...
    get '/group/:id/members', to: 'groups#members'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: %w[show]
  end

  devise_for :users,
    defaults: { format: :json },
    path: '',
    path_names: {
      sign_in: 'api/login',
      sign_out: 'api/logout',
      registration: 'api/signup'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

  devise_for :admin_users, ActiveAdmin::Devise.config

  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
