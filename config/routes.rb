Rails.application.routes.draw do
  resources :comments, only: [:index, :show, :update, :create, :destroy]
  resources :photos,only: [:index, :show, :update, :create, :destroy]
  patch "/photos/:id/like", to: "photos#increment_likes"

  
end
