class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end
  def create
    @user = User.create(full_name: params[:name], birthdate: params[:birthdate])
    render json: @user

  end

end
