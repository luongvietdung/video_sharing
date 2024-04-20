# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include ActionController::MimeResponds

  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if request.method == "DELETE"
      # current_user is destroyed successfully
      head :ok
    elsif resource.persisted?
      render_success
    else
      render_failure
    end
  end

  def render_success
    render json: {
      message: 'Signed up successfully',
      user: current_user.as_json(:email, :id)
    }, status: :ok
  end

  def render_failure
    render json: {
      message: "User couldn't be created successfully. #{current_user.errors.full_messages.to_sentence}"
    }, status: :unprocessable_entity
  end
end
