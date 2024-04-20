# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  include ActionController::MimeResponds

  respond_to :json

  def new
    render json: { message: "Not found" }, status: :not_found
  end

  private

  def respond_with(resource, _opts = {})
    if resource
      render json: {
        user: resource.as_json.slice("email")
      }, status: :ok
    else
      render json: {
        message: "Invalid Email or Password.",
      }, status: :unauthorized
    end
  end

  def respond_to_on_destroy
    if current_user
      render json: { message: 'You are signed out.' }, status: :ok
    else
      render json: { message: 'Unauthorized' }, status: :unauthorized
    end
  end
end
