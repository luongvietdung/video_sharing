# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  include ActionController::MimeResponds

  respond_to :json
end
