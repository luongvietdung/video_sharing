class UsersController < AuthController
  def show
    render json: { user: current_user.as_json.slice("email") }, status: :ok
  end
end
