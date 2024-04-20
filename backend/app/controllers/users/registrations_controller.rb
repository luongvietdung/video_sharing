# frozen_string_literal: true

class Users::RegistrationsController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render_success
    else
      render_failure
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end

  def render_success
    render json: {
      message: 'Signed up successfully',
      user: @user.as_json.slice("email")
    }, status: :ok
  end

  def render_failure
    render json: {
      message: "User couldn't be created successfully. #{@user.errors.full_messages.to_sentence}"
    }, status: :unprocessable_entity
  end
end
