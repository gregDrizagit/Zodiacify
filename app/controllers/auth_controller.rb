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
    token = request.headers['Authorization']
    current_user = User.find_by(id: token)
    if current_user
      render json: current_user
      # , token: issue_token(the_current_user) NOT YET
    else
      render({json: {error: 'Invalid Token'}, status: 401})
    end
  end

end
