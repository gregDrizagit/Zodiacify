class AuthController < ApplicationController
  def create
    user = User.find_by(full_name: params[:full_name])

    if user && user.authenticate(params[:password])
      render json: {id: user.id, full_name: user.full_name}
      # token: issue_token(user) NOT YET.
    else
      render({json: {error: 'User is not valid'}, status: 401})
    end
  end

  def show
    if current_user
      render json: {id: current_user.id, username: current_user.username, token: issue_token(the_current_user)}
    else
      render({json: {error: 'Token is not valid'}, status: 401})
    end
  end

end
