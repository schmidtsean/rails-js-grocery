Rails.application.routes.draw do
  namespace :api do 
    resources :groceries
  end
end
