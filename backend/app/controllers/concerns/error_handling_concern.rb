module ErrorHandlingConcern
  extend ActiveSupport::Concern

  included do
    if Rails.env.production?
      rescue_from StandardError, with: :internal_server_error_handler
      rescue_from ActionDispatch::Http::Parameters::ParseError, with: :parse_error_handler
      rescue_from ActiveRecord::RecordNotUnique, with: :unprocessable_entity_handler
      rescue_from ActiveRecord::RecordNotFound, with: :not_found_handler
    end

    private
    def unprocessable_entity_handler
      render json: { message: 'Something went wrong. Please try again' }, status: :unprocessable_entity
    end

    def internal_server_error_handler
      render json: { message: 'Something went wrong. Please try again' }, status: :internal_server_error
    end

    def parse_error_handler
      render json: { message: 'Body params is not JSON' }, status: :bad_request
    end

    def not_found_handler
      render json: { message: 'Not Found' }, status: :not_found
    end
  end
end
