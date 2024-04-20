module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    protected

    def find_verified_user
      unless request.headers.key?('Authorization') && request.headers['Authorization'].split(' ').size > 1
        reject_unauthorized_connection
      end

      token = request.headers['Authorization'].split(' ').last
      decoded_token = JWT.decode(token, Rails.application.credentials.secret_key_base!).first
      if (current_user = User.find_by_jti(decoded_token['jti']))
        current_user
      else
        reject_unauthorized_connection
      end
    rescue JWT::DecodeError
      reject_unauthorized_connection
    end
  end
end
