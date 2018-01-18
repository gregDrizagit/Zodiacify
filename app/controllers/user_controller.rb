class UserController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  def create
    @user = User.create(name: params[:name], birthdate: params[:birthdate] )
  end

end
