# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController
  include ActionController::MimeResponds

  respond_to :json
end
