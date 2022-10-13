class PhotosController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_error
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
       render json: Photo.all,status: :ok
    end 

   

    def show
        photo= find_photo
        render json: photo, status: :ok
    end

     def update
        photo = find_photo
        photo.update!(photo_params)
        render json: photo
    end

    def increment_likes
        photo = find_photo
        photo.update(likes: photo.likes + 1)
        render json: photo
    end

    def create
        photo= Photo.create!(photo_params)
        render json: photo, status: :created
    end


    def destroy
        photo = find_photo
        photo.destroy
        head :no_content
    end

    private

    def render_error
        render json: { error: "Photo not found" }, status: :not_found
     end
    
    def find_photo
         Photo.find(params[:id])
    end
    
    def photo_params
        params.permit(:name, :url, :category, :comments)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
