class UsersController < AuthController
  def show
    render json: UserSerializer.new(current_user), status: :ok
  end
end
